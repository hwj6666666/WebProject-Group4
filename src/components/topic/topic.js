//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度

import React from "react";
import { Card } from "antd";

const Topic = ({ topic, onTopicClick }) => {
  const { title, hotComments, heat } = topic;

  return (
    <Card hoverable
      className="border border-black w-full"
      onClick={onTopicClick}
      title={title}
    >
      <div className="flex justify-between ">
        <ul>
          {hotComments&&hotComments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div>实时热度：{heat}</div>
      </div>
    </Card>
  );
};

export default Topic;
