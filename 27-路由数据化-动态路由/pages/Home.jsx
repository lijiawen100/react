import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  // 编程式跳转
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate("/login");
      // navigate({ pathname: "/goods/a/10", search: "a=101&b=203" });
      navigate("/goods/a/11", { state: { a: 111, b: 333 } });
    }, 2000);
  }, [navigate]);
  return (
    <>
      <h3>Home</h3>
    </>
  );
};
export default Home;
