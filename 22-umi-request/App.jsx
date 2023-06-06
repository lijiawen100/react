import { useEffect } from "react";
import request, { extend } from "umi-request";

//配置request实例
const instance = extend({
  prefix: "http://121.89.205.189:3000/api", //axios.default.baseUrl
  timeout: 2000,
  headers: { token: localStorage.getItem("token") },
  errorHandler: (err) => console.log("统一处理错误", err), //异常处理, 或者覆盖统一的异常处理
  useCache: true, //缓存开
  // ttl: 10000, //时长
  validateCache: (url, options) =>
    url.includes("/pro/list") || url.includes("/user/login"),
  charset: "utf-8", //后端返回的编码，前端这边要一致
});

//异步控制器 js
const controller = new AbortController();
const { signal } = controller;

const App = (props) => {
  useEffect(() => {
    // get
    /* request
      .get("http://121.89.205.189:3000/api/pro/list", {
        params: { count: 1, limitNum: 5 },
        getResponse: true, //是否获取源 response, 返回结果将包裹一层
      })
      .then((res) => console.log(res)); */

    instance
      .post("/user/login", {
        data: {
          loginname: "13211111111",
          password: "111111",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      });

    //post
    /* request
      .post("http://121.89.205.189:3000/api/user/dofinishregister", {
        data: {
          tel: "15102502580",
          password: "123456",
        },
        getResponse: true,
      })
      .then((res) => console.log(res)); */
  }, []);

  const getData = () => {
    instance
      .get("/pro/list", { params: { count: 1, limitNum: 5 }, signal })
      .then((res) => console.log(res));
  };

  const getData2 = () => {
    instance
      .get("/pro/categorylist", { signal })
      .then((res) => console.log(res));
  };
  return (
    <>
      <h3>App</h3>
      <button onClick={getData}>手动读取数据</button>
      <button onClick={getData2}>手动读取数据2</button>
      <button onClick={() => controller.abort()}>中断</button>
    </>
  );
};
export default App;
