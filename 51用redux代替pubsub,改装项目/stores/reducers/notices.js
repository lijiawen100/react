// notices模块

// state数据
let initState = 2;

// reducer
const notices = (state = initState, { type, payload }) => {
  console.log("notices", type, payload);
  switch (type) {
    case "save":
      return payload;
    default:
      return state;
  }
};

export default notices;
