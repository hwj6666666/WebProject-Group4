import React from "react";
import Topic from "@/components/topic/topic";
import { HeadButton } from "@/components/topic/topicBotton";
import { MySider } from "@/components/topic/topicSider";
import Layout from "antd/es/layout/layout";
import Header from "../headerPage";

function BasicPage() {
  const topics = [
    {
      title: "交大哪个餐饮大楼你去得最多？",
      hotComments: ["第一食堂", "第二食堂", "第三食堂"],
      heat: 100,
      id: 1,
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
    <div>
      <Header />
      <div className="flex ">
        <MySider />
        <div>
          <HeadButton className="border border-black" />

          <div style={{ marginLeft: "30px", width: "1000px" }}>
            {" "}
            {topics.map((topic, index) => (
              <div style={{ marginBottom: "30px" }}>
                <Topic
                  key={index}
                  topic={topic}
                  onTopicClick={() => handleTopicClick(topic)}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicPage;
