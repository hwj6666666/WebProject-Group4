import React from "react";
import { Card  } from "antd";

const Topic = ({ topic, onTopicClick }) => {
  const { title, hotComments, heat } = topic;

  return (
    <Card
      className="border border-black w-1/4"
      onClick={onTopicClick}
      title={title}
    >
      <div className="flex justify-between ">
        <ul>
          {hotComments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div>实时热度：{heat}</div>
      </div>
    </Card>
  );
};

export default Topic;
