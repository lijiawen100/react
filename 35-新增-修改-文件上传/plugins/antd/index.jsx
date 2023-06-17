import "./index.css"; //公共样式
import "antd/dist/reset.css"; //复位样式
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from "antd";
dayjs.locale("zh-cn");
const AntdConfig = ({ children }) => {
  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#399",
            borderRadius: 0,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};
export default AntdConfig;
