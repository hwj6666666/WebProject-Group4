//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotjar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTop3 } from "@/apis/object";
import { Button, message } from "antd";
import { deleteTopic } from "@/store/modules/topic";

const Topic = ({ topic }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id = topic.id;
	const [top3, setTop3] = useState([]);

	const truncateDescription = (description, maxLength) => {
		if (!description) return "";
		if (description.length <= maxLength) {
			return description;
		} else {
			return description.substring(0, maxLength) + "············";
		}
	};

	const handle = (e, id) => {
		console.log(e)
		e.stopPropagation();
		navigate(`/object/${id}`);
	}
	const handleDeleteTopic = (topicId) => {
		dispatch(deleteTopic(topicId));
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = await getTop3(id);
			setTop3(res);
		};
		fetchData();
	}, [id])

	return (

		<div
			className="flex flex-row bg-header rounded-lg drop-shadow-lg w-full cursor-pointer text-base"
			onClick={() => navigate(`/topic/${id}`)}
		><div className="flex flex-col mb-2">
				<div className="flex flex-row mb-2">
					<img
						className="w-24 h-24 ml-8 mr-5 mt-10 mb-3 rounded"
						src={topic.base64}
						alt="restaurantPhoto"
					/>
					<div className="flex-grow">
						<div className="flex flex-row items-end justify-between">
							<div>
								<h2 className="text-2xl mt-10 mr-10 font-bold">{topic.title}</h2>
							</div>
						</div>
						<div className="flex flex-row items-start justify-between">
							<div>
								<p className="mt-3 mr-10 text-gray-600 w-96">
									{truncateDescription(topic.introduction, 45)}
								</p>

							</div>

							<div className="flex text-4xl mr-8 mt-3 text-scorecolor ">
							</div>
						</div>
					</div>
				</div>
				<div style={{ width: "70%", marginBottom: "2%", display: "flex", justifyContent: "space-around" }}>
					{top3.map((object, index) => (
						<Button key={object.id} onClick={(e) => handle(e, object.id)}
						>
							{object.title}
						</Button>
					))}

				</div>
			</div>
			<div style={{ position: "absolute", bottom: "20%", left: "82%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
				{(localStorage.getItem('id') == topic.userId || localStorage.getItem('isManager')==="true") &&<Button className="mb-4"
                              onClick={(e) => { 
								e.stopPropagation();
								handleDeleteTopic(topic.id) }} danger>删除</Button>}<p style={{ fontSize: "3em"}} className="text-red-500">{topic.hot}</p>
				<div className="flex mt-4">
					<FaHotjar size={30 } color="red"></FaHotjar>
					<div className="text-red-500 ml-4 text-xl">热度</div>
				</div>
			</div>
		</div>
	);
};

export default Topic;
