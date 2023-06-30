import B from "./B";
import store from "./stores";
const App = () => {
  return (
    <>
      <h3>APP</h3>
      <button onClick={() => store.dispatch({ type: "add", payload: "ee" })}>
        增
      </button>
      <ul>
        {store.getState().list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => store.dispatch({ type: "del", payload: index })}
            >
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
