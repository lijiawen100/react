import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import count from "./reducers/count";
import list from "./reducers/list";

// 根reducer=count+list
const rootReducer = combineReducers({ count, list });
//1. 创建store实例
// const store = createStore(根reducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));
//2. 暴露store
export default store;
