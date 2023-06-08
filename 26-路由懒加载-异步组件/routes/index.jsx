import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

// import Goods from "../pages/Goods";

// import UserAuth from "../access/UserAuth";

const RouterConfig = (props) => {
  return (
    // <BrowserRouter basename="/react">
    <BrowserRouter>
      {/* 全局守卫 */}
      <GlobalAuth>
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path="/" element={<BaseLayouts />}>
              <Route path="home" element={<Home />} />

              {/* 路由独享守卫 */}
              {/* <Route
            path="user"
            element={
              <UserAuth>
                <User />
              </UserAuth>
            }
          /> */}
              <Route path="user" element={<User />} />

              {/* 父没有布局层，展示时会向上查找布局层来展示 */}
              <Route path="goods">
                {/* 子路由 */}
                <Route path="a" element={<A />} />
                <Route path="a/:id" element={<Detail />} />
                <Route path="b" element={<B />} />
                <Route path="b/:id" element={<Detail />} />
                <Route index element={<Navigate to="/goods/a" />} />
              </Route>

              {/* 重定向 */}
              <Route index element={<Navigate to="/home" />} />

              {/* 404 */}
              <Route path="*" element={<NoPage />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Reg />} />
            {/* 404 */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </GlobalAuth>
    </BrowserRouter>
  );
};
export default RouterConfig;
