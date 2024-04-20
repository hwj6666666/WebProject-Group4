import restaurantPhoto from "@/assets/restaurant.jpg";
import { StarOutlined } from '@ant-design/icons';

const Object = ({ topic }) => {

  return (
    <div className="flex flex-col bg-white rounded-lg drop-shadow-lg w-full">
      <div className="flex flex-row">
        <img className="w-20 h-20 ml-8 mr-5 mt-10 mb-5 rounded" src={restaurantPhoto} alt="restaurantPhoto" />
        <div>
          <div className="flex flex-row items-end">
            <div><h2 className="text-3xl mt-10 mr-10 font-bold">一餐</h2></div>
            <div className="flex flex-row absolute right-10 text-3xl text-starcolor">
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
              <div><StarOutlined /></div>
            </div>
          </div>
          <div className="flex flex-row  items-start">
            <div><p className="mt-3 mr-10 text-gray-600 ">一餐位于学生公寓西一区北面，距离包玉刚图书馆、上中下院教学楼较近。</p></div>
            <div className="flex absolute right-10 text-4xl mt-5 text-scorecolor">
              <p className="">7.3</p>
              </div>
          </div>
        </div>
      </div>
      <div className="inline-blocks bg-gradient-to-r from-bgcolor to-white mb-5 ml-8 w-1/2" >
        <p className="text-fontcolor">"一餐很好啊，选择也挺多的"</p>
        </div>
    </div>
  );
}

export default Object;