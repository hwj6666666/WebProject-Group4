import React, { useState, useEffect }from "react";
import Topic from "@/components/object/topic";

const HotTopic = () => {
    const [hotTopic, sethotTopic] = useState([]);

    const fetchHotTopic = async () => {
        try {
          const response = await fetch('http://localhost:8080/topic/hot', {
          });
          const data = await response.json();
          sethotTopic(data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };

      useEffect(() => {
        fetchHotTopic();
      }, []);

    return (
        <div className="flex flex-col items-center max-w-md h-full bg-header rounded-lg drop-shadow-lg px-0 py-0 mb-0">
            <h2 className="text-3xl mt-5 mb-5 font-thin">热门话题</h2>
            {hotTopic.map((topic, index) => (
                <div key={index} className="w-full h-full">
                    <Topic topic={topic} />
                </div>
            ))}
        </div>
    );
};

export default HotTopic;