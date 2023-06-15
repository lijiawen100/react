import "./index.css";
import { Breadcrumb } from "antd";

const AppBreadcrumb = (props) => {
  const items = [
    {
      title: "Home",
    },
    {
      title: <a href="#abc">Application Center</a>,
    },
    {
      title: <a href="#acs">Application List</a>,
    },
    {
      title: "An Application",
    },
  ];
  return (
    <Breadcrumb
      items={items}
      style={{
        position: "sticky",
        top: 64,
        left: 0,
        zIndex: 1,
        padding: "16px 0",
        background: "#f5f5f5",
      }}
    />
  );
};
export default AppBreadcrumb;
