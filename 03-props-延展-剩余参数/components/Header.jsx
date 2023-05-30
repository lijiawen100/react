import { AppHeaderUser } from "./app-header-user";

const Header = (props) => {
  //业务
  // console.log("header",props);
  const { num, arr } = props;
  return (
    <div>
      <span>LOGO{num}</span>
      <span>search</span>
      <AppHeaderUser num={num} arr={arr} arr2={["a", "b"]} />
    </div>
  );
};
export default Header;
