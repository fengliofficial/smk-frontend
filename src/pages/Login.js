import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Login() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">{t("login")}</h2>
      <input className="border p-2 w-full mb-2" placeholder={t("username")} value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-2" placeholder={t("password")} value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 w-full">{t("login")}</button>
      <div className="mt-4">
        <button onClick={() => i18n.changeLanguage("en")} className="mr-2">EN</button>
        <button onClick={() => i18n.changeLanguage("ms")} className="mr-2">MS</button>
        <button onClick={() => i18n.changeLanguage("zh")}>中文</button>
      </div>
    </div>
  );
}

export default Login;
