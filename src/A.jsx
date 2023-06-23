import PropTypes from "prop-types";
const A = ({ num }) => {
  return (
    <>
      <h3>A</h3>
      <div>{num + 10}</div>
    </>
  );
};

//默认值: 组件.defaultProps
A.defaultProps = {
  num: 10,
};

//类型约定: 组件.propTypes
A.propTypes = {
  // 属性名: 第三方类型库来约定
  num: PropTypes.number,
};
export default A;
