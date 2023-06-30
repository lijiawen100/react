import ReactDom from "react-dom/client";
import App from "./App";
import store from "./stores";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
