import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
const AntdConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          colorLink: "#00c96e",
          colorLinkActive: "#00b26e",
          colorLinkHover: "#00b26f",
        },
      }}
      locale={zhCN}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntdConfig;
