import PropTypes from "prop-types";

const C = ({ title, list }) => {
  return (
    <>
      <h3>C</h3>
    </>
  );
};
C.propTypes = {
  // title: PropTypes.string,
  // list: PropTypes.array,//数组
  list: PropTypes.arrayOf(PropTypes.string), //数组 && 里面的内容是字符
  isActive: PropTypes.bool.isRequired, //必传
  // detail:PropTypes.object//对象
  detail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    des: PropTypes.string,
  }),
  // icon: PropTypes.node, //jsx类型(组件,jsx,number,string)
  icon: PropTypes.element, //(组件)

  title: function (props, propName, componentName) {
    // props：所有属性,propName: title, compoentName: C
    // console.log(props, propName, componentName);
    if (typeof props[propName] !== "string" || props[propName].length > 10) {
      return new Error(
        "错误的属性类型 `" +
          propName +
          "` 被用到了" +
          " `" +
          componentName +
          "`. 验证失败."
      );
    }
  },
};
export default C;
