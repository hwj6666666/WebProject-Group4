import introductionPhoto from "@/assets/introduction.jpg";
import UploadObject from "@/components/object/uploadObject";

const TopicProfile = ({topic}) => {

    return (
        <div className="flex flex-col bg-white rounded-lg drop-shadow-lg">
            <div className="flex flex-row">
            <img class="w-40 h-40 ml-8 mr-5 mt-10 mb-5 rounded" src={introductionPhoto} alt="introductionPhoto" />
                <div>
                    <h2 className="text-4xl mt-10 mr-10 font-bold">{topic.title}</h2>
                    <p className="mt-6 mr-10 text-gray-600">{topic.introduction}</p>
                </div>
            </div>
            <div className="mt-10 absolute right-10">
                    <UploadObject />
            </div>
        </div>
    );
}

export default TopicProfile;