import { changeLike, fetchLike } from '@/store/modules/remark';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LikeButton = ({ remarkId }) => {
  const dispatch = useDispatch();
  const remark = useSelector(state => state.remark).remark.find(r => r.id === remarkId);

  const toggleLike = () => {
    dispatch(changeLike(remark.id));
  };

  useEffect(() => {
    console.log('fetch like');
    dispatch(fetchLike(remarkId));
  }, [dispatch, remark]);

  return (
    <Button onClick={toggleLike} className="like-button flex items-center text-gray-500">
      {remark.liked ? <HeartFilled className='text-red-500 mr-1' /> : <HeartOutlined className='mr-1' />}
      {remark.like}
    </Button>
  );
};

export default LikeButton;
