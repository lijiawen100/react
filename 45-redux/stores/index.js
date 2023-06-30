import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import state from "./state";

//1. 创建store实例
const store = createStore(reducer, state); //reducer 处理修改请求，state 公共仓库
//2. 暴露store
export default store;
