import { StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Object = ({ object }) => {
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
	const judeg = (formattedScore) => {
		if (formattedScore == 0) {
			return "暂无评分";
		} else return formattedScore;
	};
	return (
		<div
			className="flex flex-col bg-white rounded-lg drop-shadow-lg w-full cursor-pointer"
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
							<p className="">{judeg(formattedScore)}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="inline-blocks bg-gradient-to-r from-bgcolor to-white mb-5 ml-8 w-1/2">
				<p className="text-fontcolor">
					"{truncateComment(object.hottestRemark, 25)}"
				</p>
			</div>
		</div>
	);
};

export default Object;
