import { Link } from "react-router-dom";

const A = (props) => {
  return (
    <>
      <h3>A</h3>
      <ul>
        <li>
          <Link to="/goods/a/1">商品A类列表item1</Link>
        </li>
        <li>
          <Link to="/goods/a/2?a=1&b=2">商品A类列表item2</Link>
        </li>
        <li>
          <Link to="./3?a=11&b=22">商品A类列表item3</Link>
        </li>
        <li>
          <Link to={{ pathname: "./4", search: "a=111&b=333" }}>
            商品A类列表item4
          </Link>
        </li>
        <li>
          <Link to="./5" state={{ a: 1111, b: 3333 }}>
            商品A类列表item5
          </Link>
        </li>
      </ul>
    </>
  );
};
export default A;
