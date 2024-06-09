import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};
const TopicCarousel = () => (
  <Carousel autoplay className="ml-5 mt-24 w-72">
    <div>
      <a href="http://localhost:3000/topic/1"><h3 style={contentStyle}>交大哪个餐饮大楼你去得最多？</h3></a>
    </div>
    <div>
      <a href="http://localhost:3000/topic/2"><h3 style={contentStyle}>你最喜欢哪一座交大建筑？</h3></a>
    </div>
    <div>
      <a href="http://localhost:3000/topic/3"><h3 style={contentStyle}>你最喜欢哪道菜肴</h3></a>
    </div>
  </Carousel>
);
export default TopicCarousel;
