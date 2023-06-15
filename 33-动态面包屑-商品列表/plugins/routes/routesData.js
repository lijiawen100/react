import { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

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

//login ==> token + code + routes数据
// admin 数据
let routesData = [
  {
    path: "/admin",
    element: <BaseLayouts />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,

        //给menu组件的数据
        disabled: false,
        label: "仪表盘",
        title: "仪表盘",
        icon: <MailOutlined />,
      },
      {
        path: "notices",
        element: <Notices />,
        //给menu组件的数据
        disabled: true,
        label: "通知中心",
        title: "通知中心",
        icon: <SettingOutlined />,
      },
      {
        path: "product-list",
        element: <ProductList />,
        disabled: false,
        label: "商品列表",
        title: "商品列表",
        icon: <AppstoreOutlined />,
      },
      {
        path: "product-edit",
        element: <ProductEdit />,
        disabled: true,
        label: "商品",
        title: "商品",
        icon: <AppstoreOutlined />,
        children: [
          {
            path: ":id",
            element: <ProductEdit />,
            disabled: true,
            label: "商品编辑",
            title: "商品编辑",
          },
        ],
      },
      {
        path: "a",
        element: <ProductEdit />,
        disabled: false,
        label: "a",
        title: "a",
        icon: <AppstoreOutlined />,
        children: [
          {
            path: "a-1",
            element: <ProductEdit />,
            disabled: false,
            label: "a-1",
            title: "a-1",
          },
          {
            path: "a-2",
            element: <ProductEdit />,
            disabled: false,
            label: "a-2",
            title: "a-2",
          },
          {
            path: "a-3",
            element: <ProductEdit />,
            disabled: false,
            label: "a-3",
            title: "a-3",
          },
        ],
      },
      {
        path: "b",
        element: <ProductEdit />,
        disabled: false,
        label: "b",
        title: "b",
        icon: <AppstoreOutlined />,
        children: [
          {
            path: "b-1",
            element: <ProductEdit />,
            disabled: false,
            label: "b-1",
            title: "b-1",
          },
          {
            path: "b-2",
            element: <ProductEdit />,
            disabled: false,
            label: "b-2",
            title: "b-2",
            children: [
              {
                path: "b-2-1",
                element: <ProductEdit />,
                disabled: false,
                label: "b-2-1",
                title: "b-2-1",
              },
              {
                path: "b-2-2",
                element: <ProductEdit />,
                disabled: false,
                label: "b-2-2",
                title: "b-2-2",
              },
            ],
          },
          {
            path: "b-3",
            element: <ProductEdit />,
            disabled: false,
            label: "b-3",
            title: "b-3",
          },
        ],
      },
      {
        path: "c",
        element: <ProductEdit />,
        disabled: false,
        label: "c",
        title: "c",
        icon: <AppstoreOutlined />,
        children: [
          {
            path: "c-1",
            element: <ProductEdit />,
            disabled: false,
            label: "c-1",
            title: "c-1",
          },
          {
            path: "c-2",
            element: <ProductEdit />,
            disabled: false,
            label: "c-2",
            title: "c-2",
          },
          {
            path: "c-3",
            element: <ProductEdit />,
            disabled: false,
            label: "c-3",
            title: "c-3",
          },
        ],
      },
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
        disabled: true,
      },
      {
        path: "*",
        element: <PageNotFound />,
        disabled: true,
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/admin" />,
    disabled: true,
  },
];
// guest 数据

export { routesData };
