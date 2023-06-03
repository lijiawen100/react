import { useState } from "react";
let id = 2;
const App = () => {
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([
    { id: 1, nickname: "奥姑", content: "不良帅，你在吗？" },
    { id: 2, nickname: "不良帅", content: "本帅在此，何事" },
  ]);
  const [searchIpt, setSearchIpt] = useState("");
  const [searchList, setSearchList] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [now, setNow] = useState(0); //激活修改的索引
  const [checkContent, setCheckContent] = useState("");
  // 增
  const add = () => {
    setList([...list, { nickname, content, id: id++ }]);
    setNickName("");
    setContent("");
  };
  // 删
  const remove = (index) => {
    let delList = [...list];
    delList.splice(index, 1);
    setList(delList);
  };
  // 选
  const select = (index) => {
    setIsModal(true); //显示模态框
    setNow(index); //跟新索引
    setCheckContent(list[index].content); //跟新修改框内容
  };

  // 改
  const check = () => {
    let tmpArr = [...list];
    tmpArr.splice(now, 1, { ...list[now], content: checkContent });
    setList(tmpArr);
    setIsModal(false);
  };
  // 查
  const search = () => {
    let filterList = list.filter(
      (item) =>
        item.nickname.includes(searchIpt) || item.content.includes(searchIpt)
    );
    setSearchList(filterList);
  };

  return (
    <>
      <h3>CURD</h3>

      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickName(e.target.value)}
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <br />
      <button onClick={add}>增</button>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.content}--{item.nickname}
            <button onClick={() => remove(index)}>删</button>
            <button onClick={() => select(index)}>改</button>
          </li>
        ))}
      </ul>
      <hr />

      <input
        type="text"
        value={searchIpt}
        onChange={(e) => setSearchIpt(e.target.value)}
      />
      <button onClick={search}>查</button>
      <ul>
        <ul>
          {searchList.map((item, index) => (
            <li key={item.id}>
              {item.content}--{item.nickname}
            </li>
          ))}
        </ul>
      </ul>
      <hr />
      {isModal && (
        <div>
          <h3>您正在修改{list[now].nickname}的留言</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={checkContent}
            onChange={(e) => setCheckContent(e.target.value)}
          ></textarea>
          <br />
          <button onClick={check}>确定</button>
          <button onClick={() => setIsModal(false)}>取消</button>
        </div>
      )}
    </>
  );
};
export default App;
