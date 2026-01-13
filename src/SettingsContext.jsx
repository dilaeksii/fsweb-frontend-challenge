import { useContext } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { createContext } from "react";


const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("lang", "tr");

  const changeLang = () => {
    setLanguage((prev) => {
      return prev === "tr" ? "en" : "tr";
    });
  };

  const value = {language, changeLang};

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};


export const useSetting = () => useContext(SettingsContext);