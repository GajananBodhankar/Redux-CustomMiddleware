import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "./Slice";
import { apiCall } from "../Components/Logic";

const CustomMiddleware = (store: any) => {
  return function (next: any) {
    return function (action: any) {
      const { SliceReducer } = store.getState();
      if (!SliceReducer.data?.length) return apiCall(store.dispatch, action, next);
      else next(action);
    };
  };
};
const Store = configureStore({
  reducer: {
    SliceReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(CustomMiddleware);
  },
});
export default Store;
