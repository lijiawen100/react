import ReactDom from "react-dom/client";
import RouterConfig from "./plugins/routes";
import AntdConfig from "./plugins/antd";
import { Provider } from "react-redux";
import store from "./stores";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AntdConfig>
      <RouterConfig />
    </AntdConfig>
  </Provider>
);
