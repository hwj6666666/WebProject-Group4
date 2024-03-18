//这个组件是话题页面的侧边栏，用来展示话题的分类

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export const MySider = () => {
  const sort = [
    { name: "全部", id: 0, key: '1' },
    { name: "动植物", id: 1, key: '2' },
    { name: "美食", id: 2, key: '3' },
    { name: "游戏", id: 3, key: '4' },
    { name: "科技", id: 4, key: '5' },
    { name: "影视", id: 5, key: '6' },
    { name: "知识", id: 6, key: '7' },
    { name: "汽车", id: 7, key: '8' },
    { name: "时尚", id: 8, key: '9' },
    { name: "音乐", id: 9, key: '10' },
    { name: "运动", id: 10, key: '11' },
  ];

  return (
    <Sider
      style={{ marginTop: "7%", marginLeft: "3%", borderRadius: "14px" }}
    >
      <Menu
        className="bg-green-100"
        mode="vertical"
        key={sort.key}
        defaultSelectedKeys={['1']} 
        style={{ borderRadius: "14px" }}
      >
        {sort.map((item) => (
          <Menu.Item key={item.key}> {item.name}</Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

//
