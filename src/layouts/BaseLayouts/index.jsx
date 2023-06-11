import { Outlet } from "react-router-dom";
import "./index.css";
const BaseLayouts = (props) => {
  return (
    <>
      <div>BaseLayouts</div>
      <Outlet />
    </>
  );
};
export default BaseLayouts;
