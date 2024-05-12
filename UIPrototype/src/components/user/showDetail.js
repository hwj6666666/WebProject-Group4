
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import TopicUser from './TopicUser';

import { Card } from 'antd';
import profile_photo from "@/assets/3000.png";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import LikeButton from "@/components/remark/remarkLike";

import restaurantPhoto from "@/assets/restaurant.jpg";
import ObjectUser from "./ObjectUser";

const returnStarsOutlined = (starNum) => Array(5).fill().map((_, i) => {
	if (i < starNum) return <StarFilled key={i} className="text-yellow-400 mr-1" />;
	return <StarOutlined key={i} className="text-yellow-400 mr-1" />;
})

export default function ShowDetail(props) {

	const topics = useSelector(state => state.user).topicsbyuser
	const objects = useSelector(state => state.user).objectsbyuser
	const remarks = useSelector(state => state.user).remarksbyuser
	const fllows = useSelector(state => state.user).fllows
	switch (props.type) {
		case 'O':
			return (
				<div className="bg-white">
					{(objects.length !== 0)
						? objects.map((object, index) => (
							<div style={{ marginBottom: "30px" }}><ObjectUser
								key={index}
								object={object}
							/>
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 ">
							你还没有创建过对象哦
						</div>}
				</div>
			)
		case 'R':
			return (
				<div>
					{(remarks.length !== 0)
						? remarks.map((remark, index) =>
							<Card key={index} hoverable
								title={
									<div className="flex items-center" >
										<img src={profile_photo} alt="图片描述" className="w-10 h-10 mt-3 mr-4" />
										<div className="mt-2 text-sm font-bold">{remark.username}</div>
										<div className="w-16 h-10 flex justify-center items-center text-base ml-10 mt-2">
											{returnStarsOutlined(remark.score / 2)}
										</div>
									</div>
								}
							>
								<div className="flex justify-between">
									<div className="flex flex-col ml-14">
										<p className="text-base">{remark.comment}</p>
										<div className="flex flex-row mt-4 items-center">
											<p className="text-sm text-gray-500">{remark.time}</p>
											{/* <div className="mx-5"><LikeButton remarkId={remark.id} /></div> */}
											<button className="ml-2 text-sm hover:text-blue-500 text-gray-500">回复</button>
										</div>
										<div className="mt-5">
											<div className="flex flex-row items-center">
												<img src={profile_photo} alt="图片描述" className="w-10 h-10 mr-4" />
												<div className="text-sm font-bold">{remark.username}</div>
											</div>
											<p className="text-base mt-4">你说得对</p>
											<div className="flex flex-row mt-4 items-center">
												<p className="text-sm text-gray-500">{remark.time}</p>
												<button className="ml-4 text-sm hover:text-blue-500 text-gray-500">回复</button>
											</div>
										</div>
									</div>
								</div>
							</Card>
						) : <div className=" text-3xl mt-3 ml-4 text-gray-400 ">
							你还没有发表过评论哦
						</div>}
				</div>
			)
		case 'F':
			return (
				<div className="bg-white">
					{(fllows.length !== 0)
						? fllows.map((fllowtopic, index) => (
							<div style={{ marginBottom: "30px" }}><TopicUser
								key={index}
								topic={fllowtopic}
							/>
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 ">
							你还没有关注过话题哦
						</div>}
				</div>
			)
		case 'T':
		default:
			return (
				<div className="bg-white">
					{(topics.length !== 0)
						? topics.map((topic, index) => (
							<div style={{ marginBottom: "30px" }}><TopicUser
								key={index}
								topic={topic}
							/>
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 ">
							你还没有创建过话题哦
						</div>}
				</div>
			)
	}
}
