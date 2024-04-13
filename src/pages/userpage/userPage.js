// //用户主页
import React, { useState } from "react";
// import { MySider } from "@/components/user/userSider";
// import Layout from "antd/es/layout/layout";
import Header from "../headerPage";
import UserDetail from "@/components/user/userDetail";
import ShowDetail from "@/components/user/showDetail";

export const UserPage = () => {
	const topics = [
		{
			title: "交大哪个餐饮大楼你去得最多？",
			hotComments: ["第一食堂", "第二食堂", "第三食堂"],
			heat: 100,
			id: 1,
		}
		// 更多话题...
	];

	const handleTopicClick = (topic) => {
		console.log(`Topic clicked: ${topic.title}`);
	};

	return (
		<div className="min-h-screen bg-biligrey">
			<Header />
			<div className="flex flex-col px-40 py-6">
				<UserDetail />
				<div className=" w-auto min-w-[600px] min-h-[800px] mt-[12px] flex rounded-sm overflow-hidden ">
					<div className=" flex-[3] w-auto h-auto bg-white mr-[12px] rounded-sm ">
						<div className=" w-full h-10 bg-white flex border-b-2 drop-shadow-sm ">
							<button onClick={() => setShowtype('topics')} className=" flex-1 hover:border-b-2 border-blue-50 hover:text-sky-500 ">话题</button>
							<button onClick={() => setShowtype('objects')} className=" flex-1 hover:border-b-2 border-blue-50 hover:text-sky-500 ">对象</button>
							<button onClick={() => setShowtype('remarks')} className=" flex-1 hover:border-b-2 border-blue-50 hover:text-sky-500 ">评论</button>
							<button onClick={() => setShowtype('follows')} className=" flex-1 hover:border-b-2 border-blue-50 hover:text-sky-500 ">关注</button>
						</div>
						<ShowDetail type={showtype} />
					</div>

					<div className=" flex-1 w-auto h-auto bg-white rounded-sm ">
						未知领域
					</div>

				</div>
			</div>
		</div>
	);
}