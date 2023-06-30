import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux"; //compose 增强器
import thunk from "redux-thunk";
import notices from "./reducers/notices";

// 根reducer=notices
const rootReducer = combineReducers({ notices });

//使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
//2. 暴露store
export default store;
