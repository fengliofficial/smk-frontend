import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { login: "Login", username: "Username", password: "Password" } },
    ms: { translation: { login: "Log Masuk", username: "Nama Pengguna", password: "Kata Laluan" } },
    zh: { translation: { login: "登录", username: "用户名", password: "密码" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
