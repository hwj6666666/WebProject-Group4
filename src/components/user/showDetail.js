import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Topic from "@/components/user/usertopic";

const topics = [
	{
		title: "交大哪个餐饮大楼你去得最多？",
		hotComments: ["第一食堂", "第二食堂", "第三食堂"],
		heat: 100,
		id: 1,
	}
];
const objects = [
	{
		title: "这是某个对象",
		hotComments: ["第一食堂", "第二食堂", "第三食堂"],
		heat: 100,
		id: 1,
	}
];
const remarks = [
	{
		title: "这是某个评论",
		hotComments: ["第一食堂", "第二食堂", "第三食堂"],
		heat: 100,
		id: 1,
	}
];
const follows = [
	{
		title: "这是某个关注",
		hotComments: ["第一食堂", "第二食堂", "第三食堂"],
		heat: 100,
		id: 1,
	}
];

export default function ShowDetail(props) {
	const [selectedType, setSelectedType] = useState(topics)

	const handleTopicClick = (topic) => {
		console.log(`Topic clicked: ${topic.title}`);
	};

	const handleType = (Type) => {
		setSelectedType(Type)
	};

	useEffect(() => {
		switch (props.type) {
			case 'objects':
				handleType(objects)
				break
			case 'remarks':
				handleType(remarks)
				break
			case 'follows':
				handleType(follows)
				break
			case 'topics':
			default:
				handleType(topics)
		}
	}, [props.type])

	return (
		<div className="mx-5 mt-3 p-5 w-11/12 min-w-fit bg-white rounded-lg drop-shadow-md">
			{selectedType.map((topic, index) => (
				<Link Link to={{ pathname: "/remark" }} key={index}>
					<div style={{ marginBottom: "30px" }} key={index}>
						<Topic
							topic={topic}
							onTopicClick={() => handleTopicClick(topic)}
						/>
					</div>
				</Link>
			))}
		</div>
	)
}
