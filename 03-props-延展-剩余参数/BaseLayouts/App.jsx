import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page1 from "../pages/Page1";

function App(props) {
  // 业务
  console.log("app", props);//{key3:value3,key4:value4}

  return (
    <div>
      <h3>app:{props.str}</h3>
      <Header arr={props.arr} num={props.num} />
      <div>
        {/* <Aside key="value" key2={valu2} key:value /> */}

        {/* 把收到的所有数据传出去 延展操作符*/}
        <Aside {...props} />
        <Page1 {...props} aogu="依赖星云" num={props.num + 10} />
      </div>
      <Footer str="字符串3" {...props} />
    </div>
  );
}
export default App;
