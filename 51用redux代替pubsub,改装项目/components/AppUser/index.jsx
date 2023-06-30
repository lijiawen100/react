import "./index.css";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar, theme, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/localStorage";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const items = [
  {
    key: "/admin/notices",
    label: "通知中心",
  },
  {
    type: "divider",
  },
  {
    key: "/login",
    danger: true,
    icon: <SmileOutlined />,
    label: "注销",
  },
];
const AppUser = (props) => {
  const [notReadMessage, setNotReadMessage] = useState(2);
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    if (key.includes("/login")) clearToken();
    navigate(key);
  };
  const { token } = theme.useToken();

  const notices = useSelector((state) => state.notices);
  // setNotReadMessage(notices);
  /* Too many re-renders. React limits the number of renders to prevent an infinite loop. */

  useEffect(() => {
    setNotReadMessage(notices);
  }, [notices]);

  // 订阅
  /* useEffect(() => {
    PubSub.subscribe("noticesMessage", (_, data) => {
      // console.log("收到",data);
      setNotReadMessage(data);
    });
  }, []); */
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a href="#abc" onClick={(e) => e.preventDefault()}>
        <Space>
          <Badge count={notReadMessage}>
            <Avatar
              style={{ backgroundColor: token.colorPrimary }}
              icon={<UserOutlined />}
            />
          </Badge>
          ADMIN
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default AppUser;
