import { useState } from "react";
import Context from "./Context";

const Provider = ({ children, ...rest }) => {
  const [state, setState] = useState(rest); //{count,msg,theme,local}

  const increment = (val = 1, ev) =>
    setState({ ...state, count: state.count + val });

  //封装一些能力
  return (
    <Context.Provider value={{ ...state, increment }}>
      {children}
    </Context.Provider>
  );
};
export default Provider;
