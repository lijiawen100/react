import { useCallback, useState } from "react";
import B from "./B";

const App = (props) => {
  console.log(
    "函数组件特点：每一次更新都会执行其内部的 '所有' 逻辑, hooks除外,hooks会被缓存"
  );

  const [bl, setBl] = useState(false);
  const [title, setTitle] = useState("标题");
  const [title2, setTitle2] = useState("标题2");

  //缓存后的函数 =  useCallback(函数体,[依赖])

  // const show = () => console.log("app show");

  const show = useCallback(() => console.log("app show", title), [title]);

  return (
    <>
      <h3>缓存一个缓存</h3>
      <h4>{title}</h4>
      <h4>{title2}</h4>
      <button onClick={() => setTitle(title + "--")}>修改title</button>
      <button onClick={() => setTitle2(title2 + "--")}>修改title2</button>
      <button onClick={() => setBl(!bl)}>控制B</button>
      {bl && <B show={show} />}
    </>
  );
};
export default App;
