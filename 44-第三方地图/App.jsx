import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  let bd = useRef();
  const [searchIpt, setSearchIpt] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // 创建我的位置点
  const createMyPos = useCallback(() => {
    // 创建点标记
    var marker = new window.BMapGL.Marker(bd.point);
    // 在地图上添加点标记
    bd.map.addOverlay(marker);
  }, []);

  // 创建地图
  const drawMap = useCallback(() => {
    //react默认访问的是模块变量，模块变量不存在，不会访问window（全局)

    //获取所在城市
    var localcity = new window.BMapGL.LocalCity();
    localcity.get((e) => {
      console.log(e);

      bd.map = new window.BMapGL.Map("container"); // 创建Map实例

      bd.point = new window.BMapGL.Point(e.center.lng, e.center.lat);

      bd.map.centerAndZoom(bd.point, 12); // 初始化地图,设置中心点坐标和地图级别
      bd.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      createMyPos();
    });
  }, [createMyPos]);

  // 搜索周边
  const searchNear = useCallback(() => {
    bd.map.clearOverlays();
    var local = new window.BMapGL.LocalSearch(bd.map, {
      renderOptions: { map: bd.map, autoViewport: false },
    });
    local.searchNearby(searchIpt, bd.point, 1000);
    createMyPos();
  }, [searchIpt, createMyPos]);

  // 路线规划
  const walk = useCallback(() => {
    // 清楚覆盖物
    bd.map.clearOverlays();
    var walking = new window.BMapGL.WalkingRoute(bd.map, {
      renderOptions: { map: bd.map, autoViewport: true },
    });
    walking.search(start, end);

    // 定位我的位置
    createMyPos();
  }, [start, end, createMyPos]);

  useEffect(drawMap, [drawMap]);
  return (
    <>
      <div
        id="container"
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          margin: "0",
          fontFamily: "微软雅黑",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          left: 0,
          bottom: 0,
          background: "#fff",
          width: "100vw",
        }}
      >
        <input
          type="text"
          value={searchIpt}
          onChange={(ev) => setSearchIpt(ev.target.value)}
        />
        <button onClick={searchNear}>搜索周边</button>
        <input
          type="text"
          value={start}
          onChange={(ev) => setStart(ev.target.value)}
        />
        <input
          type="text"
          value={end}
          onChange={(ev) => setEnd(ev.target.value)}
        />
        <button onClick={walk}>路线</button>
      </div>
    </>
  );
};
export default App;
