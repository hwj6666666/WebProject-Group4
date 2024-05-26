//这个组件是话题页面的侧边栏，用来展示话题的分类

import { fetchClass } from "@/store/modules/class";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { fetchTopic } from "@/store/modules/topic";
import { useDispatch, useSelector } from "react-redux";

export const MySider = () => {

	const dispatch = useDispatch();

	const [selectedKey, setSelectedKey] = useState("0");

	const handleselect = ({ key }) => {
		setSelectedKey(key)
		// console.log(typeof (key))
		dispatch(fetchTopic(key));
	}

	const sort = useSelector(state => state.class).class
	// console.log(sort)
	useEffect(() => {
		// console.log(sort);
		dispatch(fetchTopic("0"));
		dispatch(fetchClass());
	}, [dispatch]);

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