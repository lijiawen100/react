import { useState } from "react";
import B from "./B";

const App = () => {
  const [bl, setBl] = useState(false);
  return (
    <>
      <h3>App</h3>
      <button onClick={() => setBl(!bl)}>控制B</button>
      {bl && <B />}
    </>
  );
};
export default App;
