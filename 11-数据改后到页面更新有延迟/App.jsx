import { useState, useEffect } from "react";
const Index = () => {
  const [ipt, setIpt] = useState(100);
  // const [h, setH] = useState(0);

  /* const check = () => {
    setH(ipt); //改数据
    //获取
    console.log("box盒子的高度", document.getElementById("bbox").offsetHeight);
  }; */

  //数据修改后，页面变化完，再去操作dom
  useEffect(() => {
    console.log("box盒子的高度", document.getElementById("bbox").offsetHeight);
  }, [ipt]);
  return (
    <>
      <h3>数据修改后，到页面变化，是有延时的</h3>
      <h3>需求：希望数据修改后，页面变化完，再去操作dom</h3>

      <input
        type="number"
        value={ipt}
        onChange={(e) => setIpt(e.target.value - 0)}
      />

      {/* <button onClick={check}>改数据&&获取dom状态</button> */}

      {/* <div id="bbox" style={{ background: "red", height: h }}>
        box
      </div> */}

      <div id="bbox" style={{ background: "red", height: ipt }}>
        box
      </div>
    </>
  );
};
export default Index;
