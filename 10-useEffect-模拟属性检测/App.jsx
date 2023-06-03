import { useEffect, useState } from "react";

const App = () => {
  const [ipt, setIpt] = useState("");
  const [list, setList] = useState([]);
  //vue2
  /* watch:{
      ipt:{
        handler:function(){业务},
        incmerdate:true
      }
  } */

  //vue3
  // watch('属性',()=>异步业务,{配置})

  //react: 默认首次运行，默认深度检测
  // useEffect(() => 异步业务, [要检测数据1, 要检测数据N]);
  useEffect(() => {
    if (!ipt) return;
    console.log("ipt变了");

    setTimeout(() => {
      let data = [1, 2, 3, 4, 5];
      setList(data);
    }, 2000);
  }, [ipt]);
  return (
    <>
      <div>App</div>

      <input type="text" value={ipt} onChange={(e) => setIpt(e.target.value)} />

      <div>{list}</div>
    </>
  );
};
export default App;
