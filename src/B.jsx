import { Button, DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const B = (props) => {
  return (
    <>
      <div>B</div>
      <Button type="primary">Button</Button>

      <DatePicker onChange={onChange} />
    </>
  );
};
export default B;
