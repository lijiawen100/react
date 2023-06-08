import ReactDom from "react-dom/client";

import App from "./App";
import AntdConfig from "./AntdConfig";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <AntdConfig>
    <App />
  </AntdConfig>
);
