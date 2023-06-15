import "./index.css";
const DashBoard = (props) => {
  return (
    <>
      <div>DashBoard</div>
      {new Array(0).fill(0).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};
export default DashBoard;
