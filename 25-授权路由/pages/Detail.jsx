import { useParams, useSearchParams, useLocation } from "react-router-dom";
const Detail = (props) => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log("params", params); //里面是动态id
  console.log("searchParams", searchParams.get("a"), searchParams.get("b")); //查询字符串的键值
  console.log("location", location);
  return (
    <>
      <h3>Detail</h3>
    </>
  );
};
export default Detail;
