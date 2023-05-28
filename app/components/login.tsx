import * as React from "react";
import * as ReactDOM from "react-dom";
import loginStyle from "./login.module.scss";
import Locale from "../locales";
import ChatGptIcon from "../icons/chatgpt.svg";
import { getServerSideConfig } from "../config/server";
import { setLocalStorage, getLocalStorage } from "../common/localStorage";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
const serverConfig = getServerSideConfig();

export function Login(this: any) {
  const email = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();

  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate("/");
  };

  let token = getLocalStorage("access_token");
  if (token) {
    location.href = "/#/";
  }

  const loginClick = () => {
    console.log("Input 1 value: ", email.current?.value);
    console.log("Input 2 value: ", password.current?.value);

    let email_val = email.current?.value.trim();
    let password_val = password.current?.value.trim();
    let host = serverConfig.apiHost;

    if (!email_val) {
      alert("请输入邮箱");
      return;
    }
    if (!password_val) {
      alert("请输入密码");
      return;
    }
    fetch(host + "/api/auth/email-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email_val,
        password: password_val,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code !== 200) {
          alert(data.message);
        }
        // 保存数据到localStorage
        let access_token = data.data.authentication.access_token;
        let expires_time = data.data.authentication.expires_time;
        let token_type = data.data.authentication.token_type;
        if (access_token) {
          setLocalStorage(
            "access_token",
            token_type + " " + access_token,
            expires_time,
          );
          loginSuccess();
        }
      })
      .catch((error) => {});
  };

  return (
    <ErrorBoundary>
      <div style={{ position: "relative" }}>
        <div className="window-header">
          <div className="window-header-title">
            <div className="window-header-main-title">{Locale.Login.Title}</div>
          </div>
        </div>
        <div className={loginStyle["login-page"]}>
          <div className={loginStyle["login-page-box"]}>
            <div className={loginStyle["login-page-main-icon"]}>
              <ChatGptIcon />
            </div>
            <div className={loginStyle["login-page-main"]}>
              <div className={loginStyle["login-page-email-div"]}>
                <div className={loginStyle["login-page-div-text"]}>
                  邮&nbsp;&nbsp;&nbsp;&nbsp;箱：
                </div>
                <input
                  ref={email}
                  className={loginStyle["login-page-div-input-email"]}
                  type="text"
                  placeholder="请输入邮箱"
                />
              </div>
              {/*<div className={loginStyle["login-page-div"]}>*/}
              {/*    <div className={loginStyle["login-page-div-text"]}>验证码：</div>*/}
              {/*    <input className={loginStyle["login-page-div-input-code"]} type="text" placeholder="请输入验证码"/>*/}
              {/*    <div className={loginStyle["login-page-div-input-code-get"]} onClick={() => getCode()}>获取验证码</div>*/}
              {/*</div>*/}
              <div className={loginStyle["login-page-div"]}>
                <div className={loginStyle["login-page-div-text"]}>
                  密&nbsp;&nbsp;&nbsp;&nbsp;码：
                </div>
                <input
                  ref={password}
                  className={loginStyle["login-page-div-input-email"]}
                  type="password"
                  placeholder="请输入密码"
                />
              </div>
              <div
                className={loginStyle["login-page-div-center"]}
                style={{ marginTop: "30px" }}
              >
                <button
                  className={loginStyle["commit-btn"]}
                  onClick={loginClick}
                >
                  登录
                </button>
              </div>
              <div className={loginStyle["bottom-text"]}>
                <p
                  onClick={() => {
                    navigate(Path.Password);
                  }}
                  className={loginStyle["forget-password-register"]}
                >
                  忘记密码
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    marginLeft: "2px",
                    marginRight: "2px",
                  }}
                >
                  或
                </p>
                <p
                  onClick={() => {
                    navigate(Path.Register);
                  }}
                  className={loginStyle["forget-password-register"]}
                >
                  注册新账号
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );

  function goRegister() {
    console.log("点击了");
    location.href = "/register";
  }

  function getCode() {
    console.log("验证码按钮被点击了");
  }
}
