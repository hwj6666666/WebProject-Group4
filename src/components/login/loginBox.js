import { setLogin } from "@/store/modules/loginInfo";
import { addUser } from "@/store/modules/user";
import {Button, Form, Input,message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginBox=({setIsModalOpen})=>{                   
    const dispatch=useDispatch()
    const isuser=localStorage.getItem('isuser')
    if(isuser)                                       //判断是否登录
      dispatch(setLogin(true))
        const {user}=useSelector(state=>state.user)
        const onFinishReg=({ username, password })=>{
            if (!username) message.error("请输入用户名");
            else if (!password) message.error("请输入密码");
             else {
               user.forEach(element => {
                 if(element.name===username){
                     message.error('用户已存在')  
                  }
               });
                    dispatch(addUser({username, password }))
                     message.success('注册成功')
             }
          }

    const onFinishLog = ({ username, password }) => {
        if (!username) message.error("请输入用户名");
       else if (!password) message.error("请输入密码");
        else {
            let found=false
          user.forEach(element => {
            
            if(element.username===username&&element.password===password){
                message.success('登录成功')
                localStorage.setItem('isuser',true)
                found=true
             }
            })
              if(!found)
              message.error('用户名或密码错误')
            setIsModalOpen(false);} 
          };


          const [show,setShow]=useState(true)
          
    return <>{show&&<><p className="flex justify-center mb-5 mt-10">请登录</p>
            <Form validateTrigger="onBlur"  onFinish={onFinishLog}  >  
                <Form.Item 
                className="w-4/5" 
                label="用户名："
                name="username"
                >
                    <Input size="large" placeholder="请输入账号" />
                </Form.Item>
                <Form.Item 
                label="密码：" 
                style={{ width: '367px' }}
                className=" left-3 relative" 
                name="password">
                    <Input.Password size="large" placeholder="请输入密码" />
                </Form.Item>
                <Form.Item style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <div className="mb-5">没有账号?<span className="text-green-300 cursor-pointer"
                     onClick={()=>{setShow(false)}}>前往注册</span></div>
                    <Button type="primary" htmlType="submit" className=" bg-blue-500" size="large" >
                        登录
                    </Button>
                </Form.Item>
                
            </Form></>}
            
            
            {!show&& <><p className="flex justify-center mb-5 mt-10">请登录</p>
    <Form validateTrigger="onBlur"  onFinish={onFinishReg}  >  
        <Form.Item 
        className="w-4/5" 
        label="用户名："
        name="username"
        >
            <Input size="large" placeholder="请输入账号" />
        </Form.Item>
        <Form.Item 
        label="密码："
        className="w-4/5 left-3 relative" 
        name="password">
            <Input.Password size="large" placeholder="请输入密码" />
        </Form.Item>
        <Form.Item style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
            <Button type="primary" htmlType="submit" className=" bg-blue-500" size="large" >
               注册
            </Button>
        </Form.Item>
        <div>已有账号?<span className="text-green-300 cursor-pointer" onClick={()=>{setShow(true)}}>前往登录</span></div>
    </Form></>}
            
            </>
}

export default LoginBox