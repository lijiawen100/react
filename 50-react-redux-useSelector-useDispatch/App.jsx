import { useSelector, useDispatch } from "react-redux";
import B from "./B";
import { asyncAdd } from "./stores/actions/list";

//UI
const App = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <>
      <h3>APP</h3>
      <button onClick={() => dispatch({ type: "add", payload: "ee" })}>
        增
      </button>
      <button onClick={() => dispatch(asyncAdd)}>
        读数据，返回结果，把结果拿去增
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => dispatch({ type: "del", payload: index })}>
              删
            </button>
          </li>
        ))}
      </ul>
      <B></B>
    </>
  );
};
export default App;
