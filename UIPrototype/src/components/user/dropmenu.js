import { Button, Dropdown, Form, Input, Modal, Popconfirm, message } from "antd/es";

import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/modules/user";
import { setLogin } from "@/store/modules/loginInfo";

const Setting=()=>{
      //修改密码

      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    const changepsw=()=>{
        showModal()
    }
    const dispatch=useDispatch()
        const onFinish=async (form)=>{
             const oldPW=localStorage.getItem('psw')
              if(!form.oldpassword||!form.password||!form.confirm){
              message.error('请输入完整信息',0.6)
            }
              else if(form.password!==form.confirm)
              message.error('两次输入的新密码不一致',1)
            
            else if(form.oldpassword!==oldPW){
                
            message.error('旧密码错误',0.8)}
             else{
                const pw=form.password
                const user=localStorage.getItem('user')
                console.log(user)
                dispatch(setUser({user,pw}))
                message.success('修改成功',0.8)
                setIsModalOpen(false)
            } 
            }
    const navigate=useNavigate()
    const onConfirm=()=>{
        localStorage.clear('isLoggedIn')
        localStorage.clear('id')
        dispatch(setLogin(false))
        navigate('/login')
    }

    const items = [
        {
          key: '1',
          label: (
            <p onClick={changepsw}>
              修改密码
            </p>
          ),
        },
        {
          key: '2',
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
    return <> <Dropdown
    menu={{
      items,
    }}
    placement="bottomLeft"
  >
    <SettingOutlined className="text-4xl" />
  </Dropdown><Modal title="请修改你的密码" open={isModalOpen}
            footer={null}  onCancel={handleCancel}>
        <Form
                layout="vertical"
                preserve={false}
                onFinish={onFinish}
            >
              <Form.Item
                    name="oldpassword"
                    label="旧密码"
                    required
                >
                  <Input.Password placeholder="请输入旧密码" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="新密码"
                    required
                >
                    <Input.Password  placeholder="请输入新密码" />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="确认新密码"
                    required
                >
                    <Input.Password placeholder="请再次输入新密码" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="bg-blue-500">
                        确认
                    </Button>
                </Form.Item>
            </Form>
      </Modal></>
}

export default Setting