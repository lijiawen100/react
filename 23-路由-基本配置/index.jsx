import ReactDom from "react-dom/client";

import RouterConfig from "./routes";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterConfig/>);
