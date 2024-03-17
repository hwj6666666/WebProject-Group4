//这个组件是话题页面其他相关的按钮，包括最新和最热的切换按钮，以及上传话题的按钮

import { Button, Divider, Form, Input, Modal, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

export const HeadButton = () => {
  const [focus, setFocus] = useState(true);
  const setNew = () => {
    setFocus(true);
  };

  const setHot = () => {
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
  const onFinish = ({ topic, introduce }) => {
    if (!topic) message.error("请输入话题");
    else {
      message.success("提交成功");
      setIsModalOpen(false);
    }
  };
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
          ghost
          motion={false}
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
          ghost
          motion={false}
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
        onClick={showModal}
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
