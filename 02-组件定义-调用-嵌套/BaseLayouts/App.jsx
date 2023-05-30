import Aside from "../components/Aside";
import Header from "../components/Header";
import Page1 from "../pages/Page1";

function App() {
  // 业务
  return (
    <div>
      <Header />
      <div>
        <Aside />
        <Page1 />
      </div>
      <div>footer</div>
    </div>
  );
}
export default App;
