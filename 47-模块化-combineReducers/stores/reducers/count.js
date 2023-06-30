// count模块

// state数据
let initState = 0;

// reducer
const count = (state = initState, { type, payload }) => {
  switch (type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;
    default:
      return state;
  }
};
export default count;
