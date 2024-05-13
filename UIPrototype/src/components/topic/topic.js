//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度
import React from "react";
import { Card } from "antd";
import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";

const TopicUser = ({ topic, onTopicClick }) => {
	const { title, hot } = topic;
	const id = topic.id;
	return (
		<Link to={{ pathname: `/topic/${id}` }}>
			<Card
				className="shadow-md w-full"
				title={
					<button
						onClick={(event) => {
							event.stopPropagation();
						}}
						className="hover:underline"
					>
						{title}
					</button>
				}
			>
				<div className="flex justify-between ">
					<div>实时热度：{hot}</div>
				</div>
			</Card>
		</Link>
	);
};

export default TopicUser;
