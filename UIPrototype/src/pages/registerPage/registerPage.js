import { message } from "antd";
import React, { useState, useEffect } from "react";

function RegisterPage() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [verificationCode, setVerificationCode] = useState(null);

  const handleSendVerification = () => {
    // 在这里添加发送验证码的代码
    const code = Math.floor(Math.random() * 1000000);
    setVerificationCode(code);

    const email = document.querySelector('input[name="email"]').value;

    // 检查邮箱地址是否有效
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error("Invalid email address");
      return;
    }

    //创建邮件内容
    const mailData = {
      subject: "【交集社区】",
      message: `您的邮箱正在找回密码或者注册交集社区，验证码为${code}`,
    };

    fetch(`http://localhost:8080/mail/send/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    // 禁用按钮并开始倒计时

    setButtonDisabled(true);
    setCountdown(60);
  };

  const handleRegister = (event) => {
    // 阻止表单的默认提交行为
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const inputVerificationCode = document.querySelector(
      'input[name="verificationCode"]'
    ).value;
    const password = document.querySelector('input[name="password"]').value;

    console.log("hello");
    console.log(verificationCode);
    console.log(inputVerificationCode);

    // 检查输入框是否为空

    if (!email) {
      alert("Email is required");
      return;
    }
    if (!inputVerificationCode) {
      alert("Verification code is required");
      return;
    }
    if (!password) {
      alert("Password is required");
      return;
    }

    if (verificationCode == null) alert("Please send verification code again!");
    else if (inputVerificationCode.toString() !== verificationCode.toString()) {
      alert("Verification code is incorrect");
    } else {
      // 创建用户数据

      const userData = {
        email: email,
        password: password,
      };

      // 发送 POST 请求
      fetch(`http://localhost:8080/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            message.success(data.msg);
            message.success("Register successfully");
          } else message.error(data.msg);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // 在这里添加注册的代码
  };

  // 每秒更新倒计时
  useEffect(() => {
    if (isButtonDisabled && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setButtonDisabled(false);
    }
  }, [isButtonDisabled, countdown]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <form onSubmit={handleRegister}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-item block w-full p-2 border border-gray-300 rounded mt-4"
          />
          <button
            type="button"
            className={`btn1 block w-full p-2 rounded mt-4 ${
              isButtonDisabled ? "bg-black opacity-50" : "bg-blue-500"
            } text-white`}
            onClick={handleSendVerification}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled
              ? `Resend in ${countdown} seconds`
              : "Send Verification Code"}
          </button>
          <input
            type="text"
            name="verificationCode"
            placeholder="Verification Code"
            className="input-item block w-full p-2 border border-gray-300 rounded mt-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-item block w-full p-2 border border-gray-300 rounded mt-4"
          />
          <input
            className="btn1 block w-full bg-blue-500 text-white p-2 rounded mt-4"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
