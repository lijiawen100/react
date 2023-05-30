import ReactDom from "react-dom/client";

let box = (
  <div title="课程">
    <h3>react{18 + "." + 2 + "." + 0}课程</h3>
    <ul>
      <li>jsx</li>
      <li>组件</li>
      <li>vdom</li>
    </ul>
  </div>
);

//18

//const root =  ReactDom.createRoot(插入点);
const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(jsx|数字|字符)
root.render(box);
