//这个组件是话题页面其他相关的按钮，包括最新和最热的切换按钮，以及上传话题的按钮

import { addTopic, changeTopic } from "@/store/modules/topic";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import UploadBotton from "../UploadButton";
export const HeadButton = () => {
  const [focus, setFocus] = useState(true);

  const topic = useSelector((state) => state.topic).topic;
  const dispatch = useDispatch();
  const setNew = () => {
    dispatch(changeTopic(_.orderBy(topic, "publicTime", "desc")));
    setFocus(true);
  };
  const setHot = () => {
    dispatch(changeTopic(_.orderBy(topic, "hot", "desc")));
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

  //图片转base64
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  //上传图片
  const [imageUrl, setImageUrl] = useState("");
  const handleUpload = (file) => {
    getBase64(file, (imageUrl) => {
      setImageUrl(imageUrl);
    });
    return false; // 阻止自动上传
  };

  //获取用户id
  const userid = localStorage.getItem("id");
  //提交话题
  const onFinish = ({ topic, classId, introduce }) => {
    console.log(imageUrl);
    if (!topic) message.error("请输入话题!");
    else if (!imageUrl) message.error("请上传图片!");
    else if (!introduce) message.error("请输入简介!");
    else {
      const mytopic = {
        title: topic,
        introduction: introduce,
        userId: userid,
        classId: classId,
        base64: imageUrl,
      };
      dispatch(addTopic(mytopic));
      setIsModalOpen(false);
    }
  };

  const handleTopic = () => {
    if (localStorage.getItem("isLoggedIn")) showModal();
    else message.error("请登录", 0.5);
  };

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px",
      }}
    >
      <div className="bg-header rounded-lg">
        <Button
          type="text"
          classNames="bg-header text-base"
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
          classNames="bg-header text-base"
          style={!focus && { color: "#1E90FF" }}
          onClick={() => {
            setHot();
          }}
        >
          最热
        </Button>
      </div>
      <Button
        className="bg-header"
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
          initialValues={{ classId: 11, introduce: "" }} //默认值
        >
          <>
            {" "}
            <Form.Item name="topic" label="上传话题" required>
              <Input placeholder="上传您想讨论的话题" />
            </Form.Item>
            <Form.Item name="classId" label="分类" required>
              <Select
                defaultValue={11}
                style={{ width: 120 }}
                options={[
                  { value: 1, label: "美食" },
                  { value: 2, label: "知识" },
                  { value: 3, label: "娱乐" },
                  { value: 4, label: "汽车" },
                  { value: 5, label: "影视" },
                  { value: 6, label: "人文" },
                  { value: 7, label: "体育" },
                  { value: 8, label: "动植物" },
                  { value: 9, label: "游戏" },
                  { value: 10, label: "科技" },
                  { value: 11, label: "其他" },
                ]}
              />
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
