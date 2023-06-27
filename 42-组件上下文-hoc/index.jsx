import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "./redux";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider count={10} msg="小夏" local="zh-cn" theme="dark">
    <App />
  </Provider>
);
