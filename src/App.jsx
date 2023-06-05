import { useState } from "react";

import useCurd from "./curd";

const App = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const { memoData, add, del, check } = useCurd(
    [
      { name: "iphone", address: "外滩18号" },
      { name: "iphone2", address: "外滩188号" },
    ],
    { searchKeyWords, key: "address" }
  );

  return (
    <>
      <h3>商品列表</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <button onClick={() => add({ name, address })}>添加商品</button>

      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>家庭住址</th>
            <th>
              <input
                type="text"
                placeholder="搜索"
                value={searchKeyWords}
                onChange={(e) => setSearchKeyWords(e.target.value)}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {memoData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => check(index, "address", "外滩1号")}>
                  编辑
                </button>
                <button onClick={() => del(index)}>删除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default App;
