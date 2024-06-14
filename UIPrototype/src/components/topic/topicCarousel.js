import React from "react";
import { Carousel } from "antd";
import struct from "../../assets/交大建筑.png";
import relax from "../../assets/休闲.png";
import food from "../../assets/外卖.png";
const contentStyle = {
  height: "160px",
  color: 'var(--color-text-base)',
  lineHeight: "160px",
  textAlign: "center",
  background: 'var(--color-header-base)',
  fontcolor: 'var(--color-text-base)',
};
const TopicCarousel = () => (
  <div style={{borderRadius:"10px"}}>
  <Carousel autoplay className="ml-10 mt-24  ">
    <div className="bg-base">
      <a href="./topic/2"><img src={struct}/></a>
    </div>
    <div className="bg-base">
    <a href="./topic/8"><img src={food}/></a>
    </div>
    <div className="bg-base">
      <a href="./topic/6"><img src={relax}/></a>
    </div>
  </Carousel></div>
);
export default TopicCarousel;
