import { useContext } from "react";
import Context from "./redux/Context";

const C = () => {
  const { msg, count, setCount } = useContext(Context); //抓取下文
  return (
    <>
      <h3>C</h3>
      <div>
        {count}/{msg}
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default C;
