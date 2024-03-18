//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度

import React from "react";
import { Card } from "antd";
import ClcButton from "@/components/user/clcButton";

const Topic = ({ topic, onTopicClick }) => {
	const { title, hotComments, heat } = topic;

	return (
		<Card hoverable
			className="border border-black w-full"
			onClick={onTopicClick}
			title={
				<div className="flex items-center">
					<span>{title}</span>
				</div>
			}>
			<div className="flex justify-between">
				<ul>
					{hotComments.map((comment, index) => (
						<li key={index}>{comment}</li>
					))}
				</ul>
				<div>
					<div>实时热度：{heat}</div>
					<div className=" mt-3 ml-4">
						<ClcButton />
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Topic;
