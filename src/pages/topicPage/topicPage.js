import React from "react";
import Topic from "@/components/topic/topic";
import { HeadButton } from "@/components/topic/topicBotton";
import { MySider } from "@/components/topic/topicSider";
import Header from "../headerPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TopicCarousel from "@/components/topic/topicCarousel";

function BasicPage() {
  const { topic } = useSelector((state) => state.topic);

  return (
    <div className="min-h-screen bg-biligrey">
      <Header />
      <div className=" border border-blackmin--h-screen flex">
        <MySider/>
        <div>
          <HeadButton />
          <div className="bg-white">
            {topic.map((topic, index) => (
              <div style={{ marginBottom: "30px" }}>
                <Link to={{ pathname: "/remark" }}>
                  <Topic key={index} topic={topic} />
                </Link>{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <TopicCarousel />
        </div>
      </div>
    </div>
  );
}

export default BasicPage;
