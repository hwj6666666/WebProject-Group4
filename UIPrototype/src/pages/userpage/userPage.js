// //用户主页
import React, { useState } from "react";
// import { MySider } from "@/components/user/userSider";
// import Layout from "antd/es/layout/layout";
import UserDetail from "@/components/user/userDetail";
import ShowDetail from "@/components/user/showDetail";

export const UserPage = () => {
	const [showtype, setShowtype] = useState('T')

	return (
		<div className="min-h-screen bg-biligrey">
			<div className="flex flex-col px-40 py-6">
				<UserDetail />

				<div className=" w-auto min-w-[600px] min-h-[300px] mt-[12px] flex rounded-sm overflow-hidden ">
					<div className=" flex-[3] w-auto h-auto bg-white mr-[12px] rounded-sm ">
						<div className=" w-full h-10 bg-white flex border-b-2 drop-shadow-sm ">
							<button onClick={() => setShowtype('T')} className=" flex-1 hover:border-b-2  border-blue-300 hover:text-sky-500 ">话题</button>
							<button onClick={() => setShowtype('O')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">对象</button>
							<button onClick={() => setShowtype('R')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">评论</button>
							<button onClick={() => setShowtype('F')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">关注</button>
						</div>
						<ShowDetail type={showtype} />
					</div>

					<div className=" flex-1 w-auto h-auto bg-white rounded-sm ">
						正在施工
					</div>

				</div>
			</div>
		</div>
	);
}