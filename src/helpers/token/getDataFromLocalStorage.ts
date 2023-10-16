export const getDataFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const localData = localStorage.getItem(key);
  if (localData) {
    return JSON.parse(localData);
  }
  return null;
};
