import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import state from "./state";

//1. 创建store实例
// const store = createStore(reducer, state); //reducer 处理修改请求，state 公共仓库

// const store = createStore(reducer, state, applyMiddleware(中间件1, 2, n));

//thunk改装了store.dispatch方法 ,dispatch（函数||对象) ,dispatch调用这个函数是会把dispatch本身传给这个函数，比如store.dispatch(函数A)，那么函数A(dispatch)
const store = createStore(reducer, state, applyMiddleware(thunk));
//2. 暴露store
export default store;
