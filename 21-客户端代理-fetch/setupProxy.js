const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    "/zhuishu",
    createProxyMiddleware({
      target: "https://api.zhuishushenqi.com", // + /zhuishu/book/57206c3539a913ad65d35c7b
      changeOrigin: true,
      pathRewrite: {
        //路径替换
        "^/zhuishu": "", 
      },
    })
  );
};
