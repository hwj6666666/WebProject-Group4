import { getUsersAPI } from "@/apis/remark";
import { fetchObject } from "@/store/modules/object";
import { addRemark } from "@/store/modules/remark";
import { Button, Form, Input, Modal, message, Rate } from "antd/es";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
export const MakeRemark = () => {
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
  const judge = () => {
    if (localStorage.getItem("isLoggedIn")) showModal();
    else message.error("请登录", 0.5);
  };

  const user = useRef();
  const fetchUser = async () => {
    return await getUsersAPI();
  };

  useEffect(() => {
    fetchUser().then((data) => {
      user.current = data;
    });
  }, []);

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async ({ score, remark }) => {
    if (!score) message.error("请给出评价分数");
    else {
      let date = new Date();
      let dateString = date.toISOString();
      const mark = {
        userId: localStorage.getItem("id"),
        objectId: 1,
        content: remark || "",
        like: 0,
        score: score * 2,
        publishTime: dateString,
      };
      dispatch(addRemark(mark));
      message.success("提交成功");
      setIsModalOpen(false);
    }
  };
  return (
    <Content className="ml-auto mt-3">
      <Button
        style={{
          backgroundColor: "#1E90FF",
          color: "#FFFFFF",
          width: 150,
          height: 35,
        }}
        onClick={judge}
      >
        立即评分
      </Button>
      <Modal
        title="评分"
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
          <Form.Item name="score" label="评分" required>
            <Rate initialValues={0} />
          </Form.Item>
          <Form.Item name="remark" label="评价">
            <Input.TextArea
              showCount
              maxLength={100}
              placeholder="请给出你的评价~"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Content>
  );
};
