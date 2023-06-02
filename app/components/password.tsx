import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import * as ReactDOM from "react-dom";
import loginStyle from "./login.module.scss";
import Locale from "../locales";
import ChatGptIcon from "../icons/chatgpt.svg";
import { getServerSideConfig } from "../config/server";
import { setLocalStorage, getLocalStorage } from "../common/localStorage";
import { useNavigate } from "react-router-dom";
import { showToast } from "./ui-lib";

const serverConfig = getServerSideConfig();

import { ErrorBoundary } from "./error";

function getParams(url: string, params: string) {
  var res = new RegExp("(?:&|/?)" + params + "=([^&$]+)").exec(url);
  return res ? res[1] : "";
}

export function Register(this: any) {
  const email = React.createRef<HTMLInputElement>();
  const code = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();
  const InvitationCodeRef = React.createRef<HTMLInputElement>();
  const [showContent, setShowContent] = useState(true); // 定义布尔值状态
  const [content, setContent] = useState(""); // 定义内容状态
  const [remainingSeconds, setRemainingSeconds] = useState<number>(60);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const registerSuccess = () => {
    navigate("/#/login");
  };

  let token = getLocalStorage("access_token");
  if (token) {
    location.href = "/#/";
  }

  const loginClick = () => {
    let host = serverConfig.apiHost;
    fetch(host + "/api/auth/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current?.value,
        password: password.current?.value,
        code: code.current?.value,
        invitationCode: InvitationCodeRef.current?.value,
        type: "forget-password",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code !== 200) {
          alert(data.message);
        } else {
          showToast(data.message);
          registerSuccess();
        }
      })
      .catch((error) => {});
  };

  const getCode = () => {
    console.log("验证码按钮被点击了111");
    fetch(serverConfig.apiHost + "/api/auth/register-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current?.value,
        type: "forget-password",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code !== 200) {
          alert(data.message);
        } else {
          showToast(data.message);
          setShowContent(!showContent);
          let timeLeft = 60; // 初始化时间
          const timer = setInterval(() => {
            timeLeft--; // 减少时间
            setContent(timeLeft + "秒");
            if (timeLeft === 0) {
              // 停止计时器
              clearInterval(timer);
              setShowContent(showContent);
            }
          }, 1000); // 每1000ms更新一次
        }
      })
      .catch((error) => {});
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="window-header">
        <div className="window-header-title">
          <div className="window-header-main-title">{"忘记密码"}</div>
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
              {showContent && (
                <div
                  className={loginStyle["login-page-div-input-code-get"]}
                  onClick={() => getCode()}
                >
                  获取验证码
                </div>
              )}

              {/*<button onClick={getCode}>Toggle Content</button> /!* 点击按钮切换状态 *!/*/}

              {!showContent && (
                <div className={loginStyle["login-page-div-input-code-times"]}>
                  {content}
                </div>
              )}
            </div>
            <div className={loginStyle["login-page-div"]}>
              <div className={loginStyle["login-page-div-text"]}>新密码:</div>
              <input
                ref={password}
                className={loginStyle["login-page-div-input-email"]}
                type="password"
                placeholder="请输入新密码"
              />
            </div>

            <div
              className={loginStyle["login-page-div-center"]}
              style={{ marginTop: "30px" }}
            >
              <button className={loginStyle["commit-btn"]} onClick={loginClick}>
                重置密码
              </button>
            </div>
            <p style={{ color: "#585e6d", fontSize: "14px" }} onClick={goLogin}>
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
}
