import * as React from "react";
import loginStyle from "./login.module.scss";
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
