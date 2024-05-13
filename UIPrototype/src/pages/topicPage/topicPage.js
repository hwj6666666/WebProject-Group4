import Topic from "@/components/topic/topic";
import { HeadButton } from "@/components/topic/topicButton";
import { MySider } from "@/components/topic/topicSider";
import Header from "../headerPage";
import { useSelector } from "react-redux";
import TopicCarousel from "@/components/topic/topicCarousel";

function BasicPage() {
  const { topic } = useSelector((state) => state.topic);
  //点击分类显示相应内容
  return (
    <div className="min-h-screen bg-biligrey">
      <Header />
      <div className="min--h-screen flex justify-center ">
        <MySider />
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
          <TopicCarousel />
        </div>
      </div>
    </div>
  );
}

export default BasicPage;
