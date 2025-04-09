import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { loading } from "../Redux/Slice";

function TodoList() {
  const { data } = useAppSelector((state) => state.SliceReducer);
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
      <ul>
        {data?.map((i) => (
          <li key={i.id}>
            <p>{i.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
