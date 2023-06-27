import { connect } from "./redux";

const C = ({ count, increment }) => {
  return (
    <>
      <h3>C</h3>
      <div>{count}</div>
      <button onClick={() => increment(2)}>+</button>
    </>
  );
};

// export default C;
export default connect((context) => ({
  count: context.count,
  increment: context.increment,
}))(C);
// export default connect()(C);
// export default memo(C);//HOC 包装C，包装完了 C可以缓存了
