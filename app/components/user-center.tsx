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

export function UserCenter() {
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const config = useAppConfig();
  const updateConfig = config.update;
  const resetConfig = config.reset;
  const chatStore = useChatStore();

  const updateStore = useUpdateStore();
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const currentVersion = formatVersionDate(updateStore.version);
  const remoteId = formatVersionDate(updateStore.remoteVersion);
  const hasNewVersion = currentVersion !== remoteId;

  function checkUpdate(force = false) {
    setCheckingUpdate(true);
    updateStore.getLatestVersion(force).then(() => {
      setCheckingUpdate(false);
    });

    console.log(
      "[Update] local version ",
      new Date(+updateStore.version).toLocaleString(),
    );
    console.log(
      "[Update] remote version ",
      new Date(+updateStore.remoteVersion).toLocaleString(),
    );
  }

  function userInfo() {
    let token = getLocalStorage("access_token");
    return fetch(serverConfig.apiHost + "/api/auth/userinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        if (data.code !== 200 && data.code !== 10001) {
          alert(data.message);
          return Promise.resolve(data.data);
        } else if (data.code == 10001) {
          localStorage.removeItem("access_token");
          location.href = "/#/login";
          return Promise.resolve(data.data);
        } else {
          return Promise.resolve(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
        return Promise.resolve(false);
      });
  }

  const usage = {
    used: updateStore.used,
    subscription: updateStore.subscription,
  };
  const [loadingUsage, setLoadingUsage] = useState(false);

  const accessStore = useAccessStore();
  const enabledAccessControl = useMemo(
    () => accessStore.enabledAccessControl(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const promptStore = usePromptStore();
  const builtinCount = SearchService.count.builtin;
  const customCount = promptStore.getUserPrompts().length ?? 0;
  const [shouldShowPromptModal, setShowPromptModal] = useState(false);
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [invitationUrl, setInvitationUrl] = useState("");

  useEffect(() => {
    // checks per minutes
    checkUpdate();
    userInfo().then((data) => {
      setEmail(data.email);
      setNum(data.send_num);
      setInvitationCode(data.invitation_code);
      setInvitationUrl(
        "http://chat.logues.cn/#/register?InvitationCode=" +
          data.invitation_code,
      );
      console.log(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="window-header-main-title">
            {Locale.UserCenter.Title}
          </div>
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
        <List>
          <ListItem title={Locale.UserCenter.Email} subTitle={email}>
            <div onClick={() => logout()}>
              <div className="link">{Locale.UserCenter.SwitchAccount}</div>
            </div>
          </ListItem>

          <ListItem title={Locale.UserCenter.SendNum} subTitle={num}>
            <div onClick={() => navigate(Path.Recharge)}>
              <div className="link">前往充值</div>
            </div>
          </ListItem>

          <ListItem
            title={Locale.UserCenter.InvitationCode}
            subTitle={invitationCode}
          >
            <div onClick={() => copyToClipboard(invitationCode)}>
              <div className="link">{"复制"}</div>
            </div>
          </ListItem>

          <ListItem
            title={Locale.UserCenter.InvitationUrl}
            subTitle={invitationUrl}
          >
            <div onClick={() => copyToClipboard(invitationUrl)}>
              <div className="link">{"复制"}</div>
            </div>
          </ListItem>
        </List>
      </div>
    </ErrorBoundary>
  );
}
