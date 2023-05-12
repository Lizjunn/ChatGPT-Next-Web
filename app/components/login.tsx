import * as React from "react";
import * as ReactDOM from "react-dom";
import chatStyle from "./chat.module.scss";
import loginStyle from "./login.module.scss";
import LoginForm from "./LoginForm";
export function Login() {
  return (
    <div className={loginStyle["login-page"]}>
      <div className={loginStyle["login-page-div"]}>
        <input className={loginStyle["login-page-div-input"]} type="text" />
      </div>
      <div className={loginStyle["login-page-div"]}>
        <input className={loginStyle["login-page-div-input"]} type="text" />
      </div>
    </div>
  );
}
