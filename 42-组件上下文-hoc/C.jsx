import { connect } from "./redux";

const C = ({ count, msg, increment, theme, title }) => {
  return (
    <>
      <h3>C</h3>
      <div>
        {count}/{msg}
      </div>
      <div>{theme}</div>
      <div>{title}</div>
      <button onClick={() => increment(2)}>+</button>
    </>
  );
};

// export default C;
export default connect(C);
// export default memo(C);//HOC 包装C，包装完了 C可以缓存了
