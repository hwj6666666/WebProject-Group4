import { Avatar, Space } from 'antd';

export const UserAvatar = ({ avatar }) => {
	return (
		<Space direction="vertical" size={16}>
			<Space wrap size={16}>
				{/* <Avatar size={140} icon={<UserOutlined />} /> */}
				<Avatar size={140} src={<img src={avatar} alt="avatar" />} />
			</Space>
		</Space>
	)
};
