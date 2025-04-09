import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "./Slice";
import { apiCall } from "../Components/Logic";

const CustomMiddleware = (store: any) => {
  return function (next: any) {
    return function (action: any) {
      return apiCall(store.dispatch, action, next);
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

