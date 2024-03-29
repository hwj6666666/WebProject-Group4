//这个组件是对象页面的每一个对象，包含话题名称，简介，以及图片
import React from 'react';
import { Card } from 'antd';

const Object = () => (
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default Object;