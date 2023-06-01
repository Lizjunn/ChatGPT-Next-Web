import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const tr: {
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
  WIP: "Çalışma devam ediyor...",
  Error: {
    Unauthorized:
      "Yetkisiz erişim, lütfen erişim kodunu ayarlar sayfasından giriniz.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesaj`,
  },
  Chat: {
    SubTitle: (count: number) => `ChatGPT tarafından ${count} mesaj`,
    Actions: {
      ChatList: "Sohbet Listesine Git",
      CompressedHistory: "Sıkıştırılmış Geçmiş Bellek Komutu",
      Export: "Tüm Mesajları Markdown Olarak Dışa Aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Tekrar Dene",
      Delete: "Delete",
    },
    Rename: "Sohbeti Yeniden Adlandır",
    Typing: "Yazıyor…",
    Input: (submitKey: string) => {
      var inputHints = `Göndermek için ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", kaydırmak için Shift + Enter";
      }
      return inputHints + ", komutları aramak için / (eğik çizgi)";
    },
    Send: "Gönder",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "Tüm Mesajlar",
    Copy: "Tümünü Kopyala",
    Download: "İndir",
    MessageFromYou: "Sizin Mesajınız",
    MessageFromChatGPT: "ChatGPT'nin Mesajı",
  },
  Memory: {
    Title: "Bellek Komutları",
    EmptyContent: "Henüz değil.",
    Send: "Belleği Gönder",
    Copy: "Belleği Kopyala",
    Reset: "Oturumu Sıfırla",
    ResetConfirm:
      "Sıfırlama, geçerli görüşme geçmişini ve geçmiş belleği siler. Sıfırlamak istediğinizden emin misiniz?",
  },
  Home: {
    NewChat: "Yeni Sohbet",
    Logout: "logout",
    UserCenter: "userCenter",
    LogoutSuccess: "logoutSuccess",
    LogoutFail: "logoutFail",
    DeleteChat: "Seçili sohbeti silmeyi onaylıyor musunuz?",
    DeleteToast: "Sohbet Silindi",
    Revert: "Geri Al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "Tüm Ayarlar",
    Actions: {
      ClearAll: "Tüm Verileri Temizle",
      ResetAll: "Tüm Ayarları Sıfırla",
      Close: "Kapat",
      ConfirmResetAll: "Tüm ayarları sıfırlamak istediğinizden emin misiniz?",
      ConfirmClearAll: "Tüm sohbeti sıfırlamak istediğinizden emin misiniz?",
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
      Title: "Yazı Boyutu",
      SubTitle: "Sohbet içeriğinin yazı boyutunu ayarlayın",
    },
    Update: {
      Version: (x: string) => `Sürüm: ${x}`,
      IsLatest: "En son sürüm",
      CheckUpdate: "Güncellemeyi Kontrol Et",
      IsChecking: "Güncelleme kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sürüm bulundu: ${x}`,
      GoToUpdate: "Güncelle",
    },
    SendKey: "Gönder Tuşu",
    Theme: "Tema",
    TightBorder: "Tam Ekran",
    SendPreviewBubble: {
      Title: "Mesaj Önizleme Balonu",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Otomatik tamamlamayı devre dışı bırak",
        SubTitle: "Otomatik tamamlamayı kullanmak için / (eğik çizgi) girin",
      },
      List: "Komut Listesi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} yerleşik, ${custom} kullanıcı tanımlı`,
      Edit: "Düzenle",
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
      Title: "Ekli Mesaj Sayısı",
      SubTitle: "İstek başına ekli gönderilen mesaj sayısı",
    },
    CompressThreshold: {
      Title: "Geçmiş Sıkıştırma Eşiği",
      SubTitle:
        "Sıkıştırılmamış mesajların uzunluğu bu değeri aşarsa sıkıştırılır",
    },
    Token: {
      Title: "API Anahtarı",
      SubTitle: "Erişim kodu sınırını yoksaymak için anahtarınızı kullanın",
      Placeholder: "OpenAI API Anahtarı",
    },
    Usage: {
      Title: "Hesap Bakiyesi",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanılan $${used}, abonelik $${total}`;
      },
      IsChecking: "Kontrol ediliyor...",
      Check: "Tekrar Kontrol Et",
      NoAccess: "Bakiyeyi kontrol etmek için API anahtarını girin",
    },
    AccessCode: {
      Title: "Erişim Kodu",
      SubTitle: "Erişim kontrolü etkinleştirme",
      Placeholder: "Erişim Kodu Gerekiyor",
    },
    Model: "Model",
    Temperature: {
      Title: "Gerçeklik",
      SubTitle:
        "Daha büyük bir değer girildiğinde gerçeklik oranı düşer ve daha rastgele çıktılar üretir",
    },
    MaxTokens: {
      Title: "Maksimum Belirteç",
      SubTitle:
        "Girdi belirteçlerinin ve oluşturulan belirteçlerin maksimum uzunluğu",
    },
    PresencePenlty: {
      Title: "Varlık Cezası",
      SubTitle:
        "Daha büyük bir değer, yeni konular hakkında konuşma olasılığını artırır",
    },
  },
  Store: {
    DefaultTopic: "Yeni Konuşma",
    BotHello: "Merhaba! Size bugün nasıl yardımcı olabilirim?",
    Error: "Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz.",
    Prompt: {
      History: (content: string) =>
        "Bu, yapay zeka ile kullanıcı arasındaki sohbet geçmişinin bir özetidir: " +
        content,
      Topic:
        "Lütfen herhangi bir giriş, noktalama işareti, tırnak işareti, nokta, sembol veya ek metin olmadan konuşmamızı özetleyen dört ila beş kelimelik bir başlık oluşturun. Çevreleyen tırnak işaretlerini kaldırın.",
      Summarize:
        "Gelecekteki bağlam için bir bilgi istemi olarak kullanmak üzere tartışmamızı en fazla 200 kelimeyle özetleyin.",
    },
  },
  Copy: {
    Success: "Panoya kopyalandı",
    Failed: "Kopyalama başarısız oldu, lütfen panoya erişim izni verin",
  },
  Context: {
    Toast: (x: any) => `${x} bağlamsal bellek komutu`,
    Edit: "Bağlamsal ve Bellek Komutları",
    Add: "Yeni Ekle",
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

export default tr;
