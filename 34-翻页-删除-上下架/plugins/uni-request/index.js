import { extend } from "umi-request";
import { clearToken, getToken } from "../../utils/localStorage";
import { message } from "antd";
const serverBaseUrl = "http://101.132.109.42:3009";

const errorHandler = (error) => {
  const codeMaps = {
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌过期、或者被篡改、请刷新再试）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。",
  };
  message.error(codeMaps[error.response.status]);
  if (error.response.status === 401) {
    clearToken();
    setTimeout(() => window.location.reload(), 2000);//刷新页面
  }
};

//配置实例
const request = extend({
  prefix: serverBaseUrl,
  timeout: 5000,
  // headers: {
  //   authorization: "Bearer " + getToken(),
  // },  //不会每次读取数据时，动态获取token
  errorHandler,
});

//拦截器
request.interceptors.request.use(
  (url, options) => {
    options.headers = { authorization: "Bearer " + getToken() };
    return {
      url,
      options,
    };
  },
  { global: false }
);
export { request, serverBaseUrl };
