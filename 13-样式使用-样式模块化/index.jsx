import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css"; //全局样式

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
