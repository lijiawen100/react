import "./index.css";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/localStorage";
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
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    if (key.includes("/login")) clearToken();
    navigate(key);
  };
  const { token } = theme.useToken();
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a href="#abc" onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            style={{ backgroundColor: token.colorPrimary }}
            icon={<UserOutlined />}
          />
          ADMIN
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default AppUser;
