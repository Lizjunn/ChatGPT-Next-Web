import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const de: {
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
  WIP: "In Bearbeitung...",
  Error: {
    Unauthorized:
      "Unbefugter Zugriff, bitte geben Sie den Zugangscode auf der Einstellungsseite ein.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} Nachrichten`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} Nachrichten mit ChatGPT`,
    Actions: {
      ChatList: "Zur Chat-Liste gehen",
      CompressedHistory: "Komprimierter Gedächtnis-Prompt",
      Export: "Alle Nachrichten als Markdown exportieren",
      Copy: "Kopieren",
      Stop: "Stop",
      Retry: "Wiederholen",
      Delete: "Delete",
    },
    Rename: "Chat umbenennen",
    Typing: "Tippen...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} um zu Senden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Umschalt + Eingabe für Zeilenumbruch";
      }
      return inputHints + ", / zum Durchsuchen von Prompts";
    },
    Send: "Senden",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "Alle Nachrichten",
    Copy: "Alles kopieren",
    Download: "Herunterladen",
    MessageFromYou: "Deine Nachricht",
    MessageFromChatGPT: "Nachricht von ChatGPT",
  },
  Memory: {
    Title: "Gedächtnis-Prompt",
    EmptyContent: "Noch nichts.",
    Send: "Gedächtnis senden",
    Copy: "Gedächtnis kopieren",
    Reset: "Sitzung zurücksetzen",
    ResetConfirm:
      "Das Zurücksetzen löscht den aktuellen Gesprächsverlauf und das Langzeit-Gedächtnis. Möchten Sie wirklich zurücksetzen?",
  },
  Home: {
    NewChat: "Neuer Chat",
    Logout: "logout",
    UserCenter: "userCenter",
    LogoutSuccess: "logoutSuccess",
    LogoutFail: "logoutFail",
    DeleteChat: "Bestätigen Sie, um das ausgewählte Gespräch zu löschen?",
    DeleteToast: "Chat gelöscht",
    Revert: "Zurücksetzen",
  },
  Settings: {
    Title: "Einstellungen",
    SubTitle: "Alle Einstellungen",
    Actions: {
      ClearAll: "Alle Daten löschen",
      ResetAll: "Alle Einstellungen zurücksetzen",
      Close: "Schließen",
      ConfirmResetAll:
        "Möchten Sie wirklich alle Konfigurationen zurücksetzen?",
      ConfirmClearAll: "Möchten Sie wirklich alle Chats zurücksetzen?",
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
      Title: "Schriftgröße",
      SubTitle: "Schriftgröße des Chat-Inhalts anpassen",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Neueste Version",
      CheckUpdate: "Update prüfen",
      IsChecking: "Update wird geprüft...",
      FoundUpdate: (x: string) => `Neue Version gefunden: ${x}`,
      GoToUpdate: "Aktualisieren",
    },
    SendKey: "Senden-Taste",
    Theme: "Erscheinungsbild",
    TightBorder: "Enger Rahmen",
    SendPreviewBubble: {
      Title: "Vorschau-Bubble senden",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Autovervollständigung deaktivieren",
        SubTitle: "Autovervollständigung mit / starten",
      },
      List: "Prompt-Liste",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} integriert, ${custom} benutzerdefiniert`,
      Edit: "Bearbeiten",
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
      Title: "Anzahl der angehängten Nachrichten",
      SubTitle: "Anzahl der pro Anfrage angehängten gesendeten Nachrichten",
    },
    CompressThreshold: {
      Title: "Schwellenwert für Verlaufskomprimierung",
      SubTitle:
        "Komprimierung, wenn die Länge der unkomprimierten Nachrichten den Wert überschreitet",
    },
    Token: {
      Title: "API-Schlüssel",
      SubTitle:
        "Verwenden Sie Ihren Schlüssel, um das Zugangscode-Limit zu ignorieren",
      Placeholder: "OpenAI API-Schlüssel",
    },
    Usage: {
      Title: "Kontostand",
      SubTitle(used: any, total: any) {
        return `Diesen Monat ausgegeben $${used}, Abonnement $${total}`;
      },
      IsChecking: "Wird überprüft...",
      Check: "Erneut prüfen",
      NoAccess: "API-Schlüssel eingeben, um den Kontostand zu überprüfen",
    },
    AccessCode: {
      Title: "Zugangscode",
      SubTitle: "Zugangskontrolle aktiviert",
      Placeholder: "Zugangscode erforderlich",
    },
    Model: "Modell",
    Temperature: {
      Title: "Temperature", //Temperatur
      SubTitle: "Ein größerer Wert führt zu zufälligeren Antworten",
    },
    MaxTokens: {
      Title: "Max Tokens", //Maximale Token
      SubTitle: "Maximale Anzahl der Anfrage- plus Antwort-Token",
    },
    PresencePenlty: {
      Title: "Presence Penalty", //Anwesenheitsstrafe
      SubTitle:
        "Ein größerer Wert erhöht die Wahrscheinlichkeit, dass über neue Themen gesprochen wird",
    },
  },
  Store: {
    DefaultTopic: "Neues Gespräch",
    BotHello: "Hallo! Wie kann ich Ihnen heute helfen?",
    Error:
      "Etwas ist schief gelaufen, bitte versuchen Sie es später noch einmal.",
    Prompt: {
      History: (content: string) =>
        "Dies ist eine Zusammenfassung des Chatverlaufs zwischen dem KI und dem Benutzer als Rückblick: " +
        content,
      Topic:
        "Bitte erstellen Sie einen vier- bis fünfwörtigen Titel, der unser Gespräch zusammenfasst, ohne Einleitung, Zeichensetzung, Anführungszeichen, Punkte, Symbole oder zusätzlichen Text. Entfernen Sie Anführungszeichen.",
      Summarize:
        "Fassen Sie unsere Diskussion kurz in 200 Wörtern oder weniger zusammen, um sie als Pronpt für zukünftige Gespräche zu verwenden.",
    },
  },
  Copy: {
    Success: "In die Zwischenablage kopiert",
    Failed:
      "Kopieren fehlgeschlagen, bitte geben Sie die Berechtigung zum Zugriff auf die Zwischenablage frei",
  },
  Context: {
    Toast: (x: any) => `Mit ${x} Kontext-Prompts`,
    Edit: "Kontext- und Gedächtnis-Prompts",
    Add: "Hinzufügen",
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

export default de;
