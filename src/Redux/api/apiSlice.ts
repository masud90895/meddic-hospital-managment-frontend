import { config } from "@/confiq";
import { tokenKey } from "@/helpers/token/tokenKey";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.server_url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(tokenKey);
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "faq", "blog"],
});
