import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import IsAuth from "../../access/isAuth";
import { Spin } from "antd";

const Login = lazy(() => import("../../pages/Login"));
const PageNotFound = lazy(() => import("../../pages/pageNotFound"));
const BaseLayouts = lazy(() => import("../../layouts/BaseLayouts"));
const DashBoard = lazy(() => import("../../pages/admin/DashBoard"));
const Notices = lazy(() => import("../../pages/admin/Notice"));
const ProductList = lazy(() =>
  import("../../pages/admin/products/ProductList")
);
const ProductEdit = lazy(() =>
  import("../../pages/admin/products/ProductEdit")
);

const RouterConfig = (props) => {
  //模拟admin路由数据
  let routes = [
    {
      path: "/admin",
      element: <BaseLayouts />,
      children: [
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "notices",
          element: <Notices />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-edit",
          element: <ProductEdit />,
        },
        {
          path: "product-edit/:id",
          element: <ProductEdit />,
        },
        {
          index: true,
          element: <Navigate to="/admin/dashboard" />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      index: true,
      element: <Navigate to="/admin" />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];
  const Routes = () => useRoutes(routes);

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <Spin
              style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          }
        >
          <IsAuth>
            <Routes />
          </IsAuth>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
export default RouterConfig;
