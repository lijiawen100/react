import { useMemo, useState } from "react";

const Index = (props) => {
  console.log(
    "函数组件特点：每一次更新都会执行其内部的 '所有' 逻辑, hooks除外,hooks会被缓存"
  );

  const [count, setCount] = useState(1);
  const [value, setValue] = useState("");
  
  /* const getCountDouble = () => {
    console.log("double");
    return count * 2;
  }; */

  const memoCountDouble = useMemo(() => {
    console.log("double");
    return count * 2;
  }, [count]);
 

  return (
    <>
      <div>缓存一个处理后的值-useMemo</div>
      <div>count:{count}</div>
      <div>
        count*2:{memoCountDouble}/{memoCountDouble}/{memoCountDouble}
      </div>
      <button onClick={() => setCount(count + 1)}>更新</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>value:{value}</div>
    </>
  );
};
export default Index;
