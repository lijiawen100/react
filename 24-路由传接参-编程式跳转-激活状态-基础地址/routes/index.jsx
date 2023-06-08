import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import User from "../pages/User";
import Goods from "../pages/Goods";
import Detail from "../pages/Detail";
import A from "../pages/goods/A";
import B from "../pages/goods/B";
import BaseLayouts from "../layouts/BaseLayouts";

const RouterConfig = (props) => {
  return (
    // <BrowserRouter basename="/react">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayouts />}>
          <Route path="home" element={<Home />} />
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
    </BrowserRouter>
  );
};
export default RouterConfig;
