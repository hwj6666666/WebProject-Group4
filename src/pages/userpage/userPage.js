// //用户主页
import React from "react";
import { MySider } from "@/components/user/userSider";
import { UserAvatar } from "@/components/user/userAvatar";
import { SettingOutlined } from "@ant-design/icons";
import Topic from "@/components/user/usertopic";
import ClcButton from "@/components/user/clcButton";
import { HeadButton } from "@/components/topic/topicBotton";
// import Layout from "antd/es/layout/layout";
import Header from "../headerPage";
import { Link } from "react-router-dom";

export const UserPage = () => {
	const topics = [
		{
			title: "交大哪个餐饮大楼你去得最多？",
			hotComments: ["第一食堂", "第二食堂", "第三食堂"],
			heat: 100,
			id: 1,
		},
		{
			title: "疯狂星期四你最喜欢点哪个？",
			hotComments: ["蛋挞", "蜜汁全鸡", "汉堡"],
			heat: 200,
			id: 2,
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
			id: 3,
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
			id: 4,
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
			id: 5,
		},
		// 更多话题...
	];

	const handleTopicClick = (topic) => {
		console.log(`Topic clicked: ${topic.title}`);
	};

	return (
		<div className="bg-yellow-50">
			{/* 导航栏 */}
			<Header />
			{/* 页面主体 */}
			<div className="flex flex-col px-40 py-6">
				{/* 个人信息 */}
				<div className="flex items-center h-40 min-w-[600px] px-20 bg-sky-200 rounded-lg drop-shadow-md">
					{/* 头像 */}
					<span className="mr-4"><UserAvatar /></span>
					<span className="mt-6">
						<div className="flex flex-row items-end mb-4">
							<span className="text-4xl mr-4">交小集</span>
							<span className="text-2xl relative bottom-0">Lv.6</span>
						</div>
						<div className="text-md">个性签名:由所有属于集合A且属于集合B的元素所组成的集合，叫做集合A与集合B的交集，记作A∩B。</div>
					</span>
					<span className="ml-auto">
						<SettingOutlined className="text-4xl" />
					</span>
				</div>
				{/* 菜单栏及对应显示 */}
				<div className="flex flex-row mt-6">
					{/* 菜单栏 */}
					<div>
						<MySider />
					</div>
					{/* 显示 */}
					<div className="w-full">
						<div className="mx-5 mt-3 p-5 w-11/12 min-w-fit bg-sky-200 rounded-lg drop-shadow-md">
							{topics.map((topic, index) => (
								<Link Link to={{ pathname: '/remark' }}>
									<div style={{ marginBottom: "30px" }} key={index}>
										<Topic topic={topic} onTopicClick={() => handleTopicClick(topic)} />
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}