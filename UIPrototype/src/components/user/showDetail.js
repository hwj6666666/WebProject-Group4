
import { useSelector } from 'react-redux';
import RemarkUser from "./RemarkUser";
import Object from "../object/object";
import Topic from "../topic/topic";

export default function ShowDetail(props) {
	const topics = useSelector(state => state.user).topicsbyuser
	const objects = useSelector(state => state.user).objectsbyuser
	const remarks = useSelector(state => state.user).remarksbyuser
	const fllows = useSelector(state => state.user).fllows
	// console.log(topics)
	// console.log('showdetail')
	// console.log(objects)
	// console.log(remarks)
	switch (props.type) {
		case 'O':
			return (
				<div className="bg-header text-base">
					{(objects.length !== 0)
						? objects.map((object) => (
							<div key={object.id} style={{ marginBottom: "30px" }}>
								<Object object={object}
								/>
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 bg-header">
							你还没有创建过对象哦
						</div>}
				</div>
			)
		case 'R':
			return (
				<div className="bg-header text-base">
					{(remarks.length !== 0)
						? remarks.map((remark, index) =>
							<RemarkUser key={remark.id} remark={remark} />
						) : <div className=" text-3xl mt-3 ml-4 text-gray-400 bg-header">
							你还没有发表过评论哦
						</div>}
				</div>
			)
		case 'F':
			return (
				<div className="bg-header text-base">
					{(fllows.length !== 0)
						? fllows.map((fllowtopic) => (
							<div key={fllowtopic.id} style={{ marginBottom: "30px" }}>
								<Topic topic={fllowtopic}
								/>
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 bg-header">
							你还没有关注过话题哦
						</div>}
				</div>
			)
		case 'T':
		default:
			return (
				<div className="bg-header text-base">
					{(topics.length !== 0)
						? topics.map((topic, index) => (
							<div key={topic.id} style={{ marginBottom: "30px" }}>
								<Topic key={topic.id} topic={topic} />
								{/* ??? */}
								{/* <Topic key={topic.id} topic={topic} /> */}
							</div>
						))
						: <div className=" text-3xl mt-3 ml-4 text-gray-400 bg-header">
							你还没有创建过话题哦
						</div>}
				</div>
			)
	}
}
