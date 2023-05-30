import AppAsideMenu from "./AppAsideMenu";

export default function Aside({ arr, str, ...rest }) {
  //业务
  console.log("Aside", arr, str, rest);
  return (
    <div>
      <AppAsideMenu {...rest}/>
      <AppAsideMenu />
      <AppAsideMenu />
      <AppAsideMenu />
      <AppAsideMenu />
    </div>
  );
}
