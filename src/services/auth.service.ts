import { config } from "@/confiq";
import { tokenKey } from "@/helpers/token/tokenKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";



export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(tokenKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(tokenKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(tokenKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

// export const getNewAccessToken = async () => {
//   return await axiosInstance({
//     url: `${config.server_url}/auth/refresh-token`,
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   });
// };
