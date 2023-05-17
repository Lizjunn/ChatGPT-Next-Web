import moment from "moment";
import { useNavigate, redirect, useLocation } from "react-router-dom";
import loginStyle from "../components/login.module.scss";
import * as React from "react";
import { showToast } from "../components/ui-lib";
import Locale from "../locales";
// 存储数据到 localStorage 中
export const setLocalStorage = (
  key: string,
  value: any,
  expiredTime?: string,
) => {
  const expiredTimestamp = expiredTime ? moment(expiredTime).valueOf() : null;
  const cacheData = {
    data: value,
    expiredTimestamp,
  };
  localStorage.setItem(key, JSON.stringify(cacheData));
};

const token_key = "access_token";

// 从 localStorage 中获取数据，并判断是否过期
export const getLocalStorage = (key: string) => {
  const cacheDataStr = localStorage.getItem(key);
  if (!cacheDataStr) {
    return null;
  }
  const cacheData = JSON.parse(cacheDataStr);
  const { data, expiredTimestamp } = cacheData;
  if (!expiredTimestamp) {
    return data;
  }
  const currentTimestamp = moment().valueOf();
  if (currentTimestamp / 1000 < expiredTimestamp) {
    return data;
  }
  localStorage.removeItem(key);
  return null;
};

/**
 * 检查是否登录
 */
export const checkLogin = () => {
  const whiteList = ["register"];

  const url1 = window.location.href;
  const regex = /#\/([^?/]+)/; // 匹配斜杠后面的非斜杠字符
  const match1 = url1.match(regex);
  let pageName = "";
  if (match1) {
    pageName = match1[1];
  }

  if (!whiteList.includes(pageName)) {
    let token = getLocalStorage("access_token");
    if (!token) {
      location.href = "/#/login";
    }
  }
};

export const logout = () => {
  localStorage.removeItem(token_key);
  showToast(Locale.Home.LogoutSuccess);
  location.href = "/#/login";
};
