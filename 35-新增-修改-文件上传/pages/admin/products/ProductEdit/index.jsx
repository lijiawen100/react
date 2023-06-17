import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { Card, Button, Checkbox, Form, Input, InputNumber } from "antd";
import {
  addProduct,
  findProductDetail,
  modifyProductOne,
} from "../../../../services/product";
import { useEffect } from "react";

import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { useState } from "react";
import { serverBaseUrl } from "../../../../plugins/uni-request";

//转换base64
/* const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}; */

//限定图片格式和大小
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("你只能上传jpg或者png图片");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片必须控制在2M内");
  }
  return isJpgOrPng && isLt2M;
};

const ProductEdit = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(); //存的是服务器返回的图片地址

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true); //显示loading
      return;
    }
    if (info.file.status === "done") {
      // 转换成base64
      // getBase64(info.file.originFileObj, (url) => {
      setLoading(false); //关闭loading
      setImageUrl(info.file.response.info); //写入响应式数据
      // });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // 提交
  const onFinish = async (values) => {
    console.log("Success:", values);
    if (params.id) {
      await modifyProductOne(params.id, { ...values, coverImg: imageUrl });
    } else {
      await addProduct({ ...values, coverImg: imageUrl });
    }
    navigate("/admin/product-list");
  };

  //进入获取当前要修改的商品，写入表单
  useEffect(() => {
    if (params.id) {
      findProductDetail(params.id).then((res) => {
        form.setFieldsValue(res);
        setImageUrl(res.coverImg);
      });
    }
  }, [form, params.id]);

  return (
    <Card
      title={params.id ? "编辑" : "新增"}
      bordered={false}
      style={{ boxShadow: "none" }}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
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
                  // console.log(1, rule, value);
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
                  // console.log(2, rule, value);
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

        <Form.Item
          name="onSale"
          label="上下架"
          valuePropName="checked"
          initialValue={true}
        >
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item label="主图">
          <Upload
            name="file" //服务器接口要接受的参数
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="http://101.132.109.42:3009/api/v1/common/file_upload" //接口地址
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={serverBaseUrl + imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
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
