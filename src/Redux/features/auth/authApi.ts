import { api } from "../../api/apiSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/auth/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    // update user profile
    
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation
} = authApi;
