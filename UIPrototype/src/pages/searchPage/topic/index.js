import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {searchTopic} from "@/apis/topic"
import Topic from "@/components/topic/topic";
import { Empty } from "antd";
function SearchTopic() {
 const [topic, setTopic] = useState([]);
 const { keyword } = useParams();
  
    useEffect(() => {
      searchTopic(keyword).then((res)=>{
      setTopic(res)
    })
    }, []);
  return (
    <div>
        {topic.length>0?<div className="mt-10">
          {topic.map((topic, index) => (
              <div style={{ marginBottom: "30px",marginLeft:"150px",marginRight:"150px" }}>
								<Topic key={index} topic={topic} />
							</div>
          ))}
          </div>:<div><Empty/></div>}
    </div>
  );
}

export default SearchTopic;