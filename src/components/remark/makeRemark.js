import { Button, Form, Input, Modal, message, Rate } from "antd/es";
import { Content } from "antd/es/layout/layout";
import React, { useState } from 'react';

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
    const [form] = Form.useForm();
    const onFinish = ({ score, introduce }) => {
        if (!score) message.error("请给出评价分数");
        else {
            message.success("提交成功");
            setIsModalOpen(false);
        }
    };
    return (
        <Content className="ml-auto mt-6">
            <Button
                style={{ backgroundColor: "#1E90FF", color: "#FFFFFF" }}
                onClick={showModal}
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
                        <Rate defaultValue={3} />
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
