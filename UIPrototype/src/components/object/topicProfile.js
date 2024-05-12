import introductionPhoto from "@/assets/introduction.jpg";
import {React} from "react";
import UploadObject from "@/components/object/uploadObject";
import { Spin } from 'antd';
import { useNavigate } from "react-router-dom";

const TopicProfile = ({topic}) => {
    const truncateIntroduction = (introduction, maxLength) => {
        if (introduction.length <= maxLength) {
          return introduction;
        } else {
          return introduction.substring(0, maxLength) + "············";
        }
    };
    if (!topic) {
        return <Spin size="large" />;
    }

    return (
        <div className="flex flex-col bg-white rounded-lg drop-shadow-lg h-60">
            <div className="flex flex-row">
            <img class="w-40 h-40 ml-8 mr-5 mt-10 mb-5 rounded" src={topic.base64} alt="introductionPhoto" />
                <div>
                    <h2 className="text-4xl mt-10 mr-10 font-bold">{topic.title}</h2>
                    <p className="mt-6 mr-10 text-gray-600">{truncateIntroduction(topic.introduction, 230)}</p>
                </div>
            </div>
            <div className="mt-10 absolute right-10">
                    <UploadObject />
            </div>
        </div>
    );
}

export default TopicProfile;