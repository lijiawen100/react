import { useEffect, memo } from "react";

const B = (props) => {
  useEffect(() => console.log("B挂载+更新"));

  return (
    <>
      <h3>B</h3>
    </>
  );
};
//缓存一个组件
export default memo(B);
