import "./index.css";

import { Menu } from "antd";
import { useState } from "react";
import { routesData } from "../../plugins/routes/routesData";
import { useNavigate } from "react-router-dom";
//返回一个菜单项数据
function getItem({ label, path, icon, children, title }) {
  return {
    key: path,
    icon,
    children,
    label,
    title,
  };
}

//获取所有菜单数据
const getItemsFromData = (arr) =>
  arr
    .map(
      ({ label, path, icon, title, children, disabled }) =>
        !disabled &&
        getItem({
          label,
          path,
          icon,
          title,
          children: children && getItemsFromData(children),
        })
    )
    .filter(Boolean);

const items = getItemsFromData(routesData[0].children);

// 第一层菜单
const rootSubmenuKeys = items.map((item) => item.key);

const SliderMenu = (props) => {
  const navigate = useNavigate();

  const [openKeys, setOpenKeys] = useState([rootSubmenuKeys[0]]);
  //展开/关闭的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // 跳转
  const onSelect = ({ keyPath }) => {
    // console.log(keyPath);//['b-2-1,'b-2','b']
    navigate(`./${keyPath.reverse().join("/")}`);
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
      onSelect={onSelect}
    />
  );
};
export default SliderMenu;
