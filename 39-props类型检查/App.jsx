import A from "./A";
import B from "./B";
import C from "./C";
const App = () => {
  const show = console.log("app show");
  return (
    <>
      <h3>父子传递属性：子要对props类型检查</h3>

      <A num={1}></A>
      <B show={show}></B>
      <C
        title="奥姑大长腿"
        list={["1", "2", "3"]}
        // list={"123"}
        isActive
        detail={{ id: 1004, des: "lll", price: 12 }}
        /* icon={
          <img
            alt="xx"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          ></img>
        } */
        icon={<B />}
        // icon={12}
      ></C>
    </>
  );
};
export default App;
