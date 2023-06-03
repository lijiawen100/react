import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [str] = useState("qq");
  const [arr] = useState([1, 2, 3, 4]);
  const [obj] = useState({ a: 1, b: 2 });

  const [un] = useState(undefined);
  const [nu] = useState(null);
  const [bl] = useState(false);

  const [list, setList] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "旺旺雪饼" },
  ]);

  const check = () => setCount(count + 1);
  const check2 = () => {
    //1. 复杂数据类型修改： 浅拷贝+修改+set覆盖(修改数据时，当前数据要断开引用)
    /* let tmpArr = [...list];
    tmpArr[1].name = "方便面";
    setList(tmpArr); */

    let tmpArr = [...list];
    tmpArr.splice(0, 1, { id: 1, name: "华为" });
    setList(tmpArr);
  };

  return (
    <div>
      <h3>组件状态</h3>
      {/* 使用 */}
      <div>{count}</div>
      {/* 修改 */}
      <button onClick={check}>修改</button>

      <h3>数据类型在jsx直接渲染的表现</h3>
      <div>number:{count}</div>
      <div>string:{str}</div>
      <div>arr:{arr}</div>
      <div>
        obj:{obj.a}/{obj.b}
      </div>
      <div>undefined:{un}</div>
      <div>null:{nu}</div>
      <div>boolean:{bl}</div>

      <h3>推荐的组件状态修改方案</h3>
      <div>{list[0].name}</div>
      <button onClick={check2}>修改</button>
    </div>
  );
};
export default App;
