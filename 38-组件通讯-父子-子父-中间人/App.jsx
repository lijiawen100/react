import { useState } from "react";
import A from "./A";
import B from "./B";
const App = () => {
  const [msg1] = useState("app数据");
  const [msg3, setMsg3] = useState("");

  const getMsg3 = (data) => setMsg3(data);

  return (
    <>
      <h3>App</h3>
      <div>{msg3}</div>

      {/* 父子 */}
      <A msg1={msg1}></A>

      {/* 子父 */}
      <B toMsg3={getMsg3}></B>

      {/* 中间人 */}
      <A msg3={msg3}></A>
    </>
  );
};
export default App;
