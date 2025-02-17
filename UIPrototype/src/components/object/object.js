import { StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { deleteObject } from "@/store/modules/object";
import { useDispatch, useSelector } from "react-redux";

const Object = ({ object }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formattedScore =
		object && object.aveScore ? object.aveScore.toFixed(1) : "";

	const truncateDescription = (description, maxLength) => {
		if (!description) return "";
		if (description.length <= maxLength) {
			return description;
		} else {
			return description.substring(0, maxLength) + "············";
		}
	};
	const truncateComment = (comment, maxLength) => {
		if (!comment) return "";
		if (comment.length <= maxLength) {
			return comment;
		} else {
			return comment.substring(0, maxLength) + "······";
		}
	};
	const judge = (formattedScore) => {
		if (formattedScore == 0) {
			return "暂无评分";
		} else return formattedScore;
	};
	const handleDeleteObject = (objectId) => {
		dispatch(deleteObject(objectId));
	};
	return (
		<div
			className="flex flex-col bg-header rounded-lg drop-shadow-lg w-full cursor-pointer text-base"
			onClick={() => navigate(`/object/${object.id}`)}
		>
			<div className="flex flex-row mb-2">
				<img
					className="w-24 h-24 ml-8 mr-5 mt-10 mb-3 rounded"
					src={object.picture}
					alt="restaurantPhoto"
				/>
				<div className="flex-grow">
					<div className="flex flex-row items-end justify-between">
						<div>
							<h2 className="text-3xl mt-10 mr-10 font-bold">{object.title}</h2>
						</div>
						<div className="flex flex-row text-3xl mr-8 text-starcolor">
							<div>
								<StarOutlined />
							</div>
							<div>
								<StarOutlined />
							</div>
							<div>
								<StarOutlined />
							</div>
							<div>
								<StarOutlined />
							</div>
							<div>
								<StarOutlined />
							</div>
						</div>
					</div>
					<div className="flex flex-row items-start justify-between">
						<div>
							<p className="mt-3 mr-10 text-gray-600 ">
								{truncateDescription(object.description, 90)}
							</p>
						</div>
						<div className="flex text-4xl mr-8 mt-3 text-scorecolor ">
							<p className="">{judge(formattedScore)}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row ">
				<div className="inline-blocks bg-gradient-to-r from-bgcolor to-white mb-5 ml-8 w-1/2">
					<p className="text-fontcolor">
						"{truncateComment(object.hottestRemark, 25)}"
					</p>
				</div>
				{(localStorage.getItem('id') == object.userId || localStorage.getItem('isManager')==="true") && <Button
						className="ml-auto mr-8"
						onClick={(e) => {
							e.stopPropagation();
							handleDeleteObject(object.id)
						}} danger>删除</Button>}
			</div>
		</div>
	);
};

export default Object;
