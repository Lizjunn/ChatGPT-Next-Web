import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import * as ReactDOM from "react-dom";
import loginStyle from "./login.module.scss";
import Locale from "../locales";
import ChatGptIcon from "../icons/chatgpt.svg";
import { getServerSideConfig } from "../config/server";
import { setLocalStorage, getLocalStorage } from "../common/localStorage";
import { useNavigate } from "react-router-dom";
const serverConfig = getServerSideConfig();

function getParams(url: string, params: string) {
  var res = new RegExp("(?:&|/?)" + params + "=([^&$]+)").exec(url);
  return res ? res[1] : "";
}

export function Register(this: any) {
  const email = React.createRef<HTMLInputElement>();
  const code = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();
  const InvitationCodeRef = React.createRef<HTMLInputElement>();

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate("/");
  };

  let token = getLocalStorage("access_token");
  if (token) {
    // location.href = '/#/'
  }

  const InvitationCode = getParams(window.location.href, "InvitationCode");
  useEffect(() => {
    setInputValue(InvitationCode);
  }, [InvitationCode]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const loginClick = () => {
    console.log("Input 1 value: ", email.current?.value);
    console.log("Input 2 value: ", code.current?.value);
    console.log("Input 3 value: ", password.current?.value);
    console.log("Input 4 value: ", InvitationCodeRef.current?.value);

    let host = serverConfig.apiHost;
    fetch(host + "/api/auth/email-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current?.value,
        password: password.current?.value,
        code: code.current?.value,
        invitationCode: InvitationCodeRef.current?.value,
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
          <div className="window-header-main-title">
            {Locale.Register.Title}
          </div>
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
                邮&nbsp;&nbsp;&nbsp;&nbsp;箱:
              </div>
              <input
                ref={email}
                className={loginStyle["login-page-div-input-email"]}
                type="text"
                placeholder="请输入邮箱"
              />
            </div>
            <div className={loginStyle["login-page-div"]}>
              <div className={loginStyle["login-page-div-text"]}>验证码:</div>
              <input
                ref={code}
                className={loginStyle["login-page-div-input-code"]}
                type="text"
                placeholder="请输入验证码"
              />
              <div
                className={loginStyle["login-page-div-input-code-get"]}
                onClick={() => getCode()}
              >
                获取验证码
              </div>
            </div>
            <div className={loginStyle["login-page-div"]}>
              <div className={loginStyle["login-page-div-text"]}>
                密&nbsp;&nbsp;&nbsp;&nbsp;码:
              </div>
              <input
                ref={password}
                className={loginStyle["login-page-div-input-email"]}
                type="password"
                placeholder="请输入密码"
              />
            </div>
            <div className={loginStyle["login-page-div"]}>
              <div className={loginStyle["login-page-div-text"]}>邀请码:</div>
              <input
                ref={InvitationCodeRef}
                className={loginStyle["login-page-div-input-email"]}
                type="text"
                placeholder="请输入邀请码(非必填)"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div
              className={loginStyle["login-page-div-center"]}
              style={{ marginTop: "30px" }}
            >
              <button className={loginStyle["commit-btn"]} onClick={loginClick}>
                注册
              </button>
            </div>
            <p style={{ color: "#8d8c8c", fontSize: "15px" }} onClick={goLogin}>
              去登录~
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  function goLogin() {
    location.href = "/#/login";
  }

  function getCode() {
    console.log("验证码按钮被点击了");
  }
}
