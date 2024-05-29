import { setLogin } from "@/store/modules/loginInfo";
import { Avatar, Button, Form, Input, Modal, message } from "antd";
import { useState } from "react";
import avator from "../assets/3000.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "@/store/modules/user";

export const Login = () => {

	const user_id = localStorage.getItem("id");
	// console.log(user_id);
	// const [isModalOpen, setIsModalOpen] = useState(false); //控制Modal是否弹出
	// const showModal = () => {
	//   setIsModalOpen(true);
	// };
	// const handleOk = () => {
	//   setIsModalOpen(false);
	// };
	// const handleCancel = () => {
	//   setIsModalOpen(false);
	// };

	// const { login } = useSelector((state) => state.login); //判断登录是否成功
	// const dispatch = useDispatch();

	// const isuser = localStorage.getItem("isuser");
	// if (isuser) dispatch(setLogin(true));
	// const { user } = useSelector((state) => state.user);
	// const onFinish = async ({ username, password }) => {
	//   if (!username) message.error("请输入用户名");
	//   else if (!password) message.error("请输入密码");
	//   else {
	//     let found = false;
	//     console.log(user);
	//     user.forEach((element) => {
	//       console.log(element.username, username, element.password, password);
	//       if (element.username === username && element.password === password) {
	//         message.success("登录成功");
	//         localStorage.setItem("isuser", true);
	//         localStorage.setItem("user", username);
	//         localStorage.setItem("psw", password);
	//         found = true;
	//         setIsModalOpen(false);
	//       }
	//     });
	//     if (!found) message.error("用户名或密码错误");
	//   }
	// };

	// const onFinishReg = async ({ username, password }) => {
	//   if (!username) message.error("请输入用户名");
	//   else if (!password) message.error("请输入密码");
	//   else {
	//     user.forEach((element) => {
	//       if (element.name === username) {
	//         message.error("用户已存在");
	//       }
	//     });
	//     dispatch(addUser({ username, password }));
	//     message.success("注册成功");
	//   }
	// };

	// const [loginBox, setLoginBox] = useState(true);
	// const [regBox, setRegBox] = useState(false);
	// const goLogin = () => {
	//   setRegBox(false);
	//   setLoginBox(true);
	// };
	// const goReg = () => {
	//   setLoginBox(false);
	//   setRegBox(true);
	// };
	// const user_id = 1;
	return (

		<Link to={{ pathname: `/user/${user_id}` }}>
			<div
				className="cursor-pointer" //成功登录，显示头像，否则显示登录按钮
			>
				<span className=" relative top-0 right-5 ">
					<Avatar src={<img src={avator} alt="avatar" />} size={64} />
				</span>
			</div>
		</Link>
		// <>
		//   {login && (
		//     <Link to={{ pathname: "/user" }}>
		//       <div
		//         className="cursor-pointer" //成功登录，显示头像，否则显示登录按钮
		//       >
		//         <span className=" relative top-0 right-5 ">
		//           <Avatar src={<img src={avator} alt="avatar" />} size={64} />
		//         </span>
		//       </div>
		//     </Link>
		//   )}

		//   {!login && (
		//     <Button className="bg-green-300" onClick={showModal}>
		//       登录
		//     </Button>
		//   )}
		//   <Modal
		//     open={isModalOpen}
		//     onOk={handleOk}
		//     onCancel={handleCancel}
		//     footer={null}
		//   >
		//     {loginBox && (
		//       <>
		//         <p className="flex justify-center mb-5 mt-10">请登录</p>
		//         <Form validateTrigger="onBlur" onFinish={onFinish}>
		//           <Form.Item className="w-4/5" label="用户名：" name="username">
		//             <Input size="large" placeholder="请输入账号" />
		//           </Form.Item>
		//           <Form.Item
		//             label="密码："
		//             className="w-4/5 left-3 relative"
		//             name="password"
		//           >
		//             <Input.Password size="large" placeholder="请输入密码" />
		//           </Form.Item>
		//           <Form.Item
		//             style={{
		//               display: "flex",
		//               alignItems: "center",
		//               flexDirection: "column",
		//             }}
		//           >
		//             <div>
		//               没有账号?
		//               <span className="text-green-300" onClick={goReg}>
		//                 前往注册
		//               </span>
		//             </div>
		//             <Button
		//               type="primary"
		//               htmlType="submit"
		//               className=" bg-blue-500"
		//               size="large"
		//             >
		//               登录
		//             </Button>
		//           </Form.Item>
		//         </Form>
		//       </>
		//     )}

		//     {regBox && (
		//       <>
		//         <p className="flex justify-center mb-5 mt-10">请登录</p>
		//         <Form validateTrigger="onBlur" onFinish={onFinishReg}>
		//           <Form.Item className="w-4/5" label="用户名：" name="username">
		//             <Input size="large" placeholder="请输入账号" />
		//           </Form.Item>
		//           <Form.Item
		//             label="密码："
		//             className="w-4/5 left-3 relative"
		//             name="password"
		//           >
		//             <Input.Password size="large" placeholder="请输入密码" />
		//           </Form.Item>
		//           <Form.Item
		//             style={{
		//               display: "flex",
		//               alignItems: "center",
		//               flexDirection: "column",
		//             }}
		//           >
		//             <Button
		//               type="primary"
		//               htmlType="submit"
		//               className=" bg-blue-500"
		//               size="large"
		//             >
		//               注册
		//             </Button>
		//           </Form.Item>
		//           <div>
		//             已有账号?
		//             <span className="text-green-300" onClick={goLogin}>
		//               前往登录
		//             </span>
		//           </div>
		//         </Form>
		//       </>
		//     )}
		//   </Modal>
		// </>
	);
};
