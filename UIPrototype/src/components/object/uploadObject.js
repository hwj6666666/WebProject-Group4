//这个组件是上传对象的按钮
import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";

const UploadObject = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch=useDispatch();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // const onFinish = ({ topic,classId,introduce }) => {
    //     if (!topic) message.error("请输入话题");
    //     else {
    //       message.success("提交成功");
    //       const mytopic={
    //         title: topic,
    //         introduction: introduce,
    //         userId:userid,
    //         classId:classId,
    //         base64:imageUrl,
    //       }
    //       dispatch(addTopic(mytopic))
    //       setIsModalOpen(false);
    //     }
    //   };

    // const handleObject = () => {
    //     if (localStorage.getItem('isuser'))
    //         showModal()
    //     else
    //         message.error('请登录', 0.5)
    // }

    return (<>
        <Button
            className="ml-auto w-28"
            style={{ backgroundColor: "#1E90FF", color: "#FFFFFF" }}
            // onClick={handleObject}
        >上传对象</Button>
        {/* <Modal
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
                initialValues={{ classId: 11, introduce: '' }}    //默认值
            >
                <> <Form.Item name="topic" label="上传话题" required>
                    <Input placeholder="上传您想讨论的话题" />
                </Form.Item>
                    <Form.Item name="classId" label="分类">
                        <Select
                            defaultValue={11}
                            style={{ width: 120 }}
                            options={[
                                { value: 1, label: '美食' },
                                { value: 2, label: '知识' },
                                { value: 3, label: '娱乐' },
                                { value: 4, label: '汽车' },
                                { value: 5, label: '影视' },
                                { value: 6, label: '人文' },
                                { value: 7, label: '体育' },
                                { value: 8, label: '动植物' },
                                { value: 9, label: '游戏' },
                                { value: 10, label: '科技' },
                                { value: 11, label: '其他' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name="picture">
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            maxCount={1}
                            beforeUpload={handleUpload}
                        >
                            <UploadBotton />
                        </Upload>
                    </Form.Item></>
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
        </Modal> */}
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>)
}

export default UploadObject