import { useEffect, memo } from "react";

const B = ({ show }) => {
  useEffect(() => console.log("B挂载+更新"));

  return (
    <>
      <h3>B</h3>
      <button onClick={show}>调用传入的缓存函数</button>
    </>
  );
};
//缓存一个组件
export default memo(B);
