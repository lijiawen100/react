import { Suspense, lazy } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import IsAuth from "../../access/isAuth";
import { Spin } from "antd";
import { routesData } from "./routesData";

const Login = lazy(() => import("../../pages/Login"));
const PageNotFound = lazy(() => import("../../pages/pageNotFound"));

const RouterConfig = (props) => {
  //模拟admin路由数据
  let routes = [
    ...routesData,
    {
      path: "/login",
      element: <Login />,
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
