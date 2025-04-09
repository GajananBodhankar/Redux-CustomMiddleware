import axios from "axios";
import { failure, success } from "../Redux/Slice";

interface iTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface iData {
  data: iTodo[];
  status: "Idle" | "Loading" | "Success" | "Failed";
}

export interface iAction {
  type: "todoSlice/success" | "todoSlice/failure";
  payload: any;
}

export interface iDispatch {
  payload: any;
  type: "todoSlice/success" | "todoSlice/failure";
}
export const Actions = { LOADING: "todoSlice/loading", SUCCESS: "todoSlice/success", FAILURE: "todoSlice/failure" };

export async function apiCall(dispatch: (arg0: iDispatch) => void, action: iAction, next: (action: iAction) => void) {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    if (result.status === 200) {
      console.log(result.data, action);
      if (action?.type === Actions.LOADING) {
        dispatch(success(result.data));
      }
    }
  } catch (error) {
    dispatch(failure());
  } finally {
    next(action);
  }
}
