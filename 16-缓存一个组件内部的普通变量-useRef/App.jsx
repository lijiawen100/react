import { useRef, useState } from "react";

const App = (props) => {
  console.log(
    "函数组件特点：每一次更新都会执行其内部的 '所有' 逻辑, hooks除外,hooks会被缓存"
  );

  const [count, setCount] = useState(0);

  // let id = 1;
  // 缓存一个普通变量
  const id = useRef(1);
  id.current++;
  console.log("id", id.current);

  return (
    <>
      <h3>缓存一个组件内部的普通变量-useRef</h3>
      <button onClick={() => setCount(count + 1)}>更新</button>
      <div>{count}</div>
    </>
  );
};
export default App;
