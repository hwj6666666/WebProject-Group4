import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

export const UserAvatar = () => {
	return (
		<Space direction="vertical" size={16}>
			<Space wrap size={16}>
				<Avatar size={140} icon={<UserOutlined />} />
			</Space>
		</Space>
	)
};
