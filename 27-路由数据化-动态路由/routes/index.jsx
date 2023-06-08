import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import GlobalAuth from "../access/GlobalAuth";
const Login = lazy(() => import("../pages/Login"));
const Reg = lazy(() => import("../pages/Reg"));
const NoPage = lazy(() => import("../pages/NoPage"));
const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User"));
const Detail = lazy(() => import("../pages/Detail"));
const A = lazy(() => import("../pages/goods/A"));
const B = lazy(() => import("../pages/goods/B"));
const BaseLayouts = lazy(() => import("../layouts/BaseLayouts"));

//路由数据化,动态化
//模拟路由数据
let res = {
  user_type: "admin",
  user_id: 1,
  routes: [
    {
      path: "/",
      element: <BaseLayouts />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "goods",
          children: [
            {
              path: "a",
              element: <A />,
            },
            {
              path: "a/:id",
              element: <Detail />,
            },
            {
              path: "b",
              element: <B />,
            },
            {
              index: true,
              element: <Navigate to="/goods/a" />,
            },
          ],
        },
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        { path: "*", element: <NoPage /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/reg",
      element: <Reg />,
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ],
};
// const Routes = () => '返回一堆由数据转换后的Route'
const Routes = () => useRoutes(res.routes);
//useRoutes(路由数据) ===>转换成一堆的Route

const RouterConfig = (props) => {
  return (
    <BrowserRouter>
      <GlobalAuth>
        <Suspense fallback={<>loading...</>}>
          {/* 自定义的Routes */}
          <Routes />
        </Suspense>
      </GlobalAuth>
    </BrowserRouter>
  );
};
export default RouterConfig;
