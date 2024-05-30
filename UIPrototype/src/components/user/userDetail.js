import React from 'react'
import { UserAvatar } from "@/components/user/userAvatar";
import Setting from "@/components/user/dropmenu";
import { useParams } from 'react-router-dom';

export default function UserDetail({ curUser }) {

	const user_id = localStorage.getItem('id');
	const { userId } = useParams();
	// console.log(user_id)
	// console.log(userId)
	return (
		<div className="flex items-center h-40 min-w-[600px] px-20 bg-white rounded-sm">
			{/* 头像 */}
			<span className="mr-4">
				<UserAvatar avatar={curUser.avatar} />
			</span>
			<span className="mt-6">
				<div className="flex flex-row items-end mb-4">
					<span className="text-4xl mr-4">{curUser.username}</span>
					<span className="text-xl relative bottom-0">Lv.{curUser.level}</span>
				</div>
				<div className="text-md text-gray-700">
					{curUser.note}
				</div>
			</span>
			<span className="ml-auto">
				{(user_id === userId) ? <Setting /> : <></>}
			</span>
		</div>
	)
}
