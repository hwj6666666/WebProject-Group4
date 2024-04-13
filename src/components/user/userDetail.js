import React from 'react'
import { UserAvatar } from "@/components/user/userAvatar";
import Setting from "@/components/user/dropmenu";

export default function UserDetail() {
	return (
		<div className="flex items-center h-40 min-w-[600px] px-20 bg-white rounded-sm drop-shadow-md">
			{/* 头像 */}
			<span className="mr-4">
				<UserAvatar />
			</span>
			<span className="mt-6">
				<div className="flex flex-row items-end mb-4">
					<span className="text-4xl mr-4">交小集</span>
					<span className="text-2xl relative bottom-0">Lv.6</span>
				</div>
				<div className="text-md">
					个性签名:由所有属于集合A且属于集合B的元素所组成的集合，叫做集合A与集合B的交集，记作A∩B。
				</div>
			</span>
			<span className="ml-auto">
				<Setting />
			</span>
		</div>
	)
}
