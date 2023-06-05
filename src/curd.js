import { useMemo, useState } from "react";

function useCurd(initDate = [], { searchKeyWords, key }) {
  // 初始化响应式数据
  const [data, setData] = useState(initDate); //[{id,nikename,content}] [{_id,name,price}]

  // 业务逻辑
  function add(item) {
    let tmpArr = [...data];
    tmpArr.push(item);
    setData(tmpArr);
  }

  function del(index) {
    let tmpArr = [...data];
    tmpArr.splice(index, 1);
    setData(tmpArr);
  }

  function check(index, key, value) {
    let tmpArr = [...data];
    tmpArr[index][key] = value;
    setData(tmpArr);
  }

  const memoData = useMemo(
    () => data.filter((item) => item[key].includes(searchKeyWords)),
    [data, key, searchKeyWords]
  );

  // 返回响应数据，方法
  return { data, add, del, check, memoData };
}
export default useCurd;
