import { useEffect, useState } from "react";
import Header from "../headerPage";
import HotTopic from "@/components/object/hotTopic";
import TopicProfile from "@/components/object/topicProfile";
import Object from "@/components/object/object";
import { fetchObject } from "@/store/modules/object";
import { fetchTopic } from "@/store/modules/topic";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ObjectPage = () => {
	const dispatch = useDispatch();
	const topics = useSelector((state) => state.topic).topic;
	const object = useSelector((state) => state.object).object;

	//此处能够成功获取到topicId，可直接使用
	const { topicId } = useParams();
	// console.log('topicId' + topicId);

	useEffect(() => {
		dispatch(fetchTopic("0"));
		dispatch(fetchObject(topicId));
	}, [dispatch, topicId]);

  return (
    <div className="min-h-screen bg-base">
      <div className="h-16"></div>
      <div className="flex flex-col w-3/5 mt-10 ml-40">
        <div>
          <TopicProfile topic={topics.find((r) => r.id == topicId)} />
        </div>
      </div>
      <div className="flex flex-row mt-20">
        <div className="flex flex-col top-100 w-3/5 ml-40">
          {object.map((object, index) => (
            <div className="mb-10">
              <Object key={index} object={object} />
            </div>
          ))}
        </div>
				<div className="fixed w-1/4 h-3/5 right-10 top-60">
					<HotTopic className="" />
				</div>
			</div>
		</div>
	);
};
