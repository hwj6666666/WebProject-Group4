import React from "react";
import Header from "../headerPage";
import { useSelector } from "react-redux";
import HotTopic from "@/components/object/hotTopic";
import Object from "@/components/object/object";
import Object1 from "@/components/object/object1";
import TopicProfile from "@/components/object/topicProfile";


export const ObjectPage = () => {
	const topics = useSelector(state => state.topic).topic;

	return (
		<div className="min-h-screen bg-biligrey" >
			<div className="fixed w-full z-50"><Header /></div>
			<div className="h-16"></div>
			<div className="flex flex-col w-3/5 mt-20 ml-40">
				<div><TopicProfile topic={topics.find(r => r.id === 1)} /></div>
			</div>
			<div className="flex flex-row mt-20">
				<div className="flex flex-col top-100 w-1/2 ml-40">
					<div className="mb-10"><Object/></div>
					<div className="mb-10"><Object1/></div>
				</div>
				<div className="fixed w-1/3 h-1/2 right-10" >
					<HotTopic className="" />
				</div>
			</div>
		</div>
	);
}