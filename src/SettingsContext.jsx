import { useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { createContext } from "react";
import { initialState, settingsReducer } from "./store/reducers";
import { setLanguage, toggleDarkMode } from "./store/actions";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
 

  const [settings, setSettings] = useLocalStorage("settings", initialState);
  const [state, dispatch] = useReducer(settingsReducer, settings);

  useEffect(() => {
    setSettings(state);
  }, [state]);

  const changeLang = () => {
    dispatch(setLanguage(state.language === "tr" ? "en" : "tr"));
  };

  const changeMode = () => {
    dispatch(toggleDarkMode())
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.darkMode);
  }, [state.darkMode]);

  const value = { state, changeLang, changeMode };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSetting = () => useContext(SettingsContext);
