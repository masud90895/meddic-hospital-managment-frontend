import { tokenKey } from "@/helpers/token/tokenKey";
import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/auth/create-user",
        method: "POST",
        body: data,
      }),
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
