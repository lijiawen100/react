import React, { Fragment } from "react";
const App = () => {
  // 解决必须有根元素
  let ele = (
    <>
      <div>box1</div>
      <div>box2</div>
    </>
  );
  return (
    <>
      <h3>消除根节点</h3>
      <p>xxx</p>
      <hr />

      {ele}
      <hr />

      <h3>分组</h3>
      {true ? (
        <>
          <div>box1</div>
          <div>box1</div>
        </>
      ) : (
        <>
          <div>box2</div>
          <div>box2</div>
        </>
      )}
      <hr />

      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <React.Fragment key={item}>
            <li>{item}</li>
            <li>{item}</li>
          </React.Fragment>
        ))}
      </ul>
      <hr />

      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Fragment key={item}>
            <li>{item}</li>
            <li>{item}</li>
          </Fragment>
        ))}
      </ul>
    </>
  );
};
export default App;
