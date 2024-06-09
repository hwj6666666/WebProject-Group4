import Topic from "@/components/topic/topic";
import { HeadButton } from "@/components/topic/topicButton";
import { MySider } from "@/components/topic/topicSider";
import { useSelector } from "react-redux";
import TopicCarousel from "@/components/topic/topicCarousel";
import { Affix } from "antd";
import Notice from "@/components/topic/notice";

function BasicPage() {
	const { topic } = useSelector((state) => state.topic);
	console.log(topic)
	//点击分类显示相应内容
	return (
		<div className="min-h-screen bg-biligrey">
			<div className="min--h-screen flex justify-center ">
				<Affix><MySider /></Affix>
				<div className="">
					<div className="">
						<HeadButton />
					</div>
					<div
						className="bg-white"
						style={{ marginLeft: "30px", width: "800px" }}
					>
						{topic.map((topic, index) => (
							<div style={{ marginBottom: "30px" }}>
								<Topic key={index} topic={topic} />
							</div>
						))}
					</div>
				</div>
				<div className="w-1/4">
					<Affix offsetTop={100}><TopicCarousel /><Notice /></Affix>
				</div>
				<div>
					
				</div>
			</div>
		</div>
	);
}

export default BasicPage;
