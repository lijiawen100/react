import ReactDom from "react-dom/client";
import App from "./App";
import B from "./B.jsx";
import A from "./A.jsx";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <App title={<h3>标题</h3>} compA={<A />} fn={() => console.log("...")}>
    <B></B>
  </App>
);
