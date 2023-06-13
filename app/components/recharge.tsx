import { useState, useEffect, useMemo, HTMLProps, useRef } from "react";

import styles from "./settings.module.scss";

import ResetIcon from "../icons/reload.svg";
import AddIcon from "../icons/add.svg";
import CloseIcon from "../icons/close.svg";
import CopyIcon from "../icons/copy.svg";
import ClearIcon from "../icons/clear.svg";
import EditIcon from "../icons/edit.svg";
import EyeIcon from "../icons/eye.svg";
import { Input, List, ListItem, Modal, PasswordInput, Popover } from "./ui-lib";
import { ModelConfigList } from "./model-config";
import rechargeStyle from "./recharge.module.scss";

import { IconButton } from "./button";
import {
  SubmitKey,
  useChatStore,
  Theme,
  useUpdateStore,
  useAccessStore,
  useAppConfig,
} from "../store";

import Locale, { AllLangs, changeLang, getLang } from "../locales";
import { copyToClipboard } from "../utils";
import Link from "next/link";
import { Path, UPDATE_URL } from "../constant";
import { Prompt, SearchService, usePromptStore } from "../store/prompt";
import { ErrorBoundary } from "./error";
import { InputRange } from "./input-range";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarPicker } from "./emoji";
import { getServerSideConfig } from "../config/server";
const serverConfig = getServerSideConfig();
import { getLocalStorage, logout } from "../common/localStorage";
import chatStyle from "./chat.module.scss";
import RechargeIcon from "../icons/recharge.svg";
const FILE = "../../public/wx_pay.jpg";

function formatVersionDate(t: string) {
  const d = new Date(+t);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();

  return [
    year.toString(),
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
  ].join("");
}

export function Recharge() {
  const navigate = useNavigate();

  useEffect(() => {
    const keydownEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(Path.Home);
      }
    };
    document.addEventListener("keydown", keydownEvent);
    return () => {
      document.removeEventListener("keydown", keydownEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div className="window-header">
        <div className="window-header-title">
          <div className="window-header-main-title">{"充值"}</div>
        </div>
        <div className="window-actions">
          <div className="window-action-button">
            <IconButton
              icon={<CloseIcon />}
              onClick={() => navigate(Path.Home)}
              bordered
              title={Locale.UserCenter.Actions.Close}
            />
          </div>
        </div>
      </div>
      <div className={styles["settings"]}>
        <div className={rechargeStyle["img-page"]}>
          <div>
            <h3>1、邀请好友注册，可获得10-100次数奖励</h3>
            <a
              className={rechargeStyle["sub-title"]}
              onClick={() => {
                navigate(Path.UserCenter);
              }}
            >
              点击前往邀请
            </a>
            <h3>2、充值</h3>
            <p className={rechargeStyle["sub-title-p"]}>充值1元：25次</p>
            <p className={rechargeStyle["sub-title-p"]}>充值5元：200次</p>
            <p className={rechargeStyle["sub-title-p"]}>充值10元：500次</p>
            <p className={rechargeStyle["sub-title-p"]}>充值20元：1000次</p>
            <p className={rechargeStyle["sub-title-p"]}>
              注：问答一次即消耗一次
            </p>
            <p className={rechargeStyle["sub-title-p"]}>
              充值方式：添加客服好友或“转账时备注邮箱”
            </p>

            <div className={rechargeStyle["img-box"]}>
              <div>
                <img
                  style={{ width: "300px" }}
                  src="https://106.55.158.200/img/wx_user.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{ width: "300px" }}
                  src="https://106.55.158.200/img/wx_pay.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
