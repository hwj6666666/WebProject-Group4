import React from "react";
import Topic from "@/components/topic";
import { HeadButton } from "@/components/topicBotton";
import { MySider } from "@/components/topicSider";
import Layout from "antd/es/layout/layout";

function BasicPage() {
  const topics = [
    {
      title: "交大哪个餐饮大楼你去得最多？",
      hotComments: ["第一食堂", "第二食堂", "第三食堂"],
      heat: 100,
    },
    {
      title: "疯狂星期四你最喜欢点哪个？",
      hotComments: ["蛋挞", "蜜汁全鸡", "汉堡"],
      heat: 200,
    },
    {
      title: "最喜欢点？",
      hotComments: ["蛋", "鸡", "堡"],
      heat: 200,
    },
    // 更多话题...
  ];

  const handleTopicClick = (topic) => {
    console.log(`Topic clicked: ${topic.title}`);
  };
  return (
    <div className="flex ">
      <MySider  />
      <div>
        <HeadButton className="border border-black" />

        {topics.map((topic, index) => (
          <Topic
            key={index}
            topic={topic}
            onTopicClick={() => handleTopicClick(topic)}
          />
        ))}
      </div>
    </div>
  );
}

export default BasicPage;
