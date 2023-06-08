import { useLocation, useNavigate } from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const login = () => {
    console.log("登录业务");
    localStorage.setItem("token", "服务器返回的标志");
    console.log("location", location);

    if (location.state?.url) {
      navigate(location.state.url);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <h3>Login</h3>
      <button onClick={login}>登录</button>
    </>
  );
};
export default Login;
