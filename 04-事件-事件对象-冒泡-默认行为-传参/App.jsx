const show1 = () => console.log("show1"); //来自外部js模块

const App = (props) => {
  const show11 = () => console.log("show11"); //来自内部

  const show2 = (e) => console.log("show2", e);

  const show3 = (e) => {
    console.log("show3", e.currentTarget);
    e.stopPropagation();
  };
  const show4 = (e) => {
    console.log("show4");
    e.preventDefault();
  };
  const show5 = (num, e, str) => {
    console.log("show5", num, e, str);
  };
  return (
    <div>
      <h3>App</h3>

      {/* 原生js行间事件 */}
      {/* <button onclick="alert(1)">按钮</button> */}

      {/* react事件绑定 */}
      <button onClick={show1}>外部函数-公共</button>
      <button onClick={show11}>内部函数-私有</button>

      {/* 事件对象 */}
      <button onClick={show2}>事件对象</button>

      <h3>冒泡</h3>
      <div onClick={show3}>
        <button onClick={show3}>按钮</button>
      </div>

      <h3>默认行为</h3>
      <input type="text" onContextMenu={show4} />

      <h3>传参</h3>
      <button onClick={(e) => show5(12, e, "ben")}>按钮</button>
    </div>
  );
};
export default App;
