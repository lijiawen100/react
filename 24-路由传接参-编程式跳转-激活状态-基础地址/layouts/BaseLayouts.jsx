import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
const BaseLayouts = (props) => {
  return (
    <>
      <div className="header">header</div>
      <div className="wrap" style={{ display: "flex" }}>
        <div className="slide">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "on" : "")}
                to="/home"
              >
                首页
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { background: "red", color: "#fff" } : {}
                }
                to="/user"
              >
                用户
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "on" : "")}
                to="/goods"
              >
                商品
              </NavLink>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "on" : "")}
                    to="/goods/a"
                  >
                    A
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "on" : "")}
                    to="/goods/b"
                  >
                    B
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="footer">footer</div>
    </>
  );
};
export default BaseLayouts;
