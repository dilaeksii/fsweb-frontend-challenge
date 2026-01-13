import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    if (storedData) {
      return storedData;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const updateStorage = (value) => {
    setData((prev) => {
      const newValue = typeof value === "function" ? value(prev) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return [data, updateStorage];
}
