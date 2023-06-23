import { useEffect, useState } from "react";

const B = ({ toMsg3 }) => {
  const [msg3] = useState("b数据");
  useEffect(() => toMsg3(msg3), [toMsg3, msg3]);
  return (
    <>
      <h3>B</h3>
    </>
  );
};
export default B;
