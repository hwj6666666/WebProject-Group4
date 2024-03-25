import { setLogin } from "@/store/modules/loginInfo";
import { Avatar, Button,Modal} from "antd";
import {useState } from "react";
import avator from '../../assets/rabit.jpg'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginBox  from "./loginBox";
export const Login=()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);              //控制Modal是否弹出
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };



      const {login}=useSelector(state=>state.login)                     //判断登录是否成功
      const dispatch=useDispatch()
      
  const isuser=localStorage.getItem('isuser')
  if(isuser)
    dispatch(setLogin(true))
      const {user}=useSelector(state=>state.user)
  
     
    

   



    return <>
           {login&& <Link  to={{ pathname: '/user'}}><div  className="cursor-pointer"               //成功登录，显示头像，否则显示登录按钮
            ><span  className=" relative top-0 right-5 "> 
            <Avatar 
            src={<img src={avator} alt="avatar" />}
            size={64}
             /></span>
            </div></Link>}

            {!login&& <Button className="bg-green-300" onClick={showModal}>登录</Button>}
        <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} 
      >
      <LoginBox setIsModalOpen={setIsModalOpen}/>
      </Modal></>
}