import React from "react";
import { Carousel } from "antd";
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
      <h3 style={contentStyle}>交大哪个餐饮大楼你去得最多？</h3>
    </div>
    <div className="bg-base">
      <h3 style={contentStyle}>你最喜欢哪一座交大建筑？</h3>
    </div>
    <div className="bg-base">
      <h3 style={contentStyle}>你最喜欢哪家快餐店</h3>
    </div>
  </Carousel></div>
);
export default TopicCarousel;
