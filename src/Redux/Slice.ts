import { createSlice } from "@reduxjs/toolkit";
import { iData } from "../Components/Logic";

const initialState: iData = {
  data: [],
  status: "Idle",
};
const Slice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    success: (state, action) => {
      console.log(state, "reuslt");
      state.data = action.payload;
      state.status = "Success";
    },
    failure: (state) => {
      state.data = [];
      state.status = "Failed";
    },
    loading: (state) => {
      state.status = "Loading";
    },
  },
});
export const { failure, loading, success } = Slice.actions;
export const SliceReducer = Slice.reducer;
