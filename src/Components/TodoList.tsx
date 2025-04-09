import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { loading } from "../Redux/Slice";

function TodoList() {
  const { data } = useAppSelector((state) => state.SliceReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <h2>Custom Redux Middleware</h2>
      <button
        onClick={() => {
          dispatch(loading());
        }}
      >
        Get Data
      </button>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
