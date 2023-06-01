import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const es: {
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
  WIP: "En construcción...",
  Error: {
    Unauthorized:
      "Acceso no autorizado, por favor ingrese el código de acceso en la página de configuración.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mensajes`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mensajes con ChatGPT`,
    Actions: {
      ChatList: "Ir a la lista de chats",
      CompressedHistory: "Historial de memoria comprimido",
      Export: "Exportar todos los mensajes como Markdown",
      Copy: "Copiar",
      Stop: "Detener",
      Retry: "Reintentar",
      Delete: "Delete",
    },
    Rename: "Renombrar chat",
    Typing: "Escribiendo...",
    Input: (submitKey: string) => {
      var inputHints = `Escribe algo y presiona ${submitKey} para enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", presiona Shift + Enter para nueva línea";
      }
      return inputHints;
    },
    Send: "Enviar",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "Todos los mensajes",
    Copy: "Copiar todo",
    Download: "Descargar",
    MessageFromYou: "Mensaje de ti",
    MessageFromChatGPT: "Mensaje de ChatGPT",
  },
  Memory: {
    Title: "Historial de memoria",
    EmptyContent: "Aún no hay nada.",
    Copy: "Copiar todo",
    Send: "Send Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "Nuevo chat",
    Logout: "logout",
    UserCenter: "userCenter",
    LogoutSuccess: "logoutSuccess",
    LogoutFail: "logoutFail",
    DeleteChat: "¿Confirmar eliminación de la conversación seleccionada?",
    DeleteToast: "Chat Deleted",
    Revert: "Revert",
  },
  Settings: {
    Title: "Configuración",
    SubTitle: "Todas las configuraciones",
    Actions: {
      ClearAll: "Borrar todos los datos",
      ResetAll: "Restablecer todas las configuraciones",
      Close: "Cerrar",
      ConfirmResetAll: "Are you sure you want to reset all configurations?",
      ConfirmClearAll: "Are you sure you want to reset all chat?",
    },
    Lang: {
      Name: "Language",
      All: "All Languages",
      Options: {
        cn: "简体中文",
        en: "Inglés",
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
      Title: "Tamaño de fuente",
      SubTitle: "Ajustar el tamaño de fuente del contenido del chat",
    },
    Update: {
      Version: (x: string) => `Versión: ${x}`,
      IsLatest: "Última versión",
      CheckUpdate: "Buscar actualizaciones",
      IsChecking: "Buscando actualizaciones...",
      FoundUpdate: (x: string) => `Se encontró una nueva versión: ${x}`,
      GoToUpdate: "Actualizar",
    },
    SendKey: "Tecla de envío",
    Theme: "Tema",
    TightBorder: "Borde ajustado",
    SendPreviewBubble: {
      Title: "Enviar burbuja de vista previa",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Desactivar autocompletado",
        SubTitle: "Escribe / para activar el autocompletado",
      },
      List: "Lista de autocompletado",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} incorporado, ${custom} definido por el usuario`,
      Edit: "Editar",
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
      Title: "Cantidad de mensajes adjuntos",
      SubTitle: "Número de mensajes enviados adjuntos por solicitud",
    },
    CompressThreshold: {
      Title: "Umbral de compresión de historial",
      SubTitle:
        "Se comprimirán los mensajes si la longitud de los mensajes no comprimidos supera el valor",
    },
    Token: {
      Title: "Clave de API",
      SubTitle: "Utiliza tu clave para ignorar el límite de código de acceso",
      Placeholder: "Clave de la API de OpenAI",
    },
    Usage: {
      Title: "Saldo de la cuenta",
      SubTitle(used: any, total: any) {
        return `Usado $${used}, subscription $${total}`;
      },
      IsChecking: "Comprobando...",
      Check: "Comprobar de nuevo",
      NoAccess: "Introduzca la clave API para comprobar el saldo",
    },
    AccessCode: {
      Title: "Código de acceso",
      SubTitle: "Control de acceso habilitado",
      Placeholder: "Necesita código de acceso",
    },
    Model: "Modelo",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Un valor mayor genera una salida más aleatoria",
    },
    MaxTokens: {
      Title: "Máximo de tokens",
      SubTitle: "Longitud máxima de tokens de entrada y tokens generados",
    },
    PresencePenlty: {
      Title: "Penalización de presencia",
      SubTitle:
        "Un valor mayor aumenta la probabilidad de hablar sobre nuevos temas",
    },
  },
  Store: {
    DefaultTopic: "Nueva conversación",
    BotHello: "¡Hola! ¿Cómo puedo ayudarte hoy?",
    Error: "Algo salió mal, por favor intenta nuevamente más tarde.",
    Prompt: {
      History: (content: string) =>
        "Este es un resumen del historial del chat entre la IA y el usuario como recapitulación: " +
        content,
      Topic:
        "Por favor, genera un título de cuatro a cinco palabras que resuma nuestra conversación sin ningún inicio, puntuación, comillas, puntos, símbolos o texto adicional. Elimina las comillas que lo envuelven.",
      Summarize:
        "Resuma nuestra discusión brevemente en 200 caracteres o menos para usarlo como un recordatorio para futuros contextos.",
    },
  },
  Copy: {
    Success: "Copiado al portapapeles",
    Failed:
      "La copia falló, por favor concede permiso para acceder al portapapeles",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Contextual and Memory Prompts",
    Add: "Add One",
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

export default es;
