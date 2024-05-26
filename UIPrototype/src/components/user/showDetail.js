
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import TopicUser from './TopicUser';
import RemarkUser from "./RemarkUser";
import Topic from "./usertopic";
import Object from "../object/object";



export default function ShowDetail(props) {
	const topics = useSelector(state => state.user).topicsbyuser
	const objects = useSelector(state => state.user).objectsbyuser
	const remarks = useSelector(state => state.user).remarksbyuser
	const fllows = useSelector(state => state.user).fllows
	// console.log(topics)
	switch (props.type) {
		case 'O':
			return (
				<div className="bg-white">
					{(objects.length !== 0)
						? objects.map((object, index) => (
							<div style={{ marginBottom: "30px" }}><Object
								key={object.id}
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
							<RemarkUser key={remark.id} remark={remark} />
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
								key={fllowtopic.id}
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
							<div style={{ marginBottom: "30px" }}>
								<TopicUser key={topic.id} topic={topic} />
								{/* ??? */}
								{/* <Topic key={topic.id} topic={topic} /> */}
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 ">
							你还没有创建过话题哦
						</div>}
				</div>
			)
	}
}
