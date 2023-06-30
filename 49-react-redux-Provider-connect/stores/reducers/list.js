// list模块

// state数据
let initState = ["aa", "bb", "cc"];

// reducer
const list = (state = initState, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "del":
      let tmpArr = [...state];
      tmpArr.splice(payload, 1);
      return tmpArr;
    default:
      return state;
  }
};
export default list;
