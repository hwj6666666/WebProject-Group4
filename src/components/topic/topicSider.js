//这个组件是话题页面的侧边栏，用来展示话题的分类

import { changeTopicKey } from "@/store/modules/topickey";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDispatch} from "react-redux";

export const MySider = () => {
  const sort = [
    { name: "全部", id: 0, key: '0' },
    { name: "动植物", id: 1, key: '1' },
    { name: "美食", id: 2, key: '2' },
    { name: "游戏", id: 3, key: '3' },
    { name: "科技", id: 4, key: '4' },
    { name: "影视", id: 5, key: '5' },
    { name: "知识", id: 6, key: '6' },
    { name: "汽车", id: 7, key: '7' },
    { name: "时尚", id: 8, key: '8' },
    { name: "音乐", id: 9, key: '9' },
    { name: "运动", id: 10, key: '10' },
    { name: "人文", id: 11, key: '11' },
    { name: "其他", id: 12, key: '12' },
  ];
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState('0');
  const handleselect =({key})=>{
    setSelectedKey(key)
    dispatch(changeTopicKey(key))
  }
  return (
    <Sider className="ml-20 mt-20 mr-20">
      <Menu
        className="bg-white"
        mode="vertical"
        defaultSelectedKeys={["0"]}
        selectedKeys={[selectedKey]}
        onSelect={handleselect}
        style={{ borderRadius: "14px" }}
      >
        {sort.map((item) => (
          <Menu.Item
            key={item.key}
            style={
              item.key === selectedKey ? { backgroundColor: "#F4F5F7" } : {}
            }
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}