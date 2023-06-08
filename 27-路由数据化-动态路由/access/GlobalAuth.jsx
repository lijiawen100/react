import { Navigate, useLocation } from "react-router-dom";

const GlobalAuth = ({ children }) => {
  const location = useLocation();
  console.log(location);
  if (
    location.pathname.includes("login") ||
    location.pathname.includes("reg")
  ) {
    return children;
  } else {
    // 守卫
    if (localStorage.getItem("token")) {
      return children;
    } else {
      return (
        <Navigate
          to="/login"
          state={{ url: location.pathname + location.search }}
        />
      );
    }
  }
};
export default GlobalAuth;
