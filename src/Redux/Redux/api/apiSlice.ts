import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/",
  }),
  endpoints: () => ({}),
  tagTypes: ["users"],
});
