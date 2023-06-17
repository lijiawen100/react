import { useNavigate } from "react-router-dom";
import "./index.css";
import { Card, Button, Table, Switch, Space, Popconfirm } from "antd";
import { useCallback, useEffect, useState } from "react";
import {
  delProductOne,
  findProductList,
  modifyProductOne,
} from "../../../../services/product";
import { serverBaseUrl } from "../../../../plugins/uni-request";

const ProductList = (props) => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState();

  const [pageSize, setPageSize] = useState(3); //一页多少条

  const [total, setTotal] = useState(0); //总条数

  // 上下架
  const modifySale = async (id, checked) => {
    await modifyProductOne(id, { onSale: checked });
  };

  // 删除
  const confirm = async (id, index) => {
    await delProductOne(id);
    // 更新视图
    let temArr = [...dataSource];
    temArr.splice(index, 1);
    setDataSource(temArr);
  };

  const columns = [
    {
      title: "序号",
      render: (text, record, index) => index + 1,
    },
    {
      title: "主图",
      render: (text, record, index) =>
        record.coverImg ? (
          <img
            alt="图碎了"
            style={{ width: 30 }}
            src={serverBaseUrl + record.coverImg}
          />
        ) : (
          "暂无主图"
        ),
    },
    {
      title: "商品名称",
      dataIndex: "name",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
    {
      title: "上下架状态",
      render: (_, record, index) =>
        record.onSale ? (
          <Switch
            defaultChecked
            onChange={(checked) => modifySale(record._id, checked)}
          />
        ) : (
          <Switch onChange={(checked) => modifySale(record._id, checked)} />
        ),
    },
    {
      title: "操作",
      render: (_, record, index) => (
        <Space>
          <Button onClick={() => navigate("/admin/product-edit/" + record._id)}>
            修改
          </Button>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => confirm(record._id, index)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const loadData = useCallback(async (page, pageSize) => {
    const res = await findProductList(page, pageSize);
    console.log(1, res);
    setTotal(res.totalCount);
    setDataSource(res.products);
  }, []);

  useEffect(() => {
    loadData(1, pageSize);
  }, [loadData, pageSize]);

  return (
    <Card
      title="商品列表"
      bordered={false}
      extra={
        <Button type="primary" onClick={() => navigate("/admin/product-edit")}>
          新增
        </Button>
      }
      style={{
        boxShadow: "none",
      }}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record._id}
        pagination={{ pageSize, total, onChange: loadData }}
      />
      ;
    </Card>
  );
};
export default ProductList;
