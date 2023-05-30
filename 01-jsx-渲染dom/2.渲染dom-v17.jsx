import ReactDom from "react-dom";

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

//17

// ReactDom.render(jsx元素|字符|数字,插入点,回调);
ReactDom.render(box, document.getElementById("root"), () => {
  console.log("render is over");
});
