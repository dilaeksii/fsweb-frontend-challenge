import { useState } from "react";
import { useSetting } from "../SettingsContext";

export const Mode = () => {
  const { changeLang, language, changeMode, darkMode} = useSetting();

  return (
    <>
      <div className="flex gap-2 p-2 justify-end max-sm:justify-end max-sm:py-8">
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              data-testid="darkMode-toggle"
              checked={darkMode}
              onChange={changeMode}
            />
            <div className="w-10 h-5 rounded-full transition-colors duration-300 ease-in-out bg-violet-800">
              <div
                className=" w-5 h-5 rounded-full shadow-lg transition-transform duration-300 ease-in-out"
                style={{
                  backgroundColor: "#FFE86E",
                  transform: darkMode ? "translateX(20px)" : "translateX(0)",
                }}
              />
            </div>
            <span className="text-gray-500 text-base font-bold pl-2 max-sm:text-sm">
              DARK MODE
            </span>
          </label>
        </div>
        <span className="text-gray-500 text-base font-bold max-sm:text-sm">
          |
        </span>
        <div>
          <button
            className="text-violet-800 text-base font-bold max-sm:text-sm"
            onClick={changeLang}
          >
            {language === "tr" ? "İNGİLİZCE" : "TÜRKÇE"}
          </button>
          <span className="text-gray-500 text-base font-bold">'YE GEÇ</span>
        </div>
      </div>
    </>
  );
};
