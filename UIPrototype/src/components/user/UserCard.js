//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度
import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import avat from "@/assets/3000.png";

const UserCard = ({ user }) => {
	const { username, note, level, avatar } = user;
	let tmpnote = note;
	if (tmpnote.length > 20) {
		tmpnote = tmpnote.substring(0, 20) + "..."
	}
	return (<><Link to={{ pathname: `/user/${user.id}` }}>
		<div style={{ display: "flex" }}>
			<div>
				<Avatar src={avatar !== "path" ? avatar : avat} size={128} />
			</div>
			<div>
				<h1 className="ml-10 text-2xl"><span className="mr-5">{username}</span>{"等级：" + level}</h1>
				<p className="ml-10 text-xl text-black">{tmpnote}</p>
			</div>
		</div></Link>
	</>
	);
};

export default UserCard;
