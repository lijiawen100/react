const App = (props) => {
  const getFetch = () => {
    fetch("/zhuishu/book/57206c3539a913ad65d35c7b")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getFetch2 = () => {
    // fetch(url+get数据,{配置}).then((res)=>{}).catch((err)=>{})
    fetch("http://localhost:3000/todos/5")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const postFetch = () => {
    const params = new URLSearchParams();
    params.append("title", "测试");
    params.append("completed", "1");

    fetch("http://localhost:3000/todos", {
      method: "post",
      // body: "title=测试&completed=1",
      body: params,
      // headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getFetch3 = async () => {
    const res = await fetch("http://localhost:3000/todos/5");

    const data = await res.json();

    console.log(data);
  };

  return (
    <>
      <h3>fetch-数据请求</h3>
      <button onClick={getFetch}>客户端代理</button>
      <button onClick={getFetch2}>fetch-get</button>
      <button onClick={postFetch}>fetch-post</button>
      <button onClick={getFetch3}>fetch-get2</button>
    </>
  );
};
export default App;
