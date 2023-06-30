//reducer: 类似 vuex里面的action+mutations
//reducer: 类似 pinia里面的 useXxxStore函数内部 处理函数（异步同步业务=》修改公共仓库）
//reducer: 做业务，修改state,返回state（store.getState)

//reducer: 是个纯函数
//纯函数: 就是你在普通函数基础上加了一层限制(函数内部：不修改传入的参数，没有副作用，必须要有返回值)
//副作用: 框架时代，做了dom操作，异步操作（定时器，数据请求），随机

// 非纯函数
/* function show(a,b,c){
  a=12;
  b.key='xxx'
  axios.get()
  setTimeout(..)
  document.getElementById('..').innerHTML
} */

// const reducer = (state, action) => {
const reducer = (state, { type, payload }) => {
  console.log("reducer", state, type, payload);
  switch (type) {
    case "increment":
      let tmpState = { ...state, count: state.count + payload };
      return tmpState;
    case "decrement":
      return { ...state, count: state.count - payload };
    case "add":
      return { ...state, list: [...state.list, payload] };
    case "del":
      let tmpArr = [...state.list];
      tmpArr.splice(payload, 1);
      return { ...state, list: tmpArr };
    default:
      return state;
  }
};
export default reducer;
