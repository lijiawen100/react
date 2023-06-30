import { useDispatch, useSelector } from "react-redux";

const B = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h3>B</h3>
      <div>{count}</div>
      {/* <button onClick={() => store.dispatch(action)}>+</button> */}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
    </>
  );
};
export default B;
