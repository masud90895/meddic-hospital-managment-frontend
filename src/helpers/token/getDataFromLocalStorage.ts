import { tokenKey } from "./tokenKey";

export const getDataFromLocalStorage = () => {
  const localData = localStorage.getItem(tokenKey);
  if (localData) {
    return JSON.parse(localData);
  }
  return null;
};
