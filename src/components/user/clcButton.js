import React, { useState } from 'react';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const ClcButton = (iscollected) => {
	const [collected, setCollected] = useState(iscollected);

	const toggleCollecte = () => {
		setCollected(!collected);
	};

	return (
		<Button onClick={toggleCollecte} className="flex items-center">
			{collected ? <StarFilled className='text-yellow-500 text-xl mr-1' /> : <StarOutlined className='text-xl mr-1' />}
		</Button>
	);
};

export default ClcButton;
