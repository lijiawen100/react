import ReactDom from "react-dom/client";
import App from "./BaseLayouts/App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <App
    str="字符串1"
    num={100}
    str2={"字符串2"}
    arr={[1, 2, 3]}
    obj={{ a: 1, b: 2 }}
  />
);
