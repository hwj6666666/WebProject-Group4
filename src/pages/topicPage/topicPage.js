import React from "react";
import Topic from "@/components/topic/topic";
import { HeadButton } from "@/components/topic/topicBotton";
import { MySider } from "@/components/topic/topicSider";
import Layout from "antd/es/layout/layout";
import Header from "../headerPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BasicPage() {
  
  const {topic} =useSelector(state=>state.topic) ;
  console.log(topic)

  return (
    <div>
      <Header />
      <div className="flex ">
        <MySider />
        <div>
          <HeadButton className="border border-black" />

          <div style={{ marginLeft: "30px", width: "1000px" }}>
            {" "}
            {topic.map((topic, index) => (
              <div style={{ marginBottom: "30px" }}>
                <Link  to={{ pathname: '/remark'}}><Topic
                  key={index}
                  topic={topic}
                /></Link>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicPage;
