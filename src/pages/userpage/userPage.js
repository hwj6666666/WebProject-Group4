// //用户主页
import React from "react";
import { MySider } from "@/components/user/userSider";
import { UserAvatar } from "@/components/user/userAvatar";
import { SettingOutlined } from "@ant-design/icons";
import Topic from "@/components/topic/topic";
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
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
		},
		{
			title: "最喜欢点？",
			hotComments: ["蛋", "鸡", "堡"],
			heat: 200,
		},
		// 更多话题...
	];
	const handleTopicClick = (topic) => {
		console.log(`Topic clicked: ${topic.title}`);
	};

	return (
		<div className="bg-yellow-50">
			<Header />
			<div className="flex flex-col px-40 py-6">
				<div className="flex flex-row items-center h-40 bg-slate-300 rounded-lg px-20"
					style={{ width: "1400px" }}>
					<div className="mr-4">
						<UserAvatar />
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row items-end mb-1">
							<div className="text-4xl mr-4">用户名</div>
							<div className="text-2xl relative bottom-0">等级</div>
						</div>
						<div className="text-2xl">个性签名:</div>
					</div>
					<div className="ml-auto">
						<SettingOutlined className="text-4xl" />
					</div>
				</div>
				<div className="flex flex-row mt-6">
					<div>
						<MySider />
					</div>
					<div className="flex flex-col">
						{/* <HeadButton className="border border-black" /> */}
						<div className="flex flex-row mx-5">

							<div style={{ marginLeft: "30px", width: "1000px" }}>
								{topics.map((topic, index) => (
									<Link href="#">
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
		</div>
	);
}
