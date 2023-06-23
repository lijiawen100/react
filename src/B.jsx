import PropTypes from "prop-types";
import { useEffect } from "react";

const B = ({ show }) => {
  useEffect(() => show(), [show]);
  return (
    <>
      <h3>B</h3>
    </>
  );
};

B.defaultProps = {
  show: () => {},
};
B.propTypes = {
  show: PropTypes.func,
};
export default B;
