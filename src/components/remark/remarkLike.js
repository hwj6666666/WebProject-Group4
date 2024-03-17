import React, { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton = ({ likes }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Button onClick={toggleLike} className="like-button flex items-center">
      {liked ? <HeartFilled className='text-red-500 mr-1' /> : <HeartOutlined className='mr-1' />}
      {likes + liked}
    </Button>
  );
};

export default LikeButton;
