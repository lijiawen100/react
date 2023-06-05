import { useState } from "react";
import B from "./B";

const App = (props) => {
  console.log(
    "函数组件特点：每一次更新都会执行其内部的 '所有' 逻辑, hooks除外,hooks会被缓存"
  );

  const [bl, setBl] = useState(false);
  const [title, setTitle] = useState("标题");

  return (
    <>
      <h3>缓存一个组件</h3>
      <h4>{title}</h4>
      <button onClick={() => setTitle(title + "--")}>修改title</button>
      <button onClick={() => setBl(!bl)}>控制B</button>
      {bl && <B />}
    </>
  );
};
export default App;
