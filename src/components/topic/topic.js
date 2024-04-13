//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度

import React from "react";
import { Card } from "antd";
import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
	const { title, hotComments, heat } = topic;

	return (
		<Card
			className="shadow-md w-full"
			// onClick={onTopicClick}
			title={
				<button
					onClick={(event) => {
						event.stopPropagation();
						onTopicClick();
					}}
					className="hover:underline"
				>
					{title}
				</button>
			}
		>
			<div className="flex justify-between ">
				<span>
					{hotComments &&
						hotComments.map((comment, index) => (
							<Button className="rounded-lg mr-20" key={index}>
								{comment}
							</Button>
						))}
				</span>
				<div>实时热度：{heat}</div>
			</div>
		</Card>
	);
};

export default Topic;
