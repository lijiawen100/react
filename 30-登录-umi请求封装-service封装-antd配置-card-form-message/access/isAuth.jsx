import { Navigate, useLocation } from "react-router-dom";
import { isLogin } from "../utils/localStorage";

const IsAuth = ({ children }) => {
  const location = useLocation();

  if (location.pathname.includes("/login")) {
    return children;
  } else {
    //抓取localStorage里面的标志(token)
    if (isLogin()) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  }
};
export default IsAuth;
