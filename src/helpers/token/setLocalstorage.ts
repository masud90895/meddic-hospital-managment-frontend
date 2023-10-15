import { tokenKey } from "./tokenKey";

export const setLocalStorage = (token: string) => {
  return localStorage.setItem(tokenKey, token);
};
