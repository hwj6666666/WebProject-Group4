import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    navigate("/");
    message.success("登录成功");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card title="Login" style={{ width: 300 }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ backgroundColor: "blue" }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
