import { useEffect, useState } from "react";

const B = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  /* useEffect(() => {
    console.log("挂载+更新");
  }); */

  /* useEffect(() => {
    console.log("挂载");
  }, []); */

  /* useEffect(() => {
    return () => console.log("卸载");
  }, []); */

   useEffect(() => {
    console.log("挂载");
    return () => console.log("卸载");
  }, []);

  // 属性检测
  /* useEffect(() => {
    console.log("指定的数据变了");
  }, [count2]); */

  return (
    <>
      <h3>B</h3>
      <button onClick={() => setCount(count + 1)}>更新b数据count</button>
    </>
  );
};
export default B;
