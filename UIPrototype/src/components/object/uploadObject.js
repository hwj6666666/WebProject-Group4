//这个组件是上传对象的按钮
import React, { useState } from "react";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import { useDispatch } from "react-redux";
import UploadBotton from "../UploadButton";
import { addObject } from "@/store/modules/object";

// const userId = localStorage.getItem("id");
// console.log('user_id' + user_id);
const UploadObject = ({ topicId }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const [form] = Form.useForm();

	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener("load", () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	const [imageUrl, setImageUrl] = useState("");
	const handleUpload = (file) => {
		getBase64(file, (imageUrl) => {
			setImageUrl(imageUrl);
		});
		return false; // 阻止自动上传
	};

	const onFinish = ({ title, introduce }) => {
		if (!title) message.error("请输入话题!");
		else if (!imageUrl) message.error("请上传图片！");
		else if (!introduce) message.error("请输入简介!");
		else {
			message.success("提交成功");
			const user_id = localStorage.getItem("id");
			const myobject = {
				title: title,
				description: introduce,
				userId: +user_id,
				topicId: topicId,
				picture: imageUrl,
			};
			dispatch(addObject(myobject));
			setIsModalOpen(false);
		}
	};

	const handleObject = () => {
		if (localStorage.getItem("isLoggedIn")) showModal();
		else message.error("请登录", 0.5);
	};

	return (
		<>
			<Button
				className="ml-auto w-28"
				style={{ backgroundColor: "#1E90FF", color: "#FFFFFF" }}
				onClick={handleObject}
			>
				上传对象
			</Button>
			<Modal
				title="上传对象"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<Form
					form={form}
					onFinish={onFinish}
					layout="vertical"
					preserve={false}
				>
					<>
						{" "}
						<Form.Item name="title" label="上传对象" required>
							<Input placeholder="上传您想讨论的话题" />
						</Form.Item>
						<Form.Item name="picture" required>
							<Upload
								action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
								listType="picture-card"
								maxCount={1}
								beforeUpload={handleUpload}
							>
								<UploadBotton />
							</Upload>
						</Form.Item>
					</>
					<Form.Item name="introduce" label="简介" required>
						<Input.TextArea
							showCount
							maxLength={200}
							placeholder="有简介更方便集友们讨论哦"
						/>
					</Form.Item>
					<Form.Item>
						<Button className="bg-blue-600" type="primary" htmlType="submit">
							提交
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default UploadObject;
