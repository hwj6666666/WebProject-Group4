import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import profile_photo from "@/assets/3000.png";

export const UserAvatar = () => {
	return (
		<Space direction="vertical" size={16}>
			<Space wrap size={16}>
				{/* <Avatar size={140} icon={<UserOutlined />} /> */}
				<Avatar size={140} src={<img src={profile_photo} alt="avatar" />} />
			</Space>
		</Space>
	)
};