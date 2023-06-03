import { useState, useMemo } from "react";
const App = () => {
  const [ipt, setIpt] = useState(0);

  //vue3
  // const cptIpt = computed(()=>'计算后的内容')
  // const memoIpt = useMemo(()=>'计算后的内容',[要依赖的数据1，要依赖的数据N])
  const memoIptDouble = useMemo(() => ipt * 2, [ipt]);
  return (
    <>
      <h3>计算属性-useMemo</h3>
      <input
        type="number"
        value={ipt}
        onChange={(e) => setIpt(e.target.value)}
      />

      <div>{memoIptDouble}</div>
    </>
  );
};
export default App;
