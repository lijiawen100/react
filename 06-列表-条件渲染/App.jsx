import { useState } from "react";
const App = () => {
  const arr = ["a", "b", "c"];
  const [arr2] = useState([
    { id: 1, name: "alex" },
    { id: 2, name: "苏菲" },
  ]);
  const [arr3] = useState([
    { id: 1, name: "alex" },
    {
      id: 2,
      name: "苏菲",
      child: [
        { id: 1, name: "pp" },
        { id: 2, name: "pp123" },
      ],
    },
  ]);

  const [b1, setB1] = useState(false);

  const [city] = useState("shanghai");

  let box=null;
  if(city==="shanghai"){
    box=<div>上海</div>
  }else if(city==="beijing"){
    box=<div>北京</div>
  }else if(city==="tangshan"){
    box=<div>唐山</div>
  }
  return (
    <div>
      <h3>列表渲染</h3>

      <ul>
        {arr.map((item, index) => (
          <li key={item}>
            {item}/{index}
          </li>
        ))}
      </ul>

      <hr />
      <ul>
        {arr2.map((item, index) => (
          <li key={item.id}>
            {item.id}/{item.name}/{index}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {arr3.map((item, index) => (
          <li key={item.id}>
            {item.id}/{item.name}/{index}
            <ul>
              {/* {item.child?.map((item, index) => ( */}
              {item.child &&
                item.child.map((item, index) => (
                  <li key={item.id}>
                    {item.id}/{item.name}/{index}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3>条件渲染</h3>
      <button onClick={() => setB1(!b1)}>按钮</button>

      {/* 一种条件 */}
      {b1 && <div>box1</div>}

      {/* 两种条件 */}
      {b1 ? <div>box2</div> : <div>box3</div>}

      {/* 多种条件 */}
      {city === "shanghai" && <div>上海</div>}
      {city === "beijing" && <div>北京</div>}
      {city === "tangshan" && <div>唐山</div>}

      {/* 手痒，想写语句 */}
      {box}
    </div>
  );
};
export default App;
