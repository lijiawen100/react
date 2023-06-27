import { useState } from "react";
import A from "./A";
import Context from "./redux/Context";
const App = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("信息");
  return (
    <>
      <h3>app</h3>
      <div>
        {count}/{msg}
      </div>

      {/*  提供上文 */}
      <Context.Provider value={{ count, setCount, msg, setMsg }}>
        <A></A>
      </Context.Provider>
    </>
  );
};
export default App;
