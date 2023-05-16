import * as React from "react";
import * as ReactDOM from "react-dom";
import loginStyle from "./login.module.scss";
import Locale from "../locales";
import ChatGptIcon from "../icons/chatgpt.svg";
import { getServerSideConfig } from "../config/server";
import { setLocalStorage, getLocalStorage } from "../common/localStorage";
import { useNavigate } from "react-router-dom";
const serverConfig = getServerSideConfig();

export function Login(this: any) {
  const input1Ref = React.createRef<HTMLInputElement>();
  const input2Ref = React.createRef<HTMLInputElement>();

  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate("/");
  };

  let token = getLocalStorage("access_token");

  if (token) {
    // location.href = '/#/'
  }

  const loginClick = () => {
    console.log("Input 1 value: ", input1Ref.current?.value);
    console.log("Input 2 value: ", input2Ref.current?.value);

    let host = serverConfig.apiHost;
    fetch(host + "/api/auth/email-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input1Ref.current?.value,
        password: input2Ref.current?.value,
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
            <div className={loginStyle["login-page-div"]}>
              <div className={loginStyle["login-page-div-text"]}>
                邮&nbsp;&nbsp;&nbsp;&nbsp;箱：
              </div>
              <input
                ref={input1Ref}
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
                ref={input2Ref}
                className={loginStyle["login-page-div-input-email"]}
                type="password"
                placeholder="请输入密码"
              />
            </div>
            <div
              className={loginStyle["login-page-div-center"]}
              style={{ marginTop: "30px" }}
            >
              <button className={loginStyle["commit-btn"]} onClick={loginClick}>
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function getCode() {
    console.log("验证码按钮被点击了");
  }
}
