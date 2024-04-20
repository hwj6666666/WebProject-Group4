//这个组件是用户页面的侧边栏，用来展示用户页面的选项

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export const MySider = () => {
	const sort = [
		{ name: "我关注的话题", id: 0, key: '1' },
		{ name: "我创建的话题", id: 1, key: '2' },
		{ name: "我创建的对象", id: 2, key: '3' },
		{ name: "我的评论", id: 3, key: '4' },
	];

	return (
		<Sider
			style={{ marginTop: "7%", marginLeft: "3%" }}
			className="drop-shadow-md"
		>
			<Menu
				className="bg-white"
				mode="vertical"
				defaultSelectedKeys={["1"]} //设置默认选中第一个菜单栏
				style={{ borderRadius: "14px", textAlign: "center" }}
			>
				{sort.map((item) => (
					<Menu.Item key={item.key}> {item.name}</Menu.Item>
				))}
			</Menu>
		</Sider>
	);
};