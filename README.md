# REACT

## 介绍

一款javascript前端框架，把用户界面抽象成一个个的组件，按需组合成页面，[官网](https://zh-hans.reactjs.org/)，与其他框架的共同点是，都采用虚拟dom，和数据驱动

|                  | angularJs | reactJs | vueJs  | angularTs |
| ---------------- | --------- | ------- | ------ | --------- |
| 控制器           | √         | -       | -      | 弱化      |
| 过滤器\|计算属性 | √         | -       | √      | √         |
| 指令             | √         | -       | √      | √         |
| 模板语法{{}}     | √         | -       | √      | √         |
| 组件             | -         | √       | √      | √         |
| jsx              | -         | √       | 可加入 | -         |



## 环境搭建

使用yarn工具，安装 [yarn](https://classic.yarnpkg.com/zh-Hans/docs/install)

```js
//查询当前镜像
yarn config get registry 
//设置为淘宝镜像
yarn config set registry https://registry.npm.taobao.org/
//设置为官方镜像
yarn config set registry https://registry.yarnpkg.com
```

**react脚手架** 【[create-react-app](https://create-react-app.dev/docs/getting-started)】

**创建**react项目

```
yarn create react-app 目录 | npm init react-app 目录
```

**开发** react

```
yarn start |  npm start             开发运行到内存
```

**打包** react

```
yarn build |  npm run build  打包到磁盘
yarn global add serve 只需要安装一次，用来运行测试打包到磁盘上的代码
serve -s build 
```

vite**脚手架**

```
npm create vite@latest
```

**配置** react

```
yarn eject  //解构出所有的配置文件

修改端口
// script/start.js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

去除eslint 警告
//config/webpack.config.js
//注释关于new ESLintPlugin (react1.x)
```

调试工具 dev-tools**安装**

官方调试包已经不维护，第三方的调试包，需要去[google商城](https://chrome.zzzmh.cn/index#/index)

**环境解析**

- react: 核心包，解析组件，jsx **演示**
- react-dom: 编译 -> 浏览器 **演示**

**错误处理**

- 运行yarn 提示“不是内部或外部命令，”装完重启
- yarn eject ，报git错误时: git init -> git add . -> git commit -m 'init' -> yarn eject

## **资源限制**

- 本地资源导入(import) 不可以导入src之外的包
- 相对 路径以文件所在位置为基准顶层到src，绝对路径 的根是 public目录
- 前景图片, 相对 和 绝对路径 都指向了 public目录（因为是数据)



## JSX

jsx是一个 JavaScript 的语法扩展，可以理解为js的一个新的数据类型，出现在js当中，文件为xx.js|xx.jsx|ts|tsx

```
var b= <strong>强壮</strong>
```

**语法要求**

- 标签要闭合
- 元素必须要有一个顶层元素
- 属性，小驼峰命名  `<xx tabIndex="2">`
- jsx元素内部书写js表达式需要{}来分隔

```jsx
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
```

## 渲染dom-v17

```jsx
import ReactDom from "react-dom";

let box = (
  <div title="课程">
    <h3>react{18 + "." + 2 + "." + 0}课程</h3>
    <ul>
      <li>jsx</li>
      <li>组件</li>
      <li>vdom</li>
    </ul>
  </div>
);

//17

// ReactDom.render(jsx元素|字符|数字,插入点,回调);
ReactDom.render(box, document.getElementById("root"), () => {
  console.log("render is over");
});
```

## 渲染dom-v18

```jsx
import ReactDom from "react-dom/client";

let box = (
  <div title="课程">
    <h3>react{18 + "." + 2 + "." + 0}课程</h3>
    <ul>
      <li>jsx</li>
      <li>组件</li>
      <li>vdom</li>
    </ul>
  </div>
);

//18

//const root =  ReactDom.createRoot(插入点);
const root = ReactDom.createRoot(document.getElementById("root"));
//root.render(jsx|数字|字符)
root.render(box);
```



## 组件

**定义组件**

```jsx
/*组件名必须是大驼峰*/
const 组件名=(props)=>(jsx)
const 组件名=props=>jsx
const 组件名=(props)=>{
  //业务
  return jsx | number | string | null   没有return代表不渲染
}
function 组件名(props){}
```

**调用组件**

```jsx
//声明式
<组件名 />
<组件名></组件名>
```

**渲染**（描画）页面

```jsx
// 17
import ReactDom from 'react-dom'; 
ReactDom.render(jsx,插入点,回调)

//18
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(插入点);
root.render(jsx)
```

**嵌套**

```jsx
function 组件名1(props){
  业务
  return (
    ..
    <组件名2/>
    ..
  )
}

function 组件名2(props){
  return (
    ..
    <组件名3/>
  )
}
```

## props

**传递属性**

```
<组件名 属性名=值 属性名2=值2 .. />
```

> propName="字符"  propName={js数据类型}

**使用属性**

```
function 组件(props){
  return (
  	<div>{props.属性名}</div>
  )
}
```

**往App.jsx传props**

```jsx
import ReactDom from "react-dom/client";
import App from "./BaseLayouts/App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <App
    str="字符串1"
    num={100}
    str2={"字符串2"}
    arr={[1, 2, 3]}
    obj={{ a: 1, b: 2 }}
  />
);
```

**App.jsx收到props，使用props，并给下面嵌套的组件继续传递props**

```jsx
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
```

**Header.jsx收到props，继续传props给AppHeaderUser**

```jsx
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
```

**AppHeaderUser.jsx收到props**

```jsx
const AppHeaderUser = ({ num }) => "用户头像" + num;
export { AppHeaderUser };
```

**Aside.jsx收到props，继续传props给AppAsideMenu.jsx**

```jsx
import AppAsideMenu from "./AppAsideMenu";

export default function Aside({ arr, str, ...rest }) {
  //业务
  //rest剩余参数
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
```

**AppAsideMenu.jsx**

```jsx
const AppAsideMenu = () => "菜单项";
export default AppAsideMenu;
```

## 事件

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串

事件绑定

```
<JSX元素 onClick={函数体}
```

函数定义

```
let 函数=()=>{}

function 组件(){
  
  let 函数2=()=>{}
  
  return (
  	<jsx onClick={函数}/>
    <jsx onClick={函数2}/>
    <jsx onClick={()=>{}}
  )
}
```

事件对象

```
函数(ev)	ev 代理事件对象 ev.target 返回虚拟Vdom √
```

冒泡

```
阻止： ev.stopPropagation()
```

默认行为

```
阻止： ev.preventDefault()
```

传参

```
onClick={ev=>函数(12,ev)}
```

```jsx
const show1 = () => console.log("show1"); //来自外部js模块

const App = (props) => {
  const show11 = () => console.log("show11"); //来自内部

  const show2 = (e) => console.log("show2", e);

  const show3 = (e) => {
    console.log("show3", e.currentTarget);
    e.stopPropagation();
  };
  const show4 = (e) => {
    console.log("show4");
    e.preventDefault();
  };
  const show5 = (num, e, str) => {
    console.log("show5", num, e, str);
  };
  return (
    <div>
      <h3>App</h3>

      {/* 原生js行间事件 */}
      {/* <button onclick="alert(1)">按钮</button> */}

      {/* react事件绑定 */}
      <button onClick={show1}>外部函数-公共</button>
      <button onClick={show11}>内部函数-私有</button>

      {/* 事件对象 */}
      <button onClick={show2}>事件对象</button>

      <h3>冒泡</h3>
      <div onClick={show3}>
        <button onClick={show3}>按钮</button>
      </div>

      <h3>默认行为</h3>
      <input type="text" onContextMenu={show4} />

      <h3>传参</h3>
      <button onClick={(e) => show5(12, e, "ben")}>按钮</button>
    </div>
  );
};
export default App;
```



## 组件状态state

```
import { useState } from 'react';
const [状态变量, 状态方法] = useState(状态属性的初始值);
const [count, setCount] = useState(0);

//使用状态
{状态变量}  //返回 状态值

//修改状态
setCount(新值)
setCount(当前值=>新值)
```

> 可以自由命名,状态变量可以不只一个state变量了
>
> null, undefined,boolean,空字符都不渲染，数组会取元素再拼接
>
> useState里数据务必为immutable （不可赋值的对象|不可变数据）
>
> 对象无法直接通过{对象}展示

```jsx
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [str] = useState("qq");
  const [arr] = useState([1, 2, 3, 4]);
  const [obj] = useState({ a: 1, b: 2 });

  const [un] = useState(undefined);
  const [nu] = useState(null);
  const [bl] = useState(false);

  const [list, setList] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "旺旺雪饼" },
  ]);

  const check = () => setCount(count + 1);
  const check2 = () => {
    //1. 复杂数据类型修改： 浅拷贝+修改+set覆盖(修改数据时，当前数据要断开引用)
    /* let tmpArr = [...list];
    tmpArr[1].name = "方便面";
    setList(tmpArr); */

    let tmpArr = [...list];
    tmpArr.splice(0, 1, { id: 1, name: "华为" });
    setList(tmpArr);
  };

  return (
    <div>
      <h3>组件状态</h3>
      {/* 使用 */}
      <div>{count}</div>
      {/* 修改 */}
      <button onClick={check}>修改</button>

      <h3>数据类型在jsx直接渲染的表现</h3>
      <div>number:{count}</div>
      <div>string:{str}</div>
      <div>arr:{arr}</div>
      <div>
        obj:{obj.a}/{obj.b}
      </div>
      <div>undefined:{un}</div>
      <div>null:{nu}</div>
      <div>boolean:{bl}</div>

      <h3>推荐的组件状态修改方案</h3>
      <div>{list[0].name}</div>
      <button onClick={check2}>修改</button>
    </div>
  );
};
export default App;
```



## 列表渲染

```
//对象 数组 string 数字
状态变量.map(function(val,index){
  return jsx
})
```

## 条件渲染

```
//表达式渲染
状态变量 ? jsx1 : jsx2
状态变量 && jsx
```

```jsx
import { useState } from "react";
const App = () => {
  const arr = ["a", "b", "c"];
  const [arr2] = useState([
    { id: 1, name: "alex" },
    { id: 2, name: "苏菲" },
  ]);
  const [arr3] = useState([
    { id: 1, name: "alex" },
    {
      id: 2,
      name: "苏菲",
      child: [
        { id: 1, name: "pp" },
        { id: 2, name: "pp123" },
      ],
    },
  ]);

  const [b1, setB1] = useState(false);

  const [city] = useState("shanghai");

  let box=null;
  if(city==="shanghai"){
    box=<div>上海</div>
  }else if(city==="beijing"){
    box=<div>北京</div>
  }else if(city==="tangshan"){
    box=<div>唐山</div>
  }
  return (
    <div>
      <h3>列表渲染</h3>

      <ul>
        {arr.map((item, index) => (
          <li key={item}>
            {item}/{index}
          </li>
        ))}
      </ul>

      <hr />
      <ul>
        {arr2.map((item, index) => (
          <li key={item.id}>
            {item.id}/{item.name}/{index}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {arr3.map((item, index) => (
          <li key={item.id}>
            {item.id}/{item.name}/{index}
            <ul>
              {/* {item.child?.map((item, index) => ( */}
              {item.child &&
                item.child.map((item, index) => (
                  <li key={item.id}>
                    {item.id}/{item.name}/{index}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3>条件渲染</h3>
      <button onClick={() => setB1(!b1)}>按钮</button>

      {/* 一种条件 */}
      {b1 && <div>box1</div>}

      {/* 两种条件 */}
      {b1 ? <div>box2</div> : <div>box3</div>}

      {/* 多种条件 */}
      {city === "shanghai" && <div>上海</div>}
      {city === "beijing" && <div>北京</div>}
      {city === "tangshan" && <div>唐山</div>}

      {/* 手痒，想写语句 */}
      {box}
    </div>
  );
};
export default App;
```

## 片段

为一个组件返回多个根级元素。 可以让你将多个子元素列表添加到一个分组中，可以接受业务逻辑，并且不会在DOM中增加额外节点

```
<React.Fragment key="bmw"></..>
<></>

//Fragment 只接受 key` and `children 属性
```

```jsx
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
```

## ref

场景 ：需要抓取dom元素与第三方 DOM 库集成，触发命令式动画，管理焦点，文本选择或媒体播放，图形可视化操作

**用法**

```
//createRef √
const firstRef = React.createRef() //组件每次渲染都会重新创建
<jsx ref={firstRef} />
  
firstRef ==  {current:dom}

//useRef √√√
//组件每次渲染都指向同一个ref, useRef指向的是一个引用
const firstRef =useRef() 
<jsx ref={firstRef} />
firstRef ==  {current:dom}
firstRef.自定义属性=函数式组件内部的普通变量


//callback √√
//组件每次渲染都会重新创建
//回调会在 挂载完毕和更新完毕之前调用
//当组件挂载时，将 DOM el元素传递给 ref 的回调
//当组件卸载时，则会传递 null。
let ref变量 = null;
<jsx ref={el => ref变量 = el}
element //后期用作访问元素本身

// 转发ref
//引用编译后的组件内部的元素，要被引用的组件是一个函数式组件
  
<包装后的子组件 ref={el=>this.inputRef=el} />
  
//子组件是个函数式
const 包装后的子组件 = React.forwardRef((props, ref) => (
  ...
  <input type="text"  ref={ref}/>)
  ...                       
));
```

useRef作用

- useRef用于返回一个可变的ref对象。这个ref对象的current属性被初始化为useRef传入的参数initialValue。
- useRef返回的ref对象在整个生命周期中保持不变。（意思是这个ref对象的地址一直不会变）。
- ref对象变化不会触发视图更新。（但是当有state改变时，ref对象的变化也会显示在视图上）。
- 获取的DOM实例将会储存在current属性。（current属性指向DOM实例）





## 受控元素

表单的value受控，受数据控制

```
value={数据名}  //model->view
onChange={函数}   //view->model
```



## 非受控元素

要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 [使用 ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 来从 DOM 节点中获取表单数据

```
<input type="text" ref="xx" />
```

**默认值**

表单元素上的 `value` 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新,指定一个 `defaultValue` 属性，而不是 `value`

```
留言板
```

## 模拟计算属性useMemo

```jsx
useMemo(()=>计算属性业务逻辑,[依赖数据1，依赖数据2])
import { useMemo } from "react";

function 组件（）{
 
  //计算属性 要有返回值
  const cptList = useMemo(() => {
    return list.filter(
      (item, index) =>
        item.nikename.includes(searchIpt) || item.content.includes(searchIpt)
    );
  }, [list, searchIpt]);
}
```



## 模拟属性检测useEffect

```jsx
useEffect(()=>业务逻辑,[依赖变化的数据1，依赖变化的数据N])
function 组件(){
  
  useEffect(() => {
    if (!ipt) return;
    //读数据
    setTimeout(() => {
      let data = [1, 2, 3, 4, 5];
      setList(data);
    }, 1000);
  }, [ipt]);
}
```

## 模拟nextTick

```
useEffect(()=>业务逻辑,[依赖变化的数据1，依赖变化的数据N])
useEffect(() => {
  if (h === 0) return;
  console.log("model", h); //==>200
  //获取实际dom的高度
  console.log(b1.current.offsetHeight); //==>200
}, [h]);
```



## Portals

结构脱离当前组件，其行为不变仍存在于 *React 树*， 且与 *DOM 树* 中的位置无关，场景如：对话框、悬浮卡以及提示框

```
ReactDOM.createPortal(jsx, 要注入的dom节点)
```

第一个参数是任何[可渲染的 React 子元素](https://zh-hans.reactjs.org/docs/react-component.html#render)，例如一个元素，字符串或 fragment。第二个参数是一个原生 DOM 元素。

```jsx
import { useState } from "react";
import { createPortal } from "react-dom";
let id = 2;
const App = () => {
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([
    { id: 1, nickname: "奥姑", content: "不良帅，你在吗？" },
    { id: 2, nickname: "不良帅", content: "本帅在此，何事" },
  ]);
  const [searchIpt, setSearchIpt] = useState("");
  const [searchList, setSearchList] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [now, setNow] = useState(0); //激活修改的索引
  const [checkContent, setCheckContent] = useState("");
  // 增
  const add = () => {
    setList([...list, { nickname, content, id: id++ }]);
    setNickName("");
    setContent("");
  };
  // 删
  const remove = (index) => {
    let delList = [...list];
    delList.splice(index, 1);
    setList(delList);
  };
  // 选
  const select = (index) => {
    setIsModal(true); //显示模态框
    setNow(index); //跟新索引
    setCheckContent(list[index].content); //跟新修改框内容
  };

  // 改
  const check = () => {
    let tmpArr = [...list];
    tmpArr.splice(now, 1, { ...list[now], content: checkContent });
    setList(tmpArr);
    setIsModal(false);
  };
  // 查
  const search = () => {
    let filterList = list.filter(
      (item) =>
        item.nickname.includes(searchIpt) || item.content.includes(searchIpt)
    );
    setSearchList(filterList);
  };

  return (
    <>
      <h3>CURD</h3>

      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickName(e.target.value)}
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <br />
      <button onClick={add}>增</button>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.content}--{item.nickname}
            <button onClick={() => remove(index)}>删</button>
            <button onClick={() => select(index)}>改</button>
          </li>
        ))}
      </ul>
      <hr />

      <input
        type="text"
        value={searchIpt}
        onChange={(e) => setSearchIpt(e.target.value)}
      />
      <button onClick={search}>查</button>
      <ul>
        <ul>
          {searchList.map((item, index) => (
            <li key={item.id}>
              {item.content}--{item.nickname}
            </li>
          ))}
        </ul>
      </ul>
      <hr />
      {isModal &&
        createPortal(
          <div>
            <h3>您正在修改{list[now].nickname}的留言</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={checkContent}
              onChange={(e) => setCheckContent(e.target.value)}
            ></textarea>
            <br />
            <button onClick={check}>确定</button>
            <button onClick={() => setIsModal(false)}>取消</button>
          </div>,
          document.body
        )}
    </>
  );
};
export default App;

```



## 样式

### css

**引用**

```
<jsx className="类名 类名2" className={返回字符}
<jsx style={{key:value,key:value}}
//style的属性值，可以不给单位，默认px  子属性小驼峰
```

**引入**

- index.html ： 引入  link/style  公共样式  不优化 第三方样式
- index.jsx： import './css/xx.css'  是全局 公共样式 会优化
- 组件.jsx  import './css/xx.css'  全局  公共样式 会优化

**选择器冲突**解决方案

- 命名空间  BEM

  ```
  /*B__E--M  block 区域块  element 元素  midiler 描述|状态 */
  .search{}
  .search__input{}
  .search__input--focus{}
  .search__input--change{}
  .search__button{}
  
  //  B__E--M
  //  b-b-b__e-e-e--m-m-m
  ```

- 模块化

```
import 变量  from './css/xx.module.css' 
<jsx className={变量.类名|id}

//配置
//改名xx.css -> xx.module.css 
//需要模块化的才修改,不影响其他非模块化css写法
```

### **scss**

可能需要安装: node-sass、 sass-loader、sass，需要注意的react18自带sass-loader版本要升到最高，再去安装node-sass就可以成功

```
/*定义scss*/
$bg-color: #399;
.box{
  background: $bg-color;
}
//引入
import 'xx/xx.scss'

//使用
<jsx className="box"

//模块化
import style form xx.module.scss
<xx className={style.box}
```

引入scss**全局变量**

- 方案1: 局部scss文件内部： @import './全局.scss'
- 方案2：webpack配置一次，局部scss内部直接使用  ***

```
//1. 安装插件 : sass-resources-loader
//2. 配置修改webpack.config.js

{
  test:sassRegex,
  ...
  use: [
    {loader:'style-loader'},
    {loader:'css-loader'}, 
    {loader:'sass-loader'},
    {
      loader: 'sass-resources-loader',
      options:{
        resources:'./src/xx/全局主题.scss'
      }
    }
  ]
}
```

**注意** resources 指向作用域在项目环境下

### less

安装: less  less-loader

配置: react18默认没有less的任何配置，我们可以拷贝scss的规则去修改

```jsx
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader" },
    {
      loader: "sass-resources-loader",
      options: {
        resources: "./src/assets/less/base.less", //多个less文件，['xx.less','xx2.less']
      },
    },
  ],
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader" },
    {
      loader: "sass-resources-loader",
      options: {
        resources: "./src/assets/less/base.less",
      },
    },
  ],
},
```

使用:

```jsx
/*定义less*/
@bg-color: #399;
.box{
  background: @bg-color;
}
//引入
import 'xx/xx.less'

//使用
<jsx className="box"

//模块化
import style form xx.module.less
<xx className={style.box}
```



## children

通常封装一部分能力时，做成一个组件(BaseLayouts)，把需要共享此功能的组件(goods)嵌套进去，如：layout组件，或者一些普通的通用组件

```jsx
<BaseLayouts>
  <Goods />
  。。。
</BaseLayouts>

function 组件({children}){}
```



## 给组件传递jsx、组件、函数

```jsx
<子组件 title={<h3>标题</h3>} nav={<Nav />} fn={()=>{}}></BaseLayouts>

//传递jsx、组件 可模拟vue的插槽,来更改组件内部结构
//传递函数 == 组件事件绑定
const BaseLayouts = ({ title, nav,fn }) => {
  return (
    <>
      {title}
      <div className="header">
        <div>logo</div>
        {nav}
      </div>
			<Button onClick={fn}></Button>
    </>
  );
};
```

## 渲染函数

```jsx
const BaseLayouts = ({img}) => {
  
  //渲染函数
  let renderLogo = () => <div className="logo">{img}</div>;

  return (
    <>
      <div className="header">
        {renderLogo()}
      </div>
    </>
  );
};
```



## 生命周期

每当 React更新之后，就会触发 useEffect，在第一次 render 和每次 update 后触发，不用再去考虑“挂载”还是“更新”。useEffect 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

```jsx
import { useEffect } from 'react'; 

useEffect(()=>{
  //挂载完 | 更新完
  return ()=>{卸载前}
},[])
```

> [] == 挂载、卸载，不传递=挂载完/ 更新完/ 卸载每次都会触发
>
> [state|props] == 指定的state或者props变化时
>
> 每一个state|props可以拥有一个effect（关注点分离），按照 effect 声明的顺序依次调用
>
> return 函数，在需要清除副作用时使用
>
> vue更新是dom的更新，react的更新指的是vdom的更新
>
> 正常情况下,vue子跟新子的，父跟新父的，不会相互影响，react父更新会触发子更新

```jsx
import { useEffect, useState } from "react";

const B = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  /* useEffect(() => {
    console.log("挂载+更新");
  }); */

  /* useEffect(() => {
    console.log("挂载");
  }, []); */

  /* useEffect(() => {
    return () => console.log("卸载");
  }, []); */

   useEffect(() => {
    console.log("挂载");
    return () => console.log("卸载");
  }, []);

  // 属性检测
  /* useEffect(() => {
    console.log("指定的数据变了");
  }, [count2]); */

  return (
    <>
      <h3>B</h3>
      <button onClick={() => setCount(count + 1)}>更新b数据count</button>
    </>
  );
};
export default B;
```

## hooks

### **使用规则**

- Hook可让您在不编写类的情况下使用状态和其他React功能
- 只能在函数式组件的顶层调用Hooks 。不要在循环，条件或嵌套函数中调用Hook
- 只能在functional component或者自定义钩子中使用Hooks
- 没有计划从React中删除类

之前遇到过的钩子`useState` `useEffect`useRef``useMemo

hooks推出之后，我们能够使用function的形式来创建包含内部state的组件。但是，使用function的形式，**函数组件的每一次更新**都会执行其内部的"所有"逻辑

### useMemo

缓存一个处理后的值

```jsx
export default function Xxx() {
  
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  
  function getNum() {
    console.log("getNum");
    return count * 100
  }
  
  return (
    {/* 组件任何一条数据变化，getNum函数重复调用 */}
    <div>getNum：{getNum()}</div>
    <div>getNum：{getNum()}</div>
    <div>getNum：{getNum()}</div>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <input value={value} onChange={ev => setValue(ev.target.value)} />
  )
}
```

那么会带来较大的性能损耗。useMemo可指定依赖的数据变化才渲染，类似vue计算属性，返回缓存后的值数据，可拿去渲染

```jsx
const getNumMemo = useMemo(() => {
  //可执行一些没有副作用的业务，比如同步重新计算count
  return count * 100
}, [count])

return (
    {/* 组件任何一条数据变化，getNum函数重复调用 */}
    <div>getNum：{getNumMemo}</div>
    <div>getNum：{getNumMemo}</div>
    <div>getNum：{getNumMemo}</div>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <input value={value} onChange={ev => setValue(ev.target.value)} />
  )
```

**count** 被依赖的数据，若无则多次执行，若为[]执行一次，一般需要依赖数据

**场景** 页面模板上的内容多次调用，无需每次执行逻辑，只希望执行一次，或者依赖一些数据的变化后执行一些业务逻辑时

### **memo**

缓存一个组件，memo是个HOC, react父组件更新未传递给子的数据，子组件也会更新，如下：

```
//修改count 或者 value 时，child组件都会更新
<button onClick={() => setCount(count + 1)}>+1</button>
<input value={value} onChange={ev => setValue(ev.target.value)} />
<Child count={count} />
```

memo可以协助子组件只依赖传递过来的数据变化时才更新

```
import {memo} from 'react'

function Child({count}){
  const show = () => console.log('child组件渲染')
  return (
    <>
      <h3>Child2组件</h3>
      <div>{show()}</div>
      <div>{count}</div>
    </>
  )
}
//memo 修饰当前组件 依赖父的数据变化时，才渲染
export default memo(Child2)

//不包装的情况下，父任意数据更新子都会更新
// export default Child2 
```

**场景** 希望父组件的数据和当前组件无关时，使用memo，做到不影响当前组件无故跟新

### **useCallback**

缓存一个函数，由于组件内的业务函数传递给子组件时，每次都会是新的引用，会导致子组件无故更新，如下：

父组件

```
//修改count 或者 value 时，child组件都会更新
<button onClick={() => setCount(count + 1)}>+1</button>
<input value={value} onChange={ev => setValue(ev.target.value)} />
<Child updateCount=(()=>console.log('业务')) />
```

子组件

```
import {memo} from 'react'
function Child({updateCount}){
  const show = () => console.log('child组件渲染')
  return (
    <>
      <h3>Child3组件</h3>
      <div>{show()}</div>
      <button onClick={updateCount}>测</button>
    </>
  )
}
//memo 修饰当前组件 依赖父的数据变化时，才渲染 但依赖父的是个函数时memo无效
export default memo(Child)
```

useCallback可以将函数缓存起来，节省性能，指定某个被依赖的数据变化才更新函数，子组件配合memo实现，如下：

```
export default () => {
  
  const updateCount = useCallback(()=>{
    //业务
  },[count])

  return (
  	 //修改count 或者 value 时，child组件都会更新
    <button onClick={() => setCount(count + 1)}>+1</button>
    <input value={value} onChange={ev => setValue(ev.target.value)} />
    <Child updateCount={updateCount} />
  )
}
```

**count** 被依赖的数据，若无则多次执行，若为[]执行一次，一般需要依赖数据

**场景** 需要传递给子组件的函数，一般使用useCallback来缓存，避免子组件无故跟新，但要注意跟新缓存

### useRef

缓存一个普通变量

```
const bd = useRef(初始值)
修改： bd.current
```



### useLayoutEffect

useLayoutEffect**早于**类组件**早于**useEffect

**挂载时**

类render → 函数render → useLayoutEffect→ 类didmount → useEffect

**更新时**

类render渲染 → 函数render → useLayoutEffect 销毁→ useLayoutEffect 执行→ 类didUpdate → useEffect 销毁… → useEffect 执行

**场景**

当在useEffect里要操作DOM时，可以在useLayoutEffect里完成，否则可能会出现闪屏，useLayoutEffect里的callback函数会，在DOM更新完成后立即执行，但是会在浏览器绘制之前完成

### 自定义钩子 useXxxXxx

- 重用不同组件之间的常见有状态业务逻辑。
- 每次使用自定义钩子时，其中的所有状态和效果都是完全隔离的
- 我必须以“ use” 开头命名我的自定义Hook
- 自定义Hook是一个JavaScript函数，其名称以“ use” 开头，可以调用其他Hook

```jsx
function useList(initList) {

  //使用系统和自定义钩子
  let [list, setList] = useState(initList);

  //业务
  function add(item) {
    alert('add')
    setList([...list, item])
  }

  function del(index) {
    let arr = [...list];
    arr.splice(index, 1);
    setList(arr);
  }

  function check(index, key,value) {
    alert('check')
    let arr = [...list];
    arr[index][key] = value;
    setList(arr);
  }

  // return [list, add, del, check]
  return {list, add, del, check}
}

//上面的业务，可以被购物结算和留言列表多个组件复用
```

### [ahooks库推荐](https://ahooks.js.org/zh-CN/)

## UI库

### [**Ant Design**](https://ant.design/docs/react/introduce-cn)

`antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

 **特性**

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

**安装**

```
yarn add antd --save   
```

**样式引入** ***

```
//4.0 需要引入   
// index.css
+ @import '~antd/dist/antd.css';

//index.jsx
import 'index.css'

//5.0 无需
```

**使用组件**

```
import {LocaleProvider, DatePicker,Button } from 'antd';
```

**国际化**

```
//index.jsx
// V4
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

//v5
import zhCN from 'antd/es/locale/zh_CN';
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

return (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
```

**主题定制4.0**

 原理上是使用 less 变量覆盖

```
// index.css => index.less
@import '~antd/dist/antd.css' => @import '~antd/dist/antd.less'
config/webpack.config.js
//rules规则
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    {
      loader: "less-loader",
      options: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    }
  ],
  sideEffects: true,
},
  
// lessModuleRegex 同理
```

 所有样式变量可以在 [这里](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到 

```
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 2px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // 浮层阴影
```

**[主题定制5.0](https://ant.design/theme-editor-cn)**

```
//index.jsx
import { ConfigProvider } from "antd";
...
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#399",//主色
      },
    }}
  >
    <根组件></根组件>
  </ConfigProvider>
);
```



### [antd-mobile](https://mobile.ant.design/index-cn)

**安装**

```
yarn add antd-mobile --save
```

**使用组件**

```
import { DatePickerView } from 'antd-mobile'; //直接使用组件 文案是中文
```

**主题**

得益于 CSS 变量强大而灵活的能力，自定义一套 antd-mobile 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接修在 `:root` 覆盖 CSS 变量就可以了：

```
:root:root {  --adm-color-primary: #a062d4;}
```

> 注：为什么要写两个重复的 `:root`？
>
> 由于 antd-mobile 中的主题变量也是在 `:root` 下声明的，所以在有些情况下会由于优先级的问题无法成功覆盖。通过 `:root:root` 可以显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。

当然如果你只是希望对局部的主题进行调整，也可以把上面的 CSS 变量覆盖逻辑加在任何一个你想调整的节点上，例如：

```
.purple-theme {  --adm-color-primary: #a062d4;}
<div className='purple-theme'>  <Button color='primary'>Purple</Button></div>
```

**国际化**

antd-mobile 提供了 [ConfigProvider](https://mobile.ant.design/zh/components/config-provider) 组件用于全局配置国际化文案，默认中文

```
import enUS from 'antd-mobile/es/locales/en-US'
<ConfigProvider locale={enUS}>    <App />  </ConfigProvider>
```

### 移动端适配

​	视口，基础字号

**设置视口**

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
```

**动态设定与修改基础字号**

标准设计稿：  375/10/37.5

方案： js 

```
//uc-flexible.js
(function (doc, win) {
  var docEl = doc.documentElement,
    w = 640, //头条设计稿实际宽度
   	//w = 375, //标准
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      //控制基础字号
      var clientWidth = docEl.clientWidth; //取到宽度
      if (!clientWidth) return;

      // 设定最大支持范围， 淘宝的lib-flexible 个人的afme-flexible都有限定不支持pad或者更大尺寸
      // if (clientWidth >= w) {
      //   clientWidth = w;
      // }
			
      //头条 百倍
      docEl.style.fontSize = 100 * (clientWidth / w) + "px";
      //标准 10倍
      //docEl.style.fontSize = w/10 * (clientWidth / w) + "px";
    };

  //窗口变化时，文档加载完毕时，控制基础字号
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
```

**注意** 组件css样式单位需要写 rem或百分比  如: width: 6.4 rem 会转换自适应100% 屏幕宽

**问题** 设计稿件切出来的是像素 希望css写像素，需要插件转换

​	**使用插件转换px**

主要用到 PostCss后处理器，对css/scss/less等预处理器做后期打包、校验、添加前缀、转换等工作，剔除历史包袱

如果需要使用 `rem` 单位进行适配，推荐使用以下两个PostCss插件工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
- [amfe-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值，可代替前面手动封装的,采用10倍布局，有最大尺寸限定

如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax) 单位进行适配，推荐使用以下PostCss插件工具：

- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。 

安装插件

```
#vp适配：
yarn add postcss-px-to-viewport -D
# 或者
#rem适配: 
yarn add postcss-pxtorem -D 
```

配置

 打开 `config/webpack.config.js`

```
//搜索 postcss-loader
{
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        ident: "postcss",
        config: false,
        plugins: !useTailwind
          ? [
              "postcss-flexbugs-fixes",
              [
                "postcss-preset-env",
                {
                  autoprefixer: {
                    flexbox: "no-2009",
                  },
                  stage: 3,
                },
              ],
          		/* +++ */
              [
                "postcss-pxtorem",
                {
                  rootValue: 37.5,//flexible 控制下的基础字号 不使用组件库
                  
                  //使用组件库 要考虑不同设计尺寸
                  rootValue({ file }) {
                    return file.indexOf("antd-mobile") === -1 ? 37.5 : 75; // 10倍 ， 37.5是ant组件设计稿，75是设计师尺寸
                  },
                  selectorBlackList: [],
                  propList: ["*"],
                  // exclude: /node_modules/i,
                },
              ],
          
          		[
                "postcss-px-to-viewport",
                {
                  viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
                },
              ]
          			/* +++ */
              "postcss-normalize",
            ]
          : [
              "tailwindcss",
              "postcss-flexbugs-fixes",
              [
                "postcss-preset-env",
                {
                  autoprefixer: {
                    flexbox: "no-2009",
                  },
                  stage: 3,
                },
              ],
          		
              /* +++ */
              [
                "postcss-pxtorem",
                {
                  rootValue: 100, //flexible 控制下的基础字号
                  
                  rootValue({ file }) {
                    return file.indexOf("antd-mobile") !== -1 ? 37.5 : 75; // 10倍 ， 37.5是ant组件设计稿，75是设计师尺寸
                  },
                  selectorBlackList: [],
                  propList: ["*"],
                  // exclude: /node_modules/i,
                },
              ],
          		[
                "postcss-px-to-viewport",
                {
                  viewportWidth: 640, // 视窗的宽度，对应的是我们设计稿的宽度
                },
              ]
          			/* +++ */
            ],
      },
      sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
    },
  },
```

无论配置在哪，在`main.js`都需要引入`flexible`来监听并修改基准尺寸

```
import 'amfe-flexible'
或
import '自行封装的' //一般需要修改倍数时
```



[官网](https://echarts.apache.org/zh/index.html)

## echarts

**安装**

```
yarn add echarts --save
```

**引入**

```
import * as echarts from 'echarts'
```

**使用**

```
//实例化
let instance=echarts.init(dom元素);
//渲染
instance.setOption(数据)
//API: 
instance.showLoading()/hideLoading()/ on('事件名',方法)

//事件:
instance.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
  //跳转路由
  //多页面跳转 
  window.open('https://www.baidu.com/s?wd='+params.name,"_blank")
});
```

[资料](https://echarts.apache.org/zh/index.html)

## 第三方地图

这里以百度地图为例，其他第三方地图库学习方法同理，登录[官网](http://lbsyun.baidu.com/)

- 注册百度账号
- 申请成为百度开发者  注册   **浏览器端**
- 获取服务密钥（ak mT8XXo4kIGkUfzFeInb0A6GvzS09WtNv）
- 使用相关服务功能

**引入库**

```
//vue|react的index.html cdn加入 
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=UBMP6QMGFzoEIgb45h5RO0XD6nZcHvYT"></script>
```

**使用**

```
//装地图的id要有，元素要有高
<div id="map"></div>
在react脚手架中全局对象需要使用 window 来访问，否则会造成eslint校验错误
```

[API](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html)	[事例](http://lbsyun.baidu.com/jsdemo.htm#a1_2)



## 数据请求

### fetch

js原生api，是promise的语法糖，用法如下

```
fetch(url+get数据,{配置}).then((res)=>{}).catch((err)=>{})

//配置
//method:'POST'  默认get
//headers:{"Content-type":"application/x-www-form-urlencoded"},
//body:'a=1&b=2'|URLSearchParams
//注意： body数据为字符时，需要携带请求头
//async + await 用法
```

> res.ok :	true/false 成功/失败 	res.status:	 状态码 	res.body :	数据 数据流(stream) 	res.text() ：	转换 文本(string)，过程异步，return res.text() 	res.json() ：	转  对象

[文档](https://github.github.io/fetch/)

### axios 

[官网](https://github.com/axios/axios) [中文](http://www.axios-js.com/zh-cn/docs/)

### umi-request

[文档](https://github.com/umijs/umi-request/blob/master/README_zh-CN.md)

### 客户端代理

正向代理隐藏真实客户端，反向代理隐藏真实服务端，正向代理实现翻墙，反向代理实现跨域，客户端代理指的就是代码写在客户端，不过实现的是跨域

方案1

```
//配置: package.json
"proxy":"https://uncle9.top"

//组件
/api/xx ...

问题： 只能代理一个服务器
```

方案2

利用客户端代理中间件(http-proxy-middleware)完成, 官网给了新的使用方式，在src下新建文件setupProxy.js加下面代码，无需单独应用，webpack会自动引入文件。

```
// src/ 创建 setupProxy.js

//verion < 1.0
const proxy = require('http-proxy-middleware'); //需要安装中间件  
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: 'https://uncle9.top',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/v2", {
      target: "https://api.douban.com",
      changeOrigin: true
    })
  );
};

//组件： /api/xx ... | /v2/...

//verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://vareyoung.top',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '/api', // axios 访问/api2 == target + /api
    }
  }));

};
```



## mock

JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。

### 安装json-server

```
yarn add json-server -S
```

### 启动 json-server

`json-server`可以直接把一个`json`文件托管成一个具备全`RESTful`风格的`API`,并支持跨域、`jsonp`、路由订制、数据快照保存等功能的 web 服务器。

db.json文件的内容：

```
{
  "course": [
    {
      "id": 1000,
      "course_name": "马连白米且",
      "autor": "袁明",
      "college": "金并即总变史",
      "category_Id": 2
    },
    {
      "id": 1001,
      "course_name": "公拉农题队始果动",
      "autor": "高丽",
      "college": "先了队叫及便",
      "category_Id": 2
    }
  ]
}
```

例如以下命令，把`db.json`文件托管成一个 web 服务。

```
$ json-server --watch --port 53000 db.json
```

输出类似以下内容，说明启动成功。

```
\{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:53000/course

Home
http://localhost:53000

Type s + enter at any time to create a snapshot of the database
Watching...
```

此时，你可以打开你的浏览器，然后输入：http://localhost:53000/course

**RESTful API**

```
增 POST /user  ！address中包含数据
删 DELETE /user/:id | user?id=1 根据ID删除用户信息
改 PUT|PATCH /user ！address中包含数据 PUT覆盖修改 PATCH局部修改
查 GET /user /user/1 | user?id=1 
	 GET  根据用户id查询用户数据 没有id查询所有 /1 返对象 id=1 返回数组>对象
分页	_page 第几页， _limit一页多少条
  GET /user?_page=7  不传递默认0
  GET /user?_page=7&_limit=20 不传递默认20条
排序 _sort设定排序的字段 _order设定排序的方式（默认升序）
  GET /user?_sort=views&_order=asc
  GET /user/1/comments?_sort=votes&_order=asc
  GET /user?_sort=title,views&_order=desc,asc 	多个字段排序
任意切片数据 _start 开始不包含  _end 结束包含
  GET /users?_start=20&_end=30
  GET /user/1/comments?_start=20&_end=30
  GET /user/1/comments?_start=20&_limit=10
全文检索	GET /user?q=九哥
```

### json-server 的相关启动参数

- 语法：`json-server [options] <source>`
- 选项列表：

| 参数               | 简写 | 默认值                                              | 说明                             |
| :----------------- | :--- | :-------------------------------------------------- | :------------------------------- |
| --config           | -c   | 指定配置文件                                        | [默认值: "json-server.json"]     |
| --port             | -p   | 设置端口 [默认值: 3000]                             | Number                           |
| --host             | -H   | 设置域 [默认值: "0.0.0.0"]                          | String                           |
| --watch            | -w   | Watch file(s)                                       | 是否监听                         |
| --routes           | -r   | 指定自定义路由                                      |                                  |
| --middlewares      | -m   | 指定中间件 files                                    | [数组]                           |
| --static           | -s   | Set static files directory                          | 静态目录,类比：express的静态目录 |
| --readonly         | --ro | Allow only GET requests [布尔]                      |                                  |
| --nocors           | --nc | Disable Cross-Origin Resource Sharing [布尔]        |                                  |
| --no               | gzip | , --ng Disable GZIP Content-Encoding [布尔]         |                                  |
| --snapshots        | -S   | Set snapshots directory [默认值: "."]               |                                  |
| --delay            | -d   | Add delay to responses (ms)                         |                                  |
| --id               | -i   | Set database id property (e.g. _id) [默认值: "id"]  |                                  |
| --foreignKeySuffix | --   | fks Set foreign key suffix (e.g. _id as in post_id) | [默认值: "Id"]                   |
| --help             | -h   | 显示帮助信息                                        | [布尔]                           |
| --version          | -v   | 显示版本号                                          | [布尔]                           |

- source可以是json文件或者js文件。实例：

```
json-server --watch -c ./jsonserver.json
json-server --watch db.js  命令行里面要的db是个函数
json-server db.json
json-server --watch -port 8888 db.json
```

### 动态生成模拟数据

启动json-server的命令：`json-server --watch db.js` 是把一个js文件返回的数据托管成web服务。

app.js配合[mockjs](http://mockjs.com/)库可以很方便的进行生成模拟数据。

```
// 用mockjs模拟生成数据
var Mock = require('mockjs');

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'course|227': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1000,
        course_name: '@ctitle(5,10)',
        autor: '@cname',
        college: '@ctitle(6)',
        'category_Id|1-6': 1
      }
    ],
    'course_category|6': [
      {
        "id|+1": 1,
        "pid": -1,
        cName: '@ctitle(4)'
      }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};
```

### 路由

#### 默认的路由

`json-server`为提供了`GET`,`POST`, `PUT`, `PATCH` ,`DELETE`等请求的API,分别对应数据中的所有类型的实体。

```
# 获取所有的课程信息
GET    /course

# 获取id=1001的课程信息
GET    /course/1001

# 添加课程信息，请求body中必须包含course的属性数据，json-server自动保存。
POST   /course

# 修改课程，请求body中必须包含course的属性数据
PUT    /course/1
PATCH  /course/1

# 删除课程信息
DELETE /course/1

# 获取具体课程信息id=1001
GET    /course/1001
```

#### 自定义路由

当然你可以自定义路由：

```
$ json-server --watch --routes route.json db.json
```

`route.json`文件

```
{
  "/api/*": "/$1",    //   /api/course   <==>  /course
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
}
```

### 自定义配置文件

通过命令行配置路由、数据文件、监控等会让命令变的很长，而且容易敲错，可以把命令写到npm的scripts中，但是依然配置不方便。

json-server允许我们把所有的配置放到一个配置文件中，这个配置文件默认`json-server.json`;

例如:

```
{
  "port": 53000,
  "watch": true,
  "static": "./public",
  "read-only": false,
  "no-cors": false,
  "no-gzip": false,
  "routes": "route.json"
}
```

使用配置文件启动json-server:

```
# 默认使用：json-server.json配置文件
$ json-server db.js  
$ json-server db.json 

# 指定配置文件
$ json-server --watch -c jserver.json db.json
```

### 过滤查询

查询数据，可以额外提供

```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2

# 可以用 . 访问更深层的属性。
GET /comments?author.name=typicode
```

还可以使用一些判断条件作为过滤查询的辅助。

```
GET /posts?views_gte=10&views_lte=20
```

可以用的拼接条件为：

- `_gte` : 大于等于
- `_lte` : 小于等于
- `_ne` : 不等于
- `_like` : 包含

```
GET /posts?id_ne=1
GET /posts?id_lte=100
GET /posts?title_like=server
```

### 分页查询

默认后台处理分页参数为： `_page` 第几页， `_limit`一页多少条。

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

> 默认一页10条。

后台会返回总条数，总条数的数据在响应头:`X-Total-Count`中。

### 排序

- 参数： `_sort`设定排序的字段
- 参数： `_order`设定排序的方式（默认升序）

```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```

支持多个字段排序：

```
GET /posts?_sort=user,views&_order=desc,asc
```

### 任意切片数据

```
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
```

### 全文检索

可以通过`q`参数进行全文检索，例如：`GET /posts?q=internet`

### 其他高级用法

`json-server`本身就是依赖express开发而来，可以进行深度定制。细节就不展开，具体详情请参考[官网](https://github.com/typicode/json-server)。

```
const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块
const path = require('path');
const Mock = require('mockjs');
let mock='/mock';//定义路由根别名

//创建服务器
const server = jsonServer.create();//创建jsonserver 服务对象


//配置jsonserver服务器 中间件
server.use(jsonServer.defaults({
  static:path.join(__dirname, '/public'),//静态资源托管
}));
server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件


//响应
server.use((request, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  next();
});

//登录注册校验
let mr = Mock.Random;//提取mock的随机对象
server.get(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.query.username;
  let password=req.query.password;
  (username === 'aa' && password === 'aa123')?
    res.jsonp({
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })

});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  (username !== 'aa') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })

});

//响应mock接口 自定义返回结构 定义mock接口别名
const router = jsonServer.router(db);//创建路由对象 db为mock接口路由配置  db==object

router.render = (req, res) => {//自定义返回结构
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);

  setTimeout(()=>{//模拟服务器延时
    res.jsonp({
      err: len !== 0 ? 0 : 1,
      msg: len !== 0 ? '成功' : '失败',
      data: res.locals.data
    })
  },1000)

  // res.jsonp(res.locals.data)

};

server.use(jsonServer.rewriter({//路由自定义别名
  [mock+"/*"]: "/$1",

  // "/product\\?dataName=:dataName": "/:dataName",
  // "/banner\\?dataName=:dataName": "/:dataName",
  // "/detail\\?dataName=:dataName&id=:id": "/:dataName/:id",

  // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
  // "/product/add\\?dataName=:dataName": "/:dataName",
  // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"
}));

server.use(router);//路由响应



//开启jsonserver服务
server.listen(3333, () => {
  console.log('mock server is running')
});
```



## 路由 

### [V5](https://v5.reactrouter.com/web/guides/quick-start)

**理念**

遵循Just Component的 API 设计理念 万物皆组件，路由规则位于布局和 UI 本身之间

**安装**

React Router被拆分成三个包：react-router,react-router-dom和react-router-native。react-router提供核心的路由组件与函数。其余两个则提供运行环境（即浏览器与react-native）所需的特定组件

```
yarn add react-router-dom@5.3.0 --save
```

**提供组件**

| 组件          | 作用                                                         |
| ------------- | ------------------------------------------------------------ |
| BrowserRouter | 约定模式 为 history，使用 HTML5 提供的 history API 来保持 UI 和 URL 的同步 |
| HashRouter    | 约定模式 为 hash，使用 URL 的 hash (例如：window.location.hash) 来保持 UI 和URL 的同步 |
| NavLink       | 声明式跳转 还可以约定 路由激活状态                           |
| Link          | 声明式跳转    ~~ push 无激活状态                             |
| Redirect      | 重定向    ~~ replace                                         |
| Route/Outlet  | 匹配、展示                                                   |
| Switch        | 排他性匹配                                                   |
| Prompt        | 后置守卫                                                     |
| withRouter    | 把不是通过路由切换过来的组件中，将 history、location、match 三个对象传入props对象上 |

**结构**

- BrowserRouter|HashRouter
  - 根组件(App)
    - NavLink|Link
    - Route/Outlet
    - Redirect
      - 子组件
        - NavLink|Link
        - Route
        - ...

**BrowserRouter**

| 属性                | 类型     | 作用                                                         |
| ------------------- | -------- | ------------------------------------------------------------ |
| basename            | string   | 所有位置的基本URL。如果您的应用是从服务器上的子目录提供的，则需要将其设置为子目录。格式正确的基本名称应以斜杠开头，但不能以斜杠结尾 |
| getUserConfirmation | Function | 用于确认导航的功能。默认使用[`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)。 |
| forceRefresh        | boolean  | 是否调整时强制刷新，模拟旧式服务器渲染                       |

**Route**

| 属性      | 类型                     | 作用                                                         |
| --------- | ------------------------ | ------------------------------------------------------------ |
| path      | string \|string[]        | 路由匹配路径。没有path属性的Route 总是会 匹配                |
| exact     | boolean                  | 为true时，要求全路径匹配(/home)。路由默认为“包含”的(/和/home都匹配)，这意味着多个 Route 可以同时进行匹配和渲染 |
| component | Function    ReactElement | 在地址匹配的时候React的组件才会被渲染，route props也会随着一起被渲染 |
| render    | Function                 | 内联渲染和包装组件，要求要返回目标组件的调用                 |

**Link**

| 属性    | 类型                        | 作用               |
| ------- | --------------------------- | ------------------ |
| to      | string \| {pathname,search} | 要跳转的路径或地址 |
| replace | boolean                     | 是否替换历史记录   |

**NavLink**

| 属性            | 类型          | 作用                                          |
| --------------- | ------------- | --------------------------------------------- |
| to              | string object | 要跳转的路径或地址                            |
| replace         | boolean       | 是否替换历史记录                              |
| activeClassName | string        | 当元素被选中时，设置选中样式，默认值为 active |
| activeStyle     | object        | 当元素被选中时，设置选中样式                  |
| exact           | boolean       | 严格匹配                                      |

**Switch**

该组件用来渲染匹配地址的第一个Route或者Redirect，仅渲染一个路由，排他性路由,默认全匹配(场景：侧边栏和面包屑，引导选项卡等

| 属性     | 类型          | 作用 |
| -------- | ------------- | ---- |
| location | string object |      |
| children | node          |      |

**Redirect**

将导航到新位置。新位置将覆盖历史记录的当前位置

| 属性      | 类型          | 作用         |
| --------- | ------------- | ------------ |
| from      | string        | 来自         |
| to        | string object | 去向         |
| push      | boolean       | 添加历史记录 |
| exact     | boolean       | 严格匹配     |
| sensitive | boolean       | 区分大小写   |

**404**

```
<Route component={Error}/> 总是会匹配
```

**参数数据传递**

```
let {history,location,match}=props
<Link to={match.url+'/001'}/>
<Link to={`${match.url}/002?a=1&b=2`}/>
<Link to={{pathname:match.url+'/003',search:'?a=11&b=12',hash:'#a1'}}

<Route path={match.path+'/:aid'} component={Detail}
```

> url - (浏览器 URL 中的实际路径) URL 匹配的部分。 用于构建嵌套的 <Link> 	path - (路由编写的路径) 用于匹配路径模式。用于构建嵌套的 <Route>

**接收**

```
//接参数:
{match.params.aid}
//接数据
{location.search}
//接地址:
{location.pathname}
```

> 无法从v4+ 中获取 URL 的查询字符串了。因为没有关于如何处理复杂查询字符串的标准。所以，作者让开发者去选择如何处理查询字符串。推荐qs库|query-string

**编程式跳转**

```
history.push('/user?a=1&b=2')
history.push({pathname:'/user',search:'?a=11&b=22'})
history.replace({pathname:'/user',search:'?a=111&b=222'})
history.go(-1)
```

**非路由跳转组件**

不是所有组件会通过路由跳转，也需要抓取路由上下文时，解决方案

1. 通过路由跳转
2. 通过属性传递
3. 通过withRouter包装

```
import {withRouter} from 'react-router-dom'
export default withRouter(组件)
```



**前置授权路由**

需要自定义路由，具体为，自定义一个组件，代替Route，其内部根据条件返回一个Route 组件指向目标组件，或者Route的render函数内部判断加载目标，最后组件树关系为：switch>自定义组件>Route>目标组件

```
<Auth path="/goods" component={Goods} />
<Auth path="/user" component={User} />

//守卫条件 是异步
useEffect()
//守卫条件 是同步
let Auth = props => {
  let {component:Component,...rest} = props;
  if (Math.random()<0.5) {
    return <Route component={Login}/>
  }else{
    return <Route {...rest} render={(props)=>{
      //..业务
      return <Component {...props}  />
    }}/>
  }
};
```

**后置守卫**

```
// reg.jsx
import { Prompt } from 'react-router-dom'
<Prompt
  when={this.state.isBlocking}
  message={location=>...}
/>
```

> message: 后面可以跟简单的提示语，也可以跟函数，函数是有默认参数的。 	when: when的属性值为true时防止跳转；

### [V6](https://reacttraining.com/react-router/) 

[官网](https://reacttraining.com/react-router/) [中文官网](https://books.sangniao.com/manual/2512864574/848656128)

**安装**

React Router被拆分成三个包：react-router,react-router-dom和react-router-native。react-router提供核心的路由组件与函数。其余两个则提供运行环境（即浏览器与react-native）所需的特定组件，V6放弃对class组件的部分支持

```
yarn add react-router-dom --save
```

**提供组件**

| 组件          | 作用                                                         |
| ------------- | ------------------------------------------------------------ |
| BrowserRouter | 约定模式 为 history，使用 HTML5 提供的 history API 来保持 UI 和 URL 的同步 |
| HashRouter    | 约定模式 为 hash，使用 URL 的 hash (例如：window.location.hash) 来保持 UI 和URL 的同步 |
| NavLink       | 声明式跳转 还可以约定 路由激活状态                           |
| Link          | 声明式跳转    ~~ push 无激活状态                             |
| Route         | 匹配、展示、可包含子路由，有子时，自身可指向layouts          |
| Outlet        | 插座，展示，布局层组件需要用到                               |
| Routes        | 排他性匹配，Route的父                                        |
| Navigate      | 重定向                                                       |

**组件树结构**

分离式: V5习惯

- BrowserRouter|HashRouter
  - 根组件(App)
    - NavLink|Link
    - Route
    - Navigate
      - 子组件
        - NavLink|Link
        - Route
        - ...

集中式: V6  √

- BrowserRouter|HashRouter
  - Routes
    - Route -> layouts 
      - Route -> pages
      - Route -> Navigate
      - Route -> 404
    - Route -> pages
    - Route -> Navigate
    - Route -> 404

```
// src/routes/RouteConfig.jsx
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
...
import Detail from "../pages/detail";
import App from "../layouts/App";

const RouterConfig = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Navigate to="/home" />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;

// src/index.js
root.render(
  <StrictMode>
    <RouterConfig></RouterConfig>
  </StrictMode>
);
```

- 组件(layouts/pages)
  - NavLink|Link
  - Outlet

**BrowserRouter**

| 属性     | 类型   | 作用                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| basename | string | 所有位置的基本URL。如果您的应用是从服务器上的子目录提供的，则需要将其设置为子目录。格式正确的基本名称应以斜杠开头，但不能以斜杠结尾 |

**Route**

| 属性    | 类型            | 作用                                  |
| ------- | --------------- | ------------------------------------- |
| path    | string          | 路由匹配路径。支持子路径不带/         |
| element | React.ReactNode | 在地址匹配的时候React的组件才会被渲染 |
| index   | boolean         | 当前path是否为默认页                  |

**Link**

| 属性           | 类型                        | 作用                     |
| -------------- | --------------------------- | ------------------------ |
| to             | string \| {pathname,search} | 要跳转的路径和查询字符串 |
| replace        | boolean                     | 是否替换历史记录         |
| reloadDocument | boolean                     | 是否刷新页面             |
| state          | any                         | 其他需要传递个信息       |

**NavLink**

| 属性      | 类型                  | 作用                         |
| --------- | --------------------- | ---------------------------- |
| to        | string object         | 要跳转的路径和查询字符串     |
| replace   | boolean               | 是否替换历史记录             |
| className | ({isActive})=>string  | 当元素被选中时，设置选中样式 |
| style     | ({isActive})=> object | 当元素被选中时，设置选中样式 |

**Navigate**

| 属性    | 类型          | 作用                     |
| ------- | ------------- | ------------------------ |
| to      | string object | 要跳转的路径和查询字符串 |
| replace | boolean       | 是否替换历史记录         |
| state   | any           | 其他需要传递个信息       |

```
<NavLink
  className={({ isActive }) => (isActive ? "active" : "")}
  to="/home"
>
  首页
</NavLink>
<NavLink
  to="/goods"
  style={({ isActive }) =>
    isActive ? { background: "#399" } : undefined
  }
>
  商品
</NavLink>
```

**404**

```
<Route path="*" element={<NoPage />} />
```

**子路由、参数和数据传递**

```
<Link to="/goods/1" reloadDocument>
  商品001
</Link>
<Link to="/goods/2?a=1&b=2">商品002</Link>
<Link to={{ pathname: "3", search: "a=2&b=3" }}>商品003</Link>
<Link to="./4" state={{ a: 4, b: 5 }}>
  商品004
</Link>
<Link to="../">回退</Link>
```

**接收**

```
import { useParams, useSearchParams, useLocation } from "react-router-dom";
function 组件(){
  const params = useParams(); //获取动态路由的值
	const [searchParams, setSearchParams] = useSearchParams(); // 获取查询字符串的值
	const location = useLocation(); // 获取上一个页面传递进来的 state 参数 路由地址
  searchParams.get('search的key')
  location.state/pathname/hash/key
  params.动态路由名变量
}
```

**编程式跳转**

```
import { useNavigate } from "react-router-dom";
function 组件(){
  const navigate = useNavigate();
  navigate("/login");
	navigate("/reg", { replace: true }); //清除历史记录
	navigate({ pathname: "/goods/5", search: "a=6&b=8" }, { replace: true });
	navigate(-1) //回退
}
```

**授权路由**

路由独享守卫

```
// src/access/Auth.jsx
export function UserAuth({ children }) {
  let location = useLocation();
  if (Math.random() < 0.5) {
    // 将它们重定向到/login页面，但保存它们所在的当前位置
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

// src/plugins/router.js
<Route
  path="/user"
  element={
    <Auth>
      <User />
    </Auth>
  }
/>
```

全局守卫

```
// src/access/Auth.jsx

//同步
export function Auth({ children }) {
  let location = useLocation();
  if (Math.random() < 0.5) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

//异步
//避免组件频繁渲染
let auth = false; //是否授权通过
let isSendAuthRequest = false; //是否发送过相关授权接口的请求

const GlobalAuth = ({ children }) => {
  const location = useLocation();
  const [requestCount, setRequestCount] = useState(0); //

  useEffect(() => {
    if (!location.pathname.includes("/login")) {
      setTimeout(() => {
        console.log("模拟接口请求《携带token，实时校验有效期》后返回的数据");
        isSendAuthRequest = true;
        auth = true;
        setRequestCount(requestCount + 1); //触发组件跟新第二次，因为第一次return null
      }, 1000);
    }
    // eslint-disable-next-line
  }, [location.pathname]); //属性检测 路由地址变化为了每次路由跳转都要读取api接口数据

  if (
    location.pathname.includes("/login") ||
    location.pathname.includes("/reg")
  ) {
    return children;
  } else {
    //异步条件

    if (!isSendAuthRequest) {
      return null; //没有发送过请求，组件暂时不渲染
    } else {
      if (auth) {
        //授权通过
        isSendAuthRequest = auth = false; //复位
        return children;
      } else {
        isSendAuthRequest = auth = false; //复位
        return <Navigate to="/login" state={{ from: location.pathname }} />;
      }
    }
  }
};

// src/plugins/router.js
<BrowserRouter>
  <Auth>
    <Routes>
      ...
    </Routes>
  </Auth>
</BrowserRouter>
```

**路由懒加载**

又叫异步组件

```
// src/plugins/router.js
import { lazy, Suspense } from "react";
const User = lazy(() => import("../pages/user"));
const App = lazy(() => import("../layouts/app"));
const RouterConfig = (props) => {
  return (
  	<BrowserRouter>
      <Auth>
      	<Suspense fallback={<>...</>}>
          <Routes>
            <Route path="/" element={<App />}>
              ...
            </Route>
          </Routes>
        </Suspense>
      </Auth>
  )
}
```

**路由对象数据**

在路由信息是数据时，使用`useRoutes()`钩子配置路由，useRoutes钩子需要在 Routes 组件内部使用，返回包装后的Routes组件

```
// src/plugns/router.js
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Auth, UserAuth } from "../access/Auth";

const Goods = lazy(() => import("../pages/goods"));
const App = lazy(() => import("../layouts/App"));
...

const RouterConfig = (props) => {
  //假的路由数据 routes数据里面对应的element指向的组件，都必须是懒加载组件|异步组件
  let routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "goods",
          element: <Goods />,
          children: [
            ...
          ],
        },
       	...
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    ...
    {
      path: "*",
      element: <NoPage />,
    },
  ];

  const Routes = () => useRoutes(routes); //useRoutes 返回 routes组件的内容

  return (
    <BrowserRouter basename="/react">
      <Auth>
        <Suspense fallback={<>...</>}>
          {/* 声明式调用组件就是在调用函数 */}
          <Routes />
          {/* { 数据不为空 && <Routes/> } */}
        </Suspense>
      </Auth>
    </BrowserRouter>
  );
};

export default RouterConfig;
```



## 项目

### 技术栈选型

**前端**

create-react-app 

react-router-dom

axios、umi-request

pubusb.js/redux/react-redux/react-think

Antd组件库

**后端**

线上接口、本地服务器

数据模拟 json-server | mock|JSON

### **环境规划**

```
|-build		打包后的文件需要部署到线上
|-config	 CRA配置
|-scirpts  CRA配置
|-pubilc
  |- data
    |- 静态数据
  |-index.html 浏览器入口
|-node_modules
|-src
  |-utils 工具包
    |-date.js / fillzero.js/...
  |-layouts 布局
    |- Default、success、error、
  |-components 应用内部基础通用组件、木偶组件
    |- swiper 对第三方通用组件的二次封装
  |-pages  智能组件 页面
    |- admin
			 |- DashBoard
					|- assets 私有写死资源
					|- index.jsx
					|- index.css|scss|less|stylus
		|- user
	|-access
			守卫组件
  |- services/api
			服务: 和接口交互一些通用业务逻辑
  |- assets 公共写死资源
    |- img
    |- css、sass
    |- font
  |- store	状态管理
    |- state/reducer/asyncAction
	|- plugins  插件配置
		|- axios /  ....
  	|- routes/ ....
    |- antd
  Index.jsx
```





### **资源引入**

- index.html引入  不优化
- index.js  引入 优化
- 组件 引入 优化

### **资源路径指向**

相对路径：一般指向写死的资源(css/js/images)

绝对路径:  一般指向数据资源(服务器数据资源/public目录)

### **布局方案**

- 切图，需要设计稿，用户端开发时用到
- UI库，管理端开发时用到，常用的UI库(elementUI/ant.design)
- 模板移植，老项目重构时用到

### 制作流程

- 构建项目环境、环境目录规划、搭建路由、权限路由、local工具封装
- antd安装配置、登录（交互工具封装、api接口管理）、token过期篡改
- 布局层组件BaseLayouts，抓取权限菜单数据，完成跳转、面包屑
- 商品列表（布局、数据读取、分页、上下架）
- 删除、新增、编辑商品（文件上传、富文本编辑）
- 注销登出（删除token，跳转）
- 仪表盘首页（大屏可视化/charts<注意包对应>/统计组件/动态主题修改首页背景)
- 通知中心（组件通讯/PubSub订阅发布包）

### 知识点

#### **客户端代理**

```
// src/ 创建 setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://vareyoung.top',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '/api', // axios 访问/api2 == target + /api
    }
  }));

};
```

#### **umi-request封装**

```
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import request,{ extend } from 'umi-request';
import qs from 'qs'

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  
  //1抓取本地token，携带在请求头里
  let user = window.localStorage.getItem('user');
  user = user ? qs.parse(user) : '';
  options.headers={'token': user.token}
  
  return (
    {
      url,
      options
    }
  );
});

// 提前对响应做异常处理
request.interceptors.response.use(async (response) => {
  
  const codeMaps = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  
  console.log(codeMaps[response.status]);
  
	const data = await response.clone().json();//克隆响应对象做解析处理
  
  let router=new Router();
  //token过期: 返回值2,当前路由不是login时跳转 
  if (data.err === 2 && !router.history.location.pathname.includes('/login')) {
    console.log('token 失败 跳转到login',router);
    window.location.href=baseLocalUrl+'/login?path='+router.history.location.pathname

    /*router.history.push({  //hash 模式可以，history模式有问题
      pathname: '/login',
      search: "path="+router.history.location.pathname
    })*/
  }
  
  return response;
});


React.request = request;//request绑到对象包上
React.Component.prototype.request = request; // request绑定到Component类的原型   组件|this.request
window.request = request;  //×   希望全局使用request , 使用webpack 来配置
export default request;
```

#### **api服务封装**

```
export const queryDetail = async ({id, apiname}) => {
  return request(`/mock/${apiname}/${id}`)
};

export const queryReg = async ({username,password,icon}) => {

  let params = new URLSearchParams();
  params.append("username",username);
  params.append("password",password);

  // await checkUserInput(username,password,icon)
  //icon input:file
  if (icon.files.length>0){
    params.append("icon",icon.files[0]);
  }

  return request('/mock/reg',{
    method:'post',
    data: params//携带数据 对象  字符  URLSearchParams
  });
};
```



#### **用户介权**

```
//登录
login-> 发送登录请求 返回token，种本地(cookie/localStorage/vuex)->跳转之前页面|user

//页面访问

isLogin抓取token到后端校验=>不通过跳转/通过返回数据
//或者
前置路由守卫抓取token携带到后端校验=>不通过跳转/通过next

//注销: 
删除 本地 token, 跳转登录
```

#### **工具方法**

```
|-common|utils
  date.js
  fillzero.js
  ...
  index.js
    import date/fillzero ..
    export {
      date,fillzero
    }
```

#### **路由监听**

```
//路由检测: pathname的变化
useEffect(()=>{
  if (/home|follow|column/.test(path)){
    setNav(true);setFoot(true)
  }
  if (/detail|login|reg/.test(path)){
  }
  if (/user/.test(path)){
  }
})

//loading数据 
//订阅发布库
//订阅发布库： App订阅,  组件求数据时发布 | 拦截器发布
```

#### pubsub-js

**安装**

```
 yarn add pubsub-js -S
```

**订阅**

```
token = PubSub.subscribe('事件名称', 函数(msg,data));
//msg == 事件名称
//data == 传入的数据
```

发布

```
PubSub.publish('事件名称', '数据')
```

**取消订阅**

```
PubSub.unsubscribe(token);  //取消指定订阅
PubSub.clearAllSubscriptions(); //取消所有订阅 不推荐使用
```

> 先订阅，再发布，组件卸载时，移除订阅

## 分离式部署

- 

react的项目打包(build)，拷贝到空node项目环境（public)下，利用node做后端代理，访问自行开发node，再一同拷贝到购买的云服务器上，阿里云的服务器类型选择centos

| 前端        | 代理端             | 服务端                                             |
| ----------- | ------------------ | -------------------------------------------------- |
| react       | node\|nginx        | json-server + mock \| 第三方接口服务\|自行开发node |
| js/html/css | 提供静态资源\|代理 | 提供api和库的动态请求                              |

### 服务器购买

1. baidu搜索 阿里云
2. 扫码登录 （没有账号，手机注册) 下次可直接扫码登录
3. 购买服务器 （认准 "ecs" "云服务器") https://www.aliyun.com/daily-act/ecs/fy22-12-yure?spm=5176.8789780.J_3965641470.3.ed3545b5T0eL1o
4. 需要实名认证-》个人->支付宝认证->支付宝扫码
5. 购买->系统选择 centOs 8.x/7.x都可->支付
6. 找到控制台--》找到云服务器ecs->我的资源->找到购买的服务器-> 重置密码+初始化云盘

### 部署

**使用finalShell连接服务器**

- 安装  finalShell
- 启动 finalShell-》新建会话-》主机：公网IP-》端口 ： 22-》用户名：root-》密码: **登录密码**

**給服务器安装环境**

```
sudo curl --silent --location https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs
检测: node -v
```

**上传代码**

- 把node项目目录 拖到 finalShell 下面

```
//远程操作
npm start

//让阿里云支持node里面的3009端口
找到控制台->安全组-》配置规则-》添加规则-》端口范围（3009/3009）,授权对象(0.0.0.0/0)
```



**給服务器安装mongodb服务**

下载目录可任意选择，本人下载至 download

```
cd /
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.9.tgz 
```

**解压**

```
sudo tar zxvf 下载下来的包名
```

**移动**

将解压后的文件夹移动至指定目录

```
cd /usr/local
mkdir mongodb
cd /
sudo mv 解压后目录/*  /usr/local/mongodb
```

**创建数据文件夹、日志文件和mongo配置文件**

```
sudo mkdir -p  /usr/local/mongodb/data
sudo touch /usr/local/mongodb/mongod.log
sudo touch /usr/local/mongodb/mongodb.conf

sudo chown `whoami` /usr/local/mongodb/data
sudo chown `whoami` /usr/local/mongodb/mongod.log   # 设置权限
sudo chown `whoami` /usr/local/mongodb/mongodb.conf   # 设置权限
```

**修改配置文件**

通过参数启动的方法较为麻烦，本文不赘述，仅提供通过配置文件启动的方法。

```
sudo vim /usr/local/mongodb/mongodb.conf
```

在配置文件中加入如下代码：

```
dbpath=/usr/local/mongodb/data
logpath=/usr/local/mongodb/mongod.log #以守护程序的方式启用，即在后台运行
fork = true 
```

保存后退出。

```
按下esc

:wq
```

**启动和关闭**

进入到安装目录下

```
cd /usr/local/mongodb/bin

//安全组:27017
```

**启动**

```
//服务端
./mongod -f /usr/local/mongodb/mongodb.conf

//客户端
./mongo
```

**本地数据库copy到远程库**

```
//本地出库:需要先导出本地的数据 -> json
./mongoexport -h 127.0.0.1 -d 库名 -c 集合名 -o 输出路径/xx.json

//上传: json -> finalShell上传到远端磁盘

//远端入库:  json -> 导入数据库
./mongoimport -d 远端库 -c 集合 --file 服务器json路径/xx.json
```

**mongodb傻瓜安装**

```
#安装mongodb centos<8.x 傻瓜安装
sudo yum install mongodb-server mongodb -y      

#创建数据库目录和日志目录
mkdir -p /data/mongodb
mkdir -p /data/logs/mongodb

#启动数据库文件存储位置
mongod --fork --dbpath /data/mongodb --logpath /data/logs/mongodb/nodeapp.log

#创建远程数据库（与本地操作一样）可选 
use 库
db.集合.save
```



### 问题汇总

**mac系统下，finalSheel链接阿里云服务器就把服务器堵死**

- 升级服务器内存 
- 阿里自带远程连接拖拽上传，可以拖拽多个文件至文件树中对应目录，不可以拖拽目录，需要手动创建目录）
- 配置finalSheel***

**关闭finalShell ,服务断了**

```
//安装pm2, nodejs服务器管理器
npm i pm2 -g

//如果卡
npm config set registry http://registry.npm.taobao.org

//启动服务器:
pm2 start ./bin/www

//浏览器访问项目即可
http://公网IP:node端口

//如果想停掉服务器: 
pm2 stop all
```

> [pm2使用](https://blog.csdn.net/chengxuyuanyonghu/article/details/74910875)

**可以有多个app？使用一个实例？**

分析：app指向不同端口就好了 	解决：app指向不同端口，安全组里添加多个端口，pm2 进入到对应服务器位置，逐个启动，如果端口重复，先启用的应用会占用端口

**不想要端口可以？**

分析：使用http协议默认的80端口,使用https协议默认端口443 	解决： 修改本地的端口号指向80,安全组添加80   

**不使用ip，使用网址?**

分析： 是一个IP和域名关联的过程

解决： 必须得用于一个已经备过案的域名(未备案不可使用一级域名和省略端口)，[域名购买地址](https://promotion.aliyun.com/ntms/act/domainbrand.html?spm=5176.8112568.483655.2.67ae9ed5edEDHe)

备案: 	特惠专区-》域名与网站->域名新手多重礼（实名，备案15工作日）

域名解析：域名-》解析-》添加记录->记录值(ip)

```
www：解析后的域名为www.aliyun.com。
@：直接解析主域名 aliyun.com。
二级域名：如：abc.aliyun.com，填写abc。
```

**不备案有什么影响**

小程序上线时不能部署,但不影响学习 	没有域名不便于宣传，解决：做成二维码 	无法使用https安全协议访问

**启用https访问**

流程：SSL证书->获取https免费证书->配置(node服务器使用https模块响应)

[获取https免费证书](https://yq.aliyun.com/articles/221596?spm=5176.10695662.1996646101.searchclickresult.1dec5d98Oy3WNE)

下载： 证书通过后->下载 other类型的 xx.key/xx.pem 下载到-> bin

配置node：

```
var https = require('https');
const fs = require('fs');
const port=443;		
app.set('port', port);

const options = {
  key: fs.readFileSync('./bin/1826016_uncle9.top.key'),//指向key
  cert: fs.readFileSync('./bin/1826016_uncle9.top.pem'),
}; 
var server = https.createServer(options,app);//查看nodejs.cn>https模块|或已完成的node项目
```

安全组规则：添加443 ，443是https的默认端口

**在阿里云配置apache+mysql+php**

[参考资料](https://blog.csdn.net/chwshuang/article/details/52443274)

**历史记录模式路由，强刷找不到**

现象：客户端路由服务找/todos/42时，服务器会找/todos/42的接口（没有这个子服务接口) 	解决：服务器路由优先，找不到时，返回vue的前端index.html，交还给客户端路由

```
// node项目 app.js

app.use(function(err, req, res, next) {
	...
  
  if(req.url.includes('/api')){//webApi接口错误
    res.send({
      err:1,
      msg:'不存在的接口名'
    })
  }else if(req.url.includes('/admin')){//服务端Api接口错误
    res.render('error');
  }else{//交还给客户端判断
    res.sendFile(path.join(__dirname, 'public','template', 'index.html'));
  }

});
```

> 也可以通过中间件  connect-history-api-fallback 实现



### nginx做代理

#### 安装

##### 操作环境说明

- 操作系统：阿里云云服务器ECS CentOS 
- 远程连接工具：finalShell
- 阿里云的安全组规则要添加你要使用的ip地址段

##### 开始

- finalSheel 链接远端服务器
- 执行命令`yum info nginx` 查看资源库中可以安装的nginx软件包信息
- 执行命令`yum install nginx -y` 安装nginx
- 执行命令`nginx -v`查看nginx安装版本确认安装成功
- 执行命令`whereis nginx`查找出nginx相关目录

> **/etc**：这个目录用来存放所有的系统管理所需要的配置文件和子目录
>
> **/etc/nginx**：这里有nginx.conf配置文件
>
> **/usr**：这个目录用来存放用户很多应用程序和文件
>
> **/usr/share/nginx**：这里有html和modules

#### nginx命令

查看帮助 `nginx -h` 

> -v:	显示版本并退出
>
> -V:	显示版本和配置选项，然后退出
>
> -t:	测试配置和退出
>
> -T:	测试配置，转储并退出
>
> -q:	在配置测试期间禁止显示非错误消息
>
> -s 信号：向主进程发送信号：停止、退出、重新打开、重新加载
>
> -p prefix：设置前缀路径（默认值为：usr/share/nginx/）
>
> -c 文件名：设置配置文件（默认为/etc/nginx/nginx.conf）
>
> -g 指令：从配置文件中设置全局指令

#### 启动 

执行命令`nginx`

> linux 命令成功后无提示

停止 `nginx -s stop`

重载`nginx -s reload` 配置代理后需要用到

查看状态 `systemctl status nginx`

#### 测试 

http://ip:80 ,可以看到（nginx配置文件中默认80端口）,nginx默认端口是80

#### 服务端配置与代理

丢在服务端的代理都是反向代理

```
vi /etc/nginx/nginx.conf  回车

i  修改    esc 退出修改模式

:wq  保存退出
:q  退出不保存

http {
		
		# 配置多台服务，复制一份server就好
    server {
        listen       nginx端口 default_server;
        listen       [::]:nginx端口 default_server;
	    	
	    	# 前端静态工程文件位置
	    	root 	     /usr/local/react;
	    	
				# 处理代理转发到服务端1
        location ~ /api/ {
          proxy_pass  http://转发ip:9001;
        }
				
				# 处理代理2
        location ~ /mock/ {
        	proxy_pass  http://转发域名:3333;
        }
				
				# 处理 历史记录模式路由404后返回主页面
        location / {
          try_files $uri $uri/ /index.html;
        }

    }
}
```



## 组件通讯

### **父子**

```
//单项数据流
<Child 属性={数据}/>
props.属性
```

### **子父**

```
//反向数据流
<Child 属性={父函数}/>
props.属性(子数据)
```

### **中间人**

```
<ChildA 属性=父方法/>
<ChildB 属性=接受的a数据/>
```

> 所有 React 组件都必须是纯函数，并禁止修改其自身 props

**类型检查**

```
import propsTypes from 'prop-types'

//默认值:		
组件.defaultProps={propName:值,xx:oo}

//类型约定:
组件.propTypes={propsName:propsTypes库.类型名,xx:类型}
//propsTypes库.array/bool/func/number/object/string

//必传参数
propName: propsTypes库.类型名.isRequired
```

> 不要修改自身的 props



### **context组件上下文** 

```
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Xxx />
    </ThemeContext.Provider>
  );
}

function Xxx(props) {
  return (
    <div>
      <Ooo />
    </div>
  );
}

function Ooo() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      ...
    </button>
  );
}
```



### 订阅发布

pub/sub模式、 消息通知、观察者模式、`yarn add pubsub-js -D`

- 订阅:	token=pubsub.subscribe('消息名',回调函数('消息名',数据))
- 发布：  pubsub.publish('消息名',数据)
- 清除指定订阅：pubsub.unsubscribe(token|'消息名'|回调函数名);
- 清除所有：pubsub.unsubscribeAll()

### **路由**

```
import { useParams, useSearchParams, useLocation } from "react-router-dom";
function 组件(){
  const params = useParams(); //获取动态路由的值
	const [searchParams, setSearchParams] = useSearchParams(); // 获取查询字符串的值
	const location = useLocation(); // 获取上一个页面传递进来的 state 参数
  searchParams.get('search的key')
  location.pathname/hash/key/state
  params.动态路由名变量
}
```

### web存储

localStrage、cookie、indexDB

### 状态管理

后面学习



## 高阶组件 HOC

又叫Higher-Order Components，是一个函数能够接受一个组件并返回一个新的组件。普通组件是将props转化成UI，然而高阶组件将一个组价转化成另外一个组件

```
//HOC
import Context from "./Context";
import { useContext } from "react";

const connect = (WrappedComponent) => {
  ..
  return (props) => {
    const context = useContext(Context);
    return <WrappedComponent {...context} {...props} />;
  };
};

//普通组件
const C = props => (
  <div class="user-container">
    <p>My name is {props.XX}!</p>
  </div>
);
export default connect(C);//经过高阶组件包装
```



## 状态管理

- 思想：flux
- 实现：vuex/pinia  redux

### [redux](https://cn.redux.js.org/)

可以同一个地方查询状态，改变状态，传播状态，用在中大项目,组件状态需要共享，在任何地方都可以拿到，组件需要改变全局状态，一个组件需要改变另外一个组件的状态，创建store实例，其他组件导入并共享这个store实例

**redux成员**

| 成员            | 作用                      | 类型 |
| --------------- | ------------------------- | ---- |
| createStore     | 创建store实例             | 函数 |
| combineReducers | 合并多个reducer           | 函数 |
| applyMiddleware | 安装中间件，改装增强redux | 函数 |
| compose         | 增强调试开发环境          | 函数 |

**store成员**

| 成员           | 作用                                           | 类型 |
| -------------- | ---------------------------------------------- | ---- |
| subscribe      | 订阅state变化                                  | 函数 |
| dispatch       | 发送action 给 reducer                          | 函数 |
| getState       | 获取一次state的值                              | 函数 |
| replaceReducer | 一般在 Webpack Code-Splitting 按需加载的时候用 | 函数 |

**数据流动**

| component（views）  | action           | reducer                                 | state    | component（views） |
| ------------------- | ---------------- | --------------------------------------- | -------- | ------------------ |
|                     | 转发的动作{type} | 同步业务处理逻辑, 返回copy更新后的state | 状态收集 | 展示state          |
| store.dispatch---》 | --------》       |                                         | 《--     | 《--subscribe      |
|                     |                  |                                         | 《--     | 《--getState       |

![img](https://pic1.zhimg.com/80/v2-73ae23be7e37d70c5e01245f5ef7e524_1440w.jpg)

**操作流程**

```
import {createStore} from 'redux'

//生成默认state 
let defaultState={}

//创建reducer
const reducer = (state=defaultState,action)=>{
  let {type,payload}=action    
  swtich type
    case XXXXX
    更新copy后的state  Object.assign(空,老,新)
  default:
    return state
}

//创建store对象
store = createStore(reducer,state)
export default store;

//组件内部更新，状态获取state
import store from '...'
store.dispatch({type:xxx,payload:ooo}) //发送action给reducer  type是必传参数
store.subscribe(回调)  //订阅 state  更新state时触发
store.getState() //获取状态，执行一次
```

#### redux-thunk

提取并定义 **Action Creators**

```
let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

export const checkNav = bl => ({
  type: "CHECK_NAV",
  bl
});

//处理异步
const updateHome = (collectionName) => dispatch => { //dispatch接受函数 需要thunk中间件
  return axios.get({api:collectionName}).then(
    res=> {
      dispatch({type:'UPDATE_HOME',payload:res.data.data});
      return res//有回执
    }
  )
};

//安装中间件改装 redux  目标：dispatch可以接受一个函数
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let store = createStore(rootReducer,rootState,applyMiddleware(thunk));

//组件内部
dispatch(checkNav(!bNav))
dispatch(addTodo('呵呵哒'))
```

**combineReducers**提取reducer

当应用逻辑逐渐复杂的时候，我们就要考虑将巨大的 Reducer 函数拆分成一个个独立的单元，这在算法中被称为 ”分而治之“，Reducers 在 Redux 中实际上是用来处理 Store 中存储的 State 中的某个部分，一个 Reducer 和 State 对象树中的某个属性一一对应，一个 Reducer 负责处理 State 中对应的那个属性

```
// src/plugins/redux
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import todos from '../store/reducers/todos'
import bNav from '../store/reducers/nav'
let rootReducer=combineReducers({bNav,todos});
let store = createStore(rootReducer,applyMiddleware(thunk));
export default store;

// src/store/reducers/todos
let initState=[]

const todos = (todos=initState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    }

    case "REMOVE_TODO": {
      const { id } = action;
      todos.map((item,index) => item.id ===id && todos.splice(index, 1));
      return [...todos]
    }

    case "CHECK_TODO": {
      const { id } = action;
      todos.map((item,index) => item.id ===id && (todos[index].completed=!todos[index].completed));
      return [...todos]
    }

    default:
      return todos;
  }
};

export default todos;

// src/store/reducers/bNav
const bNav = (bNav=false, action) => {
  switch (action.type) {
    case "CHECK_NAV": {
      const { bl } = action;
      return bl
    }

    default:
      return bNav;
  }
};

export default bNav;
```

> 可以写在主入口文件 订阅react-dom的更新

```
let root = ReactDom.createRoot(document.getElementById("root"));

const render = () => {
  root.render(<BaseLayouts />);
};
store.subscribe(render);
render();
```

### **redux-devtools**

```
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
//compose 增强器

import thunk from 'redux-thunk'

let rootReducer = combineReducers({banner, column, detail, follow, home, user});

//使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux

export default store;
```



### react-redux

基于redux思想,专门为react使用redux而生，把组件拆分为容器组件, UI组件,所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它

#### UI组件

- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态
- 所有数据都由参数（props）提供
- 不使用任何 Redux 的 API

#### 容器组件

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

#### 最佳实现

```
//主入口
import {Provider} from react-redux
import store from './plugins/redux'
<Provider store={redux打造的store}>
  <根组件/>
</Provider>
  
  
        
//Creators改装  把异步actins内部有关，api请求的通用部分封装出来的一个过程

//api
const get = ({api,_page=1,_limit=10,id=null}) => (
  axios({
    url: id ? `/mock/${api}/${id}` : `/mock/${api}`,
    params: {_page,_limit}
  })
);

//actionsCreators
const clearHome={type: 'CLEAR_HOME'};//dispatch接受对象 默认

const updateHome = () => dispatch => { //dispatch接受函数 需要thunk中间件
  return get({api:'home'}).then(
    res=> {
      dispatch({type:'UPDATE_HOME',payload:res.data.data});
      return res//有回执
    }
  )
};

const updateBANNER=()=>async dispatch => {
  let res = await get({api:'banner'});
  dispatch({type:'UPDATE_BANNER',payload:res.data.data})
};

export {clearHome,updateHome,updateBANNER}


//UI组件 
const Home = ({home, banner,dispatch}) => {
  useEffect(() => {
    dispatch(clearHome);
    dispatch(updateHome()).then(data => 收取回执)
    dispatch(updateBANNER())
  }, []);
  
  return (
    <div className="Home">

      <Swiper data={banner}/>
      {
        home.map(item => (
          <Cell key={item.id} item={item} dataName="home"/>
        ))
      }

    </div>
  )
};

//容器组件 dispatch方法 默认传递给UI组件
export default connect(
  state=>({banner:state.banner, home:state.home})
)(Home)
```

### redux-saga

redux管理的是同步公共状态业务，**异步**可以交给saga，saga它的目标是让**副作用**管理更容易，执行更高效，测试更简单，在处理故障时更容易。

saga是一个 redux 中间件，可以监听到dispatch发出的action，处理完异步业务后，再把结果发送给reducer处理。内部也能访问完整或指定的state

**generator**

redux-saga 使用了 ES6 的 Generator 功能，js的`Generator` 几乎就是 Python 中 `Generator` 的翻版，是管理异步代码的过渡方案（异步代码同步写，避免回调地狱），便于测试

|      | 函数 | Promise | generator |
| ---- | ---- | ------- | --------- |
| 暂停 | ×    | ×       | √         |

**vs thunk**

|      | thunk                                                        | saga                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 原理 | `将原本的action对象,变成可执行函数`后交给reducer处理         | `并行生成了reducer`处理action                                |
| 场景 | 简单的UI，其中有简单的数据流从服务器响应到react组件          | 对于更复杂的异步交互(需要在react组件之间进行协调)            |
| 优点 | 简单易用，上手快                                             | 集中处理了所有的异步操作，方便异步接口的测试，内部提供实现非阻塞异步调用api, 并且同时可以实现非阻塞调用下的事件监听，流程是可以控制的, 可以随时取消 |
| 缺点 | action 的形式不统一，异步操作太为分散, 分散在了各个 action 中 | 太复杂, 学习成本较高                                         |

```
store/index.js
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

//引入reducer
import list from "./reducers/list";
...

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

//合并多个reducer模块，为一个根据reducer
let reducer = combineReducers({ list, follow });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga); //运行装载saga业务

//暴露出去
export default store;
sagas/index.js
import { all } from "redux-saga/effects";
import watchXxx from "./list";//saga片段

//开启所有监听
export default function* rootSaga() {
  yield all([watchXxx1(), watchXxx2()]);
}
sagas/Xxx.js
import {
  put,
  takeEvery,
  takeLatest,
  throttle,
  delay,
  select,
} from "redux-saga/effects";

import { ADDED, ADD_ASYNC } from "../actions/actionTypes";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


function* fetchData(action) {
  
  const state = yield select(); //获取到 state
 
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield delay(1000); //axios umi-request
		yield put({ type: ADDED, payload: action.payload }); //dispatch=>reducer
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    console.log("add error", e);
  }
}

function* watchXxx() {
  //监听多个action
  yield takeEvery('actiontype', fetchData); //并发
  // yield takeLatest(ADD_ASYNC, fetchData); //防抖 触发最后一次
  // yield throttle(1000, ADD_ASYNC, fetchData); //节流 触发前两次
}

export default watchXxx;
actions/xxx.js
//同步action ==>reducer
export const add = (payload) => ({ type: ADDED, payload });

//这个action 同步返回值，被saga监听
export const addAsync = (payload) => ({ type: ADD_ASYNC, payload });
```



### redux-toolkit

### mobx

### dva

整合redux+saga

**状态管理持久化**

思路1：登录、注销、强刷同步redux|localStorage，拦截器|路由守卫只读redux

## V16

类组件内部，是不可以使用任何hooks的

### 类

es6

```
class Person{
  constructor(name){
    this.name=name||'alex'  //实例属性创建，赋值
  }
  show(){//实例方法
    console.log('show',this.name);
  }
}
Person.VERSION='1.2.3';//静态属性|类属性

//子类
class Worker extends Person{
  constructor(name,job){
    super(name);//类如果有继承 super就要出现
    this.job=job||'卖烧饼';
  }
  show2(){
    console.log(this.job,this.name);
  }
}
```

es6+

```
//es7 类

class Person{
  name='alex'; //实例属性  放在类内部,设置默认值
  age; //没有默认值的实例属性
  static VER='1.11.1';  //类属性 静态属性
  constructor(name,age){
    this.name=name;
    this.age=age||20; //构造器里面可以初始化实例属性
  }

  show(){//方法
    console.log(this.name,this.age,this.show);//访问实例属性
  }

  static show2(){//静态|类 方法定义
    console.log(this.name)
  }
}

class Workerr321 extends Person123{

  job=’卖活鱼‘; //实例属性

  static SUM=100;

  constructor(name,age,job){
    super(name,age);//调用父类 影响父类传入到当前的实例属性
    this.job=job||'卖闲鱼'; //构造器初始化
    // this.address='外滩18号';//实例属性，要实现声明
  }

  show(){
    console.log(this.job);
  }

}
```



### 组件

react组件：`类式`组件和`函数式`组件和`api式`组件

**创建组件**

```
//es6
import React from 'react';

class 组件名 extends React.Component{
  
  //每一个组件都会从Component基类上继承
  //实例属性props,state,refs,context， 
  //实例方法render forceUpdate setState getChildContext
  //静态属性 defaultProps propTypes childContextTypes contextTypes

  state={} 实例属性 组件状态 响应式
  msg=12;//普通实例属性，不是响应式

  static msg;  类属性

  constrctor(props){ //需要在构造时，修改组件的状态时，constrctor才会出现
    super(props) //类如果有继承 super就要出现
      需要在组件构造器内处理传递过来的props时，props参数就出现

    this.state={ // 本地状态

    }
  }
  render(){
    return jsx|null   //jsx~~要渲染   null不渲染
  }
  方法2 = ()=>{} 自定义的方法
  static 方法2(){}
}
```

**使用组件**

```
//声明式
<App propsname=value />
<Header></Header>
```



### props

**传递属性**

```
<组件名 属性名=值 属性名2=值2 .. />
```

> propName="字符"  propName={js数据类型}

**使用属性**

```
{this.props.属性名}
```

> this 代表的是组件本身

### 事件

- 类组件，事件函数内部this会丢失

事件绑定

```
<JSX元素 onClick={this.实例方法|函数体}
```

修正this

```
实例方法=()=>{箭头函数定义方法}  √√
```

传参

```
onClick={this.clickHandler2.bind(this, 12)}
onClick={(ev)=>this.clickHandler2(12,ev)}
```



### 组件状态

state|数据|私有状态|本地状态|初始

**定义**

```
//es6+ 
//实例属性: state    
class App{
  state:{}
}
```

**获取**

```
//渲染
{this.state.xx}
//获取
this.state.xx
```

**修改状态**

```
//修改
this.setState(对象)  //浅合并state
```

> setState的结果是异步的

### ref

需要抓取dom元素与第三方 DOM 库集成，触发命令式动画，管理焦点，文本选择或媒体播放

**用法**

refs用法 有4种

```
//1、 string refs
<jsx元素 ref="名字"...
this.refs.名字

//2. 实例化
this.firstRef = React.createRef() //发生在类内 | 构造器
<jsx ref={this.firstRef} />
  
this.firstRef 访问 -》 {current:dom}
  
// 3. callback refs  回调 √
<jsx ref={el => this.定义一个实例属性 = el}
this.定义一个实例属性 //后期用作访问元素本身
```

### 生命周期

实例化 ->  更新期  -> 销毁时

### 新版

[脑图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)，挂载前、更新前、props更新前统一用getDerivedStateFromProps代替，并添加了返回快照钩子getSnapshotBeforeUpdate

> 返回快照：发生在render完了，但还没有去编译真实dom之前，返回dom的快照

**实例化**

1. 渲染前 static **getDerivedStateFromProps**(nextProps,nextState)  {} 

   > 无法访问this nextProps,nextState是更新后的 必须返回 一个对象，用来更新state 或者 返回 null不更新 必须要初始化state 场景：state 的值在任何时候都取决于 props时

2. 渲染中 **render**

   > 必须return jsx|string|number|null 不会直接与浏览器交互:不要操作DOM|和修改数据

3. 挂载后 **componentDidMount**

   使用ref，使用setState，读取数据

**更新期**

1. 渲染前 static **getDerivedStateFromProps**(nextProps, nextState)

2. 是否渲染 **shouldComponentUpdate**(nextProps, nextState)

   > 是否更新，必须返回true/false 首次渲染或使用 forceUpdate() 时不会调用该方法 nextProps,nextState更新后的,this.props,this.state 更新前的 return false 只阻止当前组件渲染

3. 渲染中 **render**

4. dom快照 **getSnapshotBeforeUpdate**(prevProps, prevState)

   > 组件能在发生更改之前从 DOM 中捕获一些信息（dom渲染前的状态) 返回的 值|null 会给 componentDidUpdate prevProps, prevState 更新前 this.props,this.state更新后
   >
   > [事例](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

5. 更新后 **componentDidUpdate**(prevProps, prevState,snopshot)

   > this.props.更新后的 snopshot 是 getSnapshotBeforeUpdate构造的返回值
   >
   > 抓取到的是渲染后的dom状态，通过snopshot拿到dom渲染前的状态

**销毁时**

即将卸载 **componentWillUnmount**
