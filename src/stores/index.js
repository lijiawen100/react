import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";//compose 增强器
import thunk from "redux-thunk";
import count from "./reducers/count";
import list from "./reducers/list";

// 根reducer=count+list
const rootReducer = combineReducers({ count, list });

//使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
//2. 暴露store
export default store;
