import React from "react";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { loading } from "../Redux/Slice";

function TodoList() {
  const { data, status } = useAppSelector((state) => state.SliceReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <button
        onClick={() => {
          dispatch(loading());
        }}
      >
        Get Data
      </button>
      {data?.map((i) => (
        <div key={i.id} className="items">
          <p>{i.id}</p>
          <p>{i.title}</p>
          <p>{i.completed}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
