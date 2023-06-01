import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const en: {
  Context: { Add: string; Toast: (x: any) => string; Edit: string };
  Memory: {
    ResetConfirm: string;
    Copy: string;
    Title: string;
    Reset: string;
    EmptyContent: string;
    Send: string;
  };
  Mask: {
    Item: {
      Delete: string;
      Chat: string;
      Edit: string;
      Info: (count: number) => string;
      View: string;
      DeleteConfirm: string;
    };
    Config: { Avatar: string; Name: string };
    Page: {
      Create: string;
      Search: string;
      Title: string;
      SubTitle: (count: number) => string;
    };
    EditModal: {
      Title: (readonly: boolean) => string;
      Download: string;
      Clone: string;
    };
    Name: string;
  };
  Error: { Unauthorized: string };
  ChatItem: { ChatItemCount: (count: number) => string };
  Store: {
    DefaultTopic: string;
    BotHello: string;
    Error: string;
    Prompt: {
      History: (content: string) => string;
      Topic: string;
      Summarize: string;
    };
  };
  NewChat: {
    More: string;
    Return: string;
    Skip: string;
    Title: string;
    NotShow: string;
    ConfirmNoShow: string;
    SubTitle: string;
  };
  UI: {
    Cancel: string;
    Create: string;
    Confirm: string;
    Close: string;
    Edit: string;
  };
  Copy: { Failed: string; Success: string };
  Chat: {
    Input: (submitKey: string) => string;
    Typing: string;
    Actions: {
      Delete: string;
      ChatList: string;
      Copy: string;
      Stop: string;
      Export: string;
      Retry: string;
      CompressedHistory: string;
    };
    Config: { Reset: string; SaveAs: string };
    SubTitle: (count: number) => string;
    Rename: string;
    Send: string;
  };
  Export: {
    MessageFromYou: string;
    MessageFromChatGPT: string;
    Copy: string;
    Title: string;
    Download: string;
  };
  Home: {
    DeleteToast: string;
    NewChat: string;
    DeleteChat: string;
    UserCenter: string;
    Logout: string;
    Revert: string;
    LogoutFail: string;
    LogoutSuccess: string;
  };
  Settings: {
    Usage: {
      IsChecking: string;
      Check: string;
      Title: string;
      SubTitle(used: any, total: any): string;
      NoAccess: string;
    };
    Temperature: { Title: string; SubTitle: string };
    Actions: {
      ClearAll: string;
      ConfirmClearAll: string;
      ResetAll: string;
      Close: string;
      ConfirmResetAll: string;
    };
    MaxTokens: { Title: string; SubTitle: string };
    Mask: { Title: string; SubTitle: string };
    Title: string;
    AccessCode: { Placeholder: string; Title: string; SubTitle: string };
    Lang: {
      All: string;
      Options: {
        de: string;
        tw: string;
        jp: string;
        en: string;
        cn: string;
        it: string;
        es: string;
        tr: string;
      };
      Name: string;
    };
    Token: { Placeholder: string; Title: string; SubTitle: string };
    Update: {
      IsChecking: string;
      Version: (x: string) => string;
      CheckUpdate: string;
      FoundUpdate: (x: string) => string;
      GoToUpdate: string;
      IsLatest: string;
    };
    SendKey: string;
    Avatar: string;
    CompressThreshold: { Title: string; SubTitle: string };
    HistoryCount: { Title: string; SubTitle: string };
    SendPreviewBubble: { Title: string; SubTitle: string };
    FontSize: { Title: string; SubTitle: string };
    Model: string;
    Theme: string;
    Prompt: {
      List: string;
      Edit: string;
      EditModal: { Title: string };
      Modal: { Add: string; Search: string; Title: string; Share: string };
      Disable: { Title: string; SubTitle: string };
      ListCount: (builtin: number, custom: number) => string;
    };
    TightBorder: string;
    SubTitle: string;
    PresencePenlty: { Title: string; SubTitle: string };
  };
  WIP: string;
  Plugin: { Name: string };
} = {
  WIP: "Coming Soon...",
  Error: {
    Unauthorized:
      "Unauthorized access, please enter access code in settings page.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messages`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messages with ChatGPT`,
    Actions: {
      ChatList: "Go To Chat List",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Stop",
      Retry: "Retry",
      Delete: "Delete",
    },
    Rename: "Rename Chat",
    Typing: "Typing…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} to send`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter to wrap";
      }
      return inputHints + ", / to search prompts";
    },
    Send: "Send",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "All Messages",
    Copy: "Copy All",
    Download: "Download",
    MessageFromYou: "Message From You",
    MessageFromChatGPT: "Message From ChatGPT",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Send: "Send Memory",
    Copy: "Copy Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "New Chat",
    Logout: "logout",
    UserCenter: "userCenter",
    LogoutSuccess: "logoutSuccess",
    LogoutFail: "logoutFail",
    DeleteChat: "Confirm to delete the selected conversation?",
    DeleteToast: "Chat Deleted",
    Revert: "Revert",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    Actions: {
      ClearAll: "Clear All Data",
      ResetAll: "Reset All Settings",
      Close: "Close",
      ConfirmResetAll: "Are you sure you want to reset all configurations?",
      ConfirmClearAll: "Are you sure you want to reset all data?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "All Languages",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
      },
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Font Size",
      SubTitle: "Adjust font size of chat content",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    SendPreviewBubble: {
      Title: "Send Preview Bubble",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Disable auto-completion",
        SubTitle: "Input / to trigger auto-completion",
      },
      List: "Prompt List",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
        Share: "Share",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Use your key to ignore access code limit",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Checking...",
      Check: "Check",
      NoAccess: "Enter API Key to check balance",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Access control enabled",
      Placeholder: "Need Access Code",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history between the AI and the user as a recap: " +
        content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize our discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Contextual and Memory Prompts",
    Add: "Add a Prompt",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
    },
  },
  NewChat: {
    Return: "Return",
    Skip: "Skip",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Not Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
  },
};

export default en;
