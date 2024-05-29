import { Button, Dropdown, Form, Input, Modal, Popconfirm, Upload, message } from "antd/es";
import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updatePassword, updateUser } from "@/store/modules/user";
import { setLogin } from "@/store/modules/loginInfo";
import UploadBotton from "../UploadButton";

const Setting = () => {

	const userid = localStorage.getItem("id");
	const [isPsdModalOpen, setIsPsdModalOpen] = useState(false);
	const [isProModalOpen, setIsProModalOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const curUser = useSelector(state => state.user).user
	const [form] = Form.useForm();
	const onPsdFinish = async (form) => {
		if (!form.oldpassword || !form.password || !form.confirm)
			message.error('请输入完整信息', 0.6)
		else if (form.password !== form.confirm)
			message.error('两次输入的新密码不一致', 1)
		else if (form.oldpassword !== curUser.password) {
			console.log(curUser.password)
			message.error('旧密码错误', 0.8)
		}
		else {
			const UidandPsd = {
				id: userid,
				password: form.password,
			}
			console.log(UidandPsd)
			dispatch(updatePassword(UidandPsd))
			message.success('修改成功', 0.8)
			setIsPsdModalOpen(false)
		}
	}
	const onProFinish = async ({ username, note }) => {
		// console.log(imageUrl)
		const newProfile = {
			id: userid,
			username: username || curUser.username,
			note: note || curUser.note,
			avatar: imageUrl || curUser.avatar
		}
		dispatch(updateUser(newProfile))
		message.success('修改成功', 0.8)
		setIsProModalOpen(false)
	}
	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener("load", () => callback(reader.result));
		reader.readAsDataURL(img);
	}
	const handleUpload = (file) => {
		getBase64(file, (imageUrl) => {
			setImageUrl(imageUrl);
		});
		return false;
	};
	const onConfirm = () => {
		localStorage.clear('isLoggedIn')
		localStorage.clear('id')
		dispatch(setLogin(false))
		navigate('/login')
	}
	const items = [
		{
			key: '1',
			label: (
				<p onClick={() => { setIsProModalOpen(true) }}>
					修改个人信息
				</p>
			),
		},
		{
			key: '2',
			label: (
				<p onClick={() => { setIsPsdModalOpen(true) }}>
					修改密码
				</p>
			),
		},
		{
			key: '3',
			label: (
				<div onClick={(e) => e.stopPropagation()}>
					<Popconfirm title="确认退出登录吗?" okText="退出" okType="danger" cancelText="取消" onConfirm={onConfirm}>
						<div>
							退出登录
						</div>
					</Popconfirm></div>
			),
		},
	];
	return (
		<>
			<Dropdown
				menu={{ items }}
				placement="bottomLeft"
			>
				<SettingOutlined className="text-4xl" />
			</Dropdown>

			<Modal
				title="请修改你的密码"
				open={isPsdModalOpen}
				onOk={() => { setIsPsdModalOpen(false) }}
				onCancel={() => { setIsPsdModalOpen(false) }}
				footer={null} >
				<Form
					form={form}
					onFinish={onPsdFinish}
					layout="vertical"
					preserve={false}
				>
					<Form.Item name="oldpassword" label="旧密码" required >
						<Input.Password placeholder="请输入旧密码" />
					</Form.Item>

					<Form.Item name="password" label="新密码" required >
						<Input.Password placeholder="请输入新密码" />
					</Form.Item>

					<Form.Item name="confirm" label="确认新密码" required >
						<Input.Password placeholder="请再次输入新密码" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="bg-blue-500">
							确认
						</Button>
					</Form.Item>
				</Form>
			</Modal>

			<Modal
				title="修改你的个人信息"
				open={isProModalOpen}
				onOk={() => { setIsProModalOpen(false) }}
				onCancel={() => { setIsProModalOpen(false) }}
				footer={null}>
				<Form
					form={form}
					onFinish={onProFinish}
					layout="vertical"
					preserve={false}
				>
					<Form.Item name="username" label="用户名" >
						<Input placeholder={curUser.username} />
					</Form.Item>

					<Form.Item name="note" label="签名" >
						<Input placeholder={curUser.note} />
					</Form.Item>

					<Form.Item name="avatar" label="上传头像">
						<Upload
							action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
							listType="picture-card"
							maxCount={1}
							beforeUpload={handleUpload}
						>
							<UploadBotton />
						</Upload>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="bg-blue-500">
							确认
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>)
}

export default Setting