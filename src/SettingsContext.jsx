import { useContext, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { createContext } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("lang", "tr");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const changeLang = () => {
    setLanguage((prev) => {
      return prev === "tr" ? "en" : "tr";
    });
  };

  const changeMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const value = { language, changeLang, changeMode, darkMode };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSetting = () => useContext(SettingsContext);
