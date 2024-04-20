import restaurantPhoto from "@/assets/restaurant1.jpg";
import { StarOutlined } from '@ant-design/icons';

const Object = ({ topic }) => {

  return (
    <div className="flex flex-col bg-white rounded-lg drop-shadow-lg w-full">
      <div className="flex flex-row">
        <img className="w-20 h-20 ml-8 mr-5 mt-10 mb-5 rounded" src={restaurantPhoto} alt="restaurantPhoto" />
        <div>
          <div className="flex flex-row items-end">
            <div><h2 className="text-3xl mt-10 mr-10 font-bold">二餐</h2></div>
            <div className="flex flex-row absolute right-10 text-3xl text-starcolor">
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
            </div>
          </div>
          <div className="flex flex-row  items-start">
            <div><p className="mt-3 mr-10 text-gray-600 w-3/4">二餐位于东一区与东二区宿舍楼之间，距离东上中下院较近，和四餐并列为校内最受欢迎的餐厅。</p></div>
            <div className="flex absolute right-10 text-4xl mt-5 text-scorecolor">
              <p className="">8.7</p>
              </div>
          </div>
        </div>
      </div>
      <div className="inline-blocks bg-gradient-to-r from-bgcolor to-white mb-5 ml-8 w-1/2" >
        <p className="text-fontcolor">"二餐绿园餐厅确实好吃。"</p>
        </div>
    </div>
  );
}

export default Object;