
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";

import { getDataFromLocalStorage } from "../token/getDataFromLocalStorage";
import { setLocalStorage } from "../token/setLocalstorage";
import { config } from "@/confiq";
import { decodedToken } from "./jwt";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setLocalStorage(accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getDataFromLocalStorage();
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getDataFromLocalStorage();
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${config.server_url}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
