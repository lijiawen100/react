import { Button, Card, Avatar, List } from "antd";
import "./index.css";
import { useState } from "react";
import PubSub from "pubsub-js";
const Notices = (props) => {
  const [data, setData] = useState([
    {
      title: "Ant Design Title 1",
      read: false,
    },
    {
      title: "Ant Design Title 2",
      read: false,
    },
    {
      title: "Ant Design Title 3",
      read: true,
    },
    {
      title: "Ant Design Title 4",
      read: true,
    },
  ]);

  const [AllRead, setAllRead] = useState(false);

  //修改已读状态
  const checkNotices = (index) => {
    const tmpArr = [...data];
    if (index === -1) {
      // 设置全部已读
      tmpArr.map((item, index) =>
        tmpArr.splice(index, 1, { ...item, read: true })
      );

      setAllRead(true);
    } else {
      tmpArr.splice(index, 1, { ...tmpArr[index], read: true });
      // tmpArr[index].read = true;
    }
    console.log(tmpArr);
    setData(tmpArr);

    //得到未读数量
    let noReadCount = tmpArr.length;
    tmpArr.forEach((item) => item.read && noReadCount--);
    noReadCount === 0 && setAllRead(true); //未读数量为0，修改全部已读状态

    // 发布未读数量
    PubSub.publish("noticesMessage", noReadCount);
  };

  return (
    <Card
      title="通知中心"
      bordered={false}
      style={{ boxShadow: "none" }}
      extra={
        !AllRead && <Button onClick={() => checkNotices(-1)}>全部已读</Button>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            extra={
              !item.read && (
                <Button onClick={() => checkNotices(index)}>已读</Button>
              )
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
export default Notices;
