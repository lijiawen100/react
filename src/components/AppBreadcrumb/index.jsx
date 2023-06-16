import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { Breadcrumb } from "antd";
import { routesData } from "../../plugins/routes/routesData";

const AppBreadcrumb = (props) => {
  const params = useParams();

  /* const breadcrumbNameMap = {
    "/admin": "首页",
    "/admin/dashboard": "仪表盘",
    "/admin/notices": "通知中心",
    "/admin/product-list": "商品列表",
    "/admin/product-edit": "商品",
    ["/admin/product-edit/" + params.id]: "商品编辑",
    "/admin/a": "a",
    "/admin/a/a-1": "a-1",
    "/admin/a/a-2": "a-2",
    "/admin/a/a-3": "a-3",
    "/admin/b": "b",
    "/admin/b/b-1": "b-1",
    "/admin/b/b-2": "b-2",
    "/admin/b/b-2/b-2-1": "b-2-1",
    "/admin/b/b-2/b-2-2": "b-2-2",
    "/admin/b/b-3": "b-3",
    "/admin/c": "c",
    "/admin/c/c-1": "c-1",
    "/admin/c/c-2": "c-2",
    "/admin/c/c-3": "c-3",
  }; */

  const breadcrumbNameMap = {};
  function routesToBread(data, parentPath = "") {
    data.forEach((item) => {
      //排除 路由数据 path 里面的 * ,没有path返回的是undefined
      if (item.path !== "*" && item.path !== undefined) {
        if (item.path.startsWith(":")) {
          item.path = params[item.path.substr(1)];
        }

        breadcrumbNameMap[`${parentPath}/${item.path}`.substring(1)] =
          item.title || "首页";

        if (item.children) {
          routesToBread(
            item.children,
            item.path ? `${parentPath}/${item.path}` : parentPath
            //parentPath是空的，item.children里面parentPath（初始值）=/admin，因为item.path=admin,parentPath=""
            // /admin/dashboard
            // /admin/notices
            // /admin/product-list
            // /admin/product-edit
            // product-edit的children里面parentPath=/admin/product-edit
            // /admin/product-edit/id
          );
        }
      }
    });
  }
  routesToBread(routesData);
  console.log(breadcrumbNameMap);

  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  // console.log(breadcrumbItems);
  return <Breadcrumb items={breadcrumbItems} />;
};
export default AppBreadcrumb;
