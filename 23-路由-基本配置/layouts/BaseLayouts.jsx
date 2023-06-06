import { NavLink, Outlet } from "react-router-dom";

const BaseLayouts = (props) => {
  return (
    <>
      <div className="header">header</div>
      <div className="wrap" style={{ display: "flex" }}>
        <div className="slide">
          <ul>
            <li>
              <NavLink to="/home">首页</NavLink>
            </li>
            <li>
              <NavLink to="/user">用户</NavLink>
            </li>
            <li>
              <NavLink to="/goods">商品</NavLink>
              <ul>
                <li>
                  <NavLink to="/goods/a">A</NavLink>
                  <ul>
                    <li>
                      <NavLink to="/goods/a/detail">详情</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/goods/b">B</NavLink>
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
