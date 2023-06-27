import { useContext } from "react";
import Context from "./Context";

// hoc
const connect = (getStateFromProps) => (Component) => {
  // 业务

  const Consumer = (props) => {
    // 业务
    const context = useContext(Context); //抓取下文
    if (getStateFromProps && typeof getStateFromProps === "function") {
      const result = getStateFromProps(context);
      return <Component {...result} {...props} />;
    } else {
      return <Component {...context} {...props} />;
    }
  };

  return Consumer; //返回包装后的组件
};

export default connect;
