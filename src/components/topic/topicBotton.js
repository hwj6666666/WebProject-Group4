//这个组件是话题页面其他相关的按钮，包括最新和最热的切换按钮，以及上传话题的按钮

import { addTopic, changeTopic } from "@/store/modules/topic";
import { Button, Divider, Form, Input, Modal, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
export const HeadButton = () => {
  const [focus, setFocus] = useState(true);
  
  const topic=useSelector(state=>state.topic).topic
  console.log(topic)
  const dispatch=useDispatch()
  const setNew = () => {
    dispatch(changeTopic(_.orderBy(topic,'time','desc')))
    setFocus(true);
  };
  const setHot = () => {
    dispatch(changeTopic(_.orderBy(topic,'heat','desc')))
    setFocus(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const id=useSelector(state=>state.topic).len+1
  const onFinish = ({ topic, introduce }) => {
    if (!topic) message.error("请输入话题");
    else {
      message.success("提交成功");
      const mytopic={
        title: topic,
        hotComments: [],
        heat: 0,
        id: id,
      }
      dispatch(addTopic(mytopic))
      setIsModalOpen(false);
    }
  };

  const handleTopic=()=>{
    if(localStorage.getItem('isuser'))
      showModal()
    else
      message.error('请登录',0.5)
  }
  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px",
      }}
    >
      <div className="border border-black">
        <Button
          type="text"
          style={focus && { color: "#1E90FF" }}
          onClick={() => {
            setNew();
          }}
        >
          最新
        </Button>
        <Divider type="vertical" style={{ backgroundColor: "gray" }}></Divider>
        <Button
          type="text"
          style={!focus && { color: "#1E90FF" }}
          onClick={() => {
            setHot();
          }}
        >
          最热
        </Button>
      </div>
      <Button
        style={{ backgroundColor: "#1E90FF", color: "#FFFFFF" }}
        onClick={handleTopic}
      >
        上传话题
      </Button>
      <Modal
        title="Basic Modal"
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
          <Form.Item name="topic" label="上传话题" required>
            <Input placeholder="上传您想讨论的话题" />
          </Form.Item>
          <Form.Item name="introduce" label="简介">
            <Input.TextArea
              showCount
              maxLength={100}
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
    </Content>
  );
};
