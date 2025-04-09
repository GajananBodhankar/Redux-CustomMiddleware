import "./App.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import TodoList from "./Components/TodoList";

function App() {
  return <TodoList />;
}

export default function () {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}
