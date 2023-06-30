import store from "./stores";
const B = () => {
  return (
    <>
      <h3>B</h3>
      <div>{store.getState().count}</div>
      {/* <button onClick={() => store.dispatch(action)}>+</button> */}
      <button onClick={() => store.dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => store.dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
    </>
  );
};
export default B;
