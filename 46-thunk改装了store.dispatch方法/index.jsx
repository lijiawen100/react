import ReactDom from "react-dom/client";
import App from "./App";
import store from "./stores";

const root = ReactDom.createRoot(document.getElementById("root"));

//订阅store里面的state变化
// store.subscribe(函数)；//state变化了，就会调用函数
store.subscribe(() => root.render(<App />));

root.render(<App />);
