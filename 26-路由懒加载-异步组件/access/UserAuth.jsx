import { Navigate } from "react-router-dom";
//独享守卫，守一条路由
const UserAuth = ({ children }) => {
  if (false) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default UserAuth;
