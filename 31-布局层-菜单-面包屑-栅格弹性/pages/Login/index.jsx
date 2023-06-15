import "./index.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Card, message } from "antd";
import { loginApi } from "../../services/login";
import { setToken } from "../../utils/localStorage";
import { useLocation, useNavigate } from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  const navigete = useNavigate();
  const [messageApi, contextHolder] = message.useMessage(); //contextHolder一定要插入到jsx中去

  const onFinish = async ({ userName, password }) => {
    const res = await loginApi({ userName, password });
    console.log("login", res);
    if (res.code === "success") {
      //种token，跳转到之前，没有之前就跳首页
      setToken(res.token);
      if (location.state?.from) {
        navigete(location.state.from.pathname + location.state.from.search);
      } else {
        navigete("/");
      }
    } else {
      messageApi.open({
        type: "warning",
        content: res.message,
      });
    }
  };
  return (
    <>
      <div className="bg"></div>
      <Card title="XXXX后台管理系统" bordered={false} className="uc-card-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="mailto:admin@aliyun.com">
              忘记密码{contextHolder}
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default Login;
