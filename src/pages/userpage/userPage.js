// //用户主页
import React, { useState } from "react";
// import { MySider } from "@/components/user/userSider";
// import Layout from "antd/es/layout/layout";
import Header from "../headerPage";
import UserDetail from "@/components/user/userDetail";
import ShowDetail from "@/components/user/showDetail";

export const UserPage = () => {
	const [showtype, setShowtype] = useState('topics')

	return (
		<div className="min-h-screen bg-biligrey">
			<Header />
			<div className="flex flex-col px-40 py-6">
				<UserDetail />
				<div className=" w-auto min-w-[600px] h-auto mt-6 bg-pink-600 flex rounded-sm overflow-hidden ">
					<div className=" flex-[3] w-auto h-auto bg-gray-600 mr-7 ">
						<div className=" w-full h-10 bg-gray-400 flex ">
							<button onClick={() => setShowtype('topics')} className=" flex-1 bg-red-600 hover:border-b-2 border-blue-50 ">话题</button>
							<button onClick={() => setShowtype('objects')} className=" flex-1 bg-red-500 hover:border-b-2 border-blue-50 ">对象</button>
							<button onClick={() => setShowtype('remarks')} className=" flex-1 bg-red-400 hover:border-b-2 border-blue-50 ">评论</button>
							<button onClick={() => setShowtype('follows')} className=" flex-1 bg-red-300 hover:border-b-2 border-blue-50 ">关注</button>
						</div>
						<ShowDetail type={showtype} />
					</div>

					<div className=" flex-1 w-auto h-auto bg-gray-200 ">
						未知领域
					</div>
				</div>
			</div>
		</div>
	);
}