import React from "react";
import "./loginStyle.css";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "lodash";
import { setId, setLoggedIn } from "@/store/modules/user";
import { Link } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  message.config({
    icon: {
      fontSize: 24,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          message.success(data.msg);
          navigate("/");
          dispatch(setLoggedIn(true));
          dispatch(setId(data.data));
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("id", data.data);
          if (data.data === 1) localStorage.setItem("isManager", true);
          else localStorage.setItem("isManager", false);
        } else {
          message.error(data.msg);
        }
      })
      .catch((error) => {});
  };

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      {contextHolder}
      <form className="loginform" onSubmit={handleSubmit}>
        <div className="header">登录</div>
        <div className="form-wrapper">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input-item"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input-item"
          />
          <div className="reg">
            <input type="checkbox" id="brand" value="" />
            <label for="brand">记住我</label>
            <Link to="/register">忘记密码</Link>
          </div>
          <input className="btn1" type="submit" value="登录"></input>
        </div>
        <div className="msg">
          还没有账号？
          <Link to="/register">前往注册</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
