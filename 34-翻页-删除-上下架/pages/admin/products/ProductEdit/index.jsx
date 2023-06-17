import { useParams } from "react-router-dom";
import "./index.css";
import { Card, Button, Checkbox, Form, Input, InputNumber } from "antd";
const ProductEdit = (props) => {
  const params = useParams();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Card
      title={params.id ? "编辑" : "新增"}
      bordered={false}
      style={{ boxShadow: "none" }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="商品名称"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="价格"
          name="price"
          rules={[
            {
              required: true,
              max: 999,
              min: 100,
              type: "number",
            },
            {
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  console.log(1, rule, value);
                  if (value % 2 !== 0) {
                    reject("我喜欢偶数价格");
                  } else {
                    resolve();
                  }
                });
              },
            },
            ({ getFieldValue }) => ({
              validator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  console.log(2, rule, value);
                  if (
                    !getFieldValue("name") ||
                    !getFieldValue("name").includes("哈")
                  ) {
                    reject("商品必须是开心的商品");
                  } else {
                    resolve();
                  }
                });
              },
            }),
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="onSale" label="上下架" valuePropName="checked">
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default ProductEdit;
