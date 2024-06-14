
import { React } from "react";
import UploadObject from "@/components/object/uploadObject";
import { Spin, message } from "antd";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { findFollow, setFollow } from "@/apis/topic";

const TopicProfile = ({ topic }) => {
  const ids=localStorage.getItem('id')
  const id=parseInt(ids)
  const [followed,setFollowed]=useState(false)
  const truncateIntroduction = (introduction, maxLength) => {
    if (introduction.length <= maxLength) {
      return introduction;
    } else {
      return introduction.substring(0, maxLength) + "············";
    }
  };
  
  const findFollowed=async()=>{
    const res=await findFollow(topic.id,id)
    console.log(res);
    setFollowed(res)
  }

useEffect(() => {
  if(topic)
    findFollowed();
  }, [topic]);

 const  handle=async()=>{
    const res=await setFollow(topic.id,id)
    if(res){
      message.success(res.msg,0.5)
      setFollowed(!followed)
    }
    
  }

  
if (!topic) {
    return <Spin size="large" />;
  }


  return (
    <div className="flex flex-col bg-header rounded-lg drop-shadow-lg h-60 text-base">
      <div className="flex flex-row">
        <img
          class="w-40 h-40 ml-8 mr-5 mt-10 mb-5 rounded"
          src={topic.base64}
          alt="introductionPhoto"
        />
        <div>
          <h2 className="text-4xl mt-10 mr-10 font-bold">{topic.title}</h2>
          <p className="mt-6 mr-10 text-gray-600">
            {truncateIntroduction(topic.introduction, 230)}
          </p>
        </div>
      </div>
      <div className="mt-10 absolute right-10">
        {/* {isfollowed && <StarFilled onClick={() => {handleFollow()}}/>}
        {!isfollowed && <StarOutlined onClick={() => {handleFollow()}}/>} */}
        <UploadObject topicId={topic.id} />
      </div>
      <div className="absolute right-10 bottom-24">
        <Button onClick={handle}>
          {followed?<StarFilled className='relative text-yellow-500 mr-1 bottom-1'/>:<StarOutlined className='relative text-yellow-500 mr-1 bottom-1'/>  }
          {followed?'已关注':'关注'}
        </Button>
      </div>
    </div>
  );
};

export default TopicProfile;
