import { useContext } from "react";
import { Context } from "./redux/Provieder";

const C = () => {
  const { msg, count, increment } = useContext(Context); //抓取下文
  return (
    <>
      <h3>C</h3>
      <div>
        {count}/{msg}
      </div>
      <button onClick={() => increment(1)}>+</button>
    </>
  );
};

export default C;
