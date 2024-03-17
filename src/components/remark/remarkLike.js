import React, { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Button onClick={toggleLike} className="like-button">
      {liked ? <HeartFilled className='text-red-500'/> : <HeartOutlined />}
    </Button>
  );
};

export default LikeButton;
