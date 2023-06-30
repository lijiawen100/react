import { Outlet, useLocation } from "react-router-dom";
import "./index.css";
import { Layout, Row, Col, theme } from "antd";
import SliderMenu from "../../components/SliderMenu";
import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppUser from "../../components/AppUser";
import { useEffect, useState } from "react";
const { Header, Footer, Sider, Content } = Layout;
//slider 高度
//header/slider固定
const BaseLayouts = (props) => {
  const { token } = theme.useToken();

  const location = useLocation();
  

  const [customContentBgColor, setCustomContentBgColor] = useState(
    token.colorBgContainer
  );

  useEffect(() => {
    if (location.pathname.includes("dashboard")) {
      setCustomContentBgColor("none");
    } else {
      setCustomContentBgColor(token.colorBgContainer);
    }
  }, [location.pathname, token.colorBgContainer]);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Row>
          <Col flex={0.2}>
            <img
              style={{
                width: 120,
                height: 30,
                background: "rgba(255,255,255,.2)",
              }}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt=""
            />
          </Col>
          <Col flex="auto"></Col>
          <Col flex="none">
            <AppUser />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsible
          theme="light"
          style={{
            overflow: "auto",
            height: "calc(100vh - 64px)",
            position: "sticky",
            left: 0,
            top: 64,
            bottom: 0,
          }}
        >
          <SliderMenu />
        </Sider>
        <Layout style={{ padding: "0 24px" }}>
          <AppBreadcrumb />
          <Content style={{ background: customContentBgColor }}>
            <Outlet />
          </Content>
          <Footer>
            京公网安备11000002000001号京ICP证030173号互联网新闻信息服务许可证11220180008
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default BaseLayouts;
