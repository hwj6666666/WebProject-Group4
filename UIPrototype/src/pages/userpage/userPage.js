// //用户主页
import React, { useEffect, useState } from "react";
// import { MySider } from "@/components/user/userSider";
// import Layout from "antd/es/layout/layout";
import UserDetail from "@/components/user/userDetail";
import ShowDetail from "@/components/user/showDetail";
import { useParams } from "react-router-dom";
import { fetchFllows, fetchObjectsByUserId, fetchRemarksByUserId, fetchTopicsByUserId, fetchUser } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";

export const UserPage = () => {

	const { userId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser(userId));
		dispatch(fetchTopicsByUserId(userId));
		dispatch(fetchObjectsByUserId(userId));
		dispatch(fetchRemarksByUserId(userId));
		dispatch(fetchFllows(userId));
	}, [dispatch, userId])
	const curUser = useSelector(state => state.user).user
	// console.log('curUser')
	// console.log(curUser)

	const [showtype, setShowtype] = useState('T')

	return (
		<div className="min-h-screen bg-base text-base">
			<div className="flex flex-col px-40 py-6">
				{(Object.keys(curUser).length === 0) ?
					<div>
						<div className="text-3xl mt-3 ml-4 text-gray-400 ">
							用户不存在
						</div>
					</div> :
					<>
						<UserDetail curUser={curUser} />

						<div className=" w-auto min-w-[600px] min-h-[300px] mt-[12px] flex rounded-sm overflow-hidden ">
							<div className=" flex-[3] w-auto h-auto bg-header mr-[12px] rounded-sm ">
								<div className=" w-full h-10 bg-header flex border-b-2 drop-shadow-sm ">
									<button onClick={() => setShowtype('T')} className=" flex-1 hover:border-b-2  border-blue-300 hover:text-sky-500 ">话题</button>
									<button onClick={() => setShowtype('O')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">对象</button>
									<button onClick={() => setShowtype('R')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">评论</button>
									<button onClick={() => setShowtype('F')} className=" flex-1 hover:border-b-2 border-blue-300 hover:text-sky-500 ">关注</button>
								</div>
								<ShowDetail type={showtype} />
							</div>

							<div className=" flex-1 w-auto h-auto bg-header rounded-sm ">
								正在施工
							</div>

						</div>
					</>}
			</div>
		</div>
	);
}