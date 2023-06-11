import ReactDom from "react-dom/client";
import RouterConfig from "./plugins/routes";
import AntdConfig from "./plugins/antd";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <AntdConfig>
    <RouterConfig />
  </AntdConfig>
);
