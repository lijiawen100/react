//jsx
//描述vdom结构的，是js的一种数据类型，是和js写在一起的

let ele = <div title="标题">box</div>;

//jsx语法规则：同html，有些差异

//1. 标签要闭合
let img = <img alt="acb" />;

//2. 元素一定要有顶层元素包裹（默认）
let div = (
  <div>
    <div>box1</div>
    <div>box2</div>
  </div>
);

//3. 属性： 小驼峰命名
let iptArea = (
  <div>
    <input type="text" onClick="fn" />
    <input type="text" tabIndex="2" />
    <input type="text" />
  </div>
);

//jsx里面写js：需要一个分隔符{}
let box = <div>{3 + 8}</div>;

//jsx注释:  /* 多行 */
let box2 = (
  <div>
    <h3>react课程</h3>
    <ul>
      <li>jsx</li>
      <li>绑定事件</li>
    </ul>
  </div>
);

console.log(ele, img, div, iptArea, box, box2);
