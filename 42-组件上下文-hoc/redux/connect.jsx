import { useContext } from "react";
import Context from "./Context";

// hoc
const connect = (Component) => {
  // 业务

  const Consumer = (props) => {
    // 业务
    const context = useContext(Context); //抓取下文

    return <Component {...context} {...props} />;
  };

  return Consumer; //返回包装后的组件
};

export default connect;
