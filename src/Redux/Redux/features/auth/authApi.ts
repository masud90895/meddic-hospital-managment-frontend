
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
      // async onQueryStarted(_arg: any, { queryFulfilled, dispatch }) {
      //   try {
      //     const result = await queryFulfilled;
      //     localStorage.setItem(
      //       "auth",
      //       JSON.stringify({
      //         accessToken: result?.data?.data?.accessToken,
      //         user: result?.data?.data?.user,
      //       })
      //     );

      //     dispatch(
      //       userLoggedIn({
      //         accessToken: result.data.data?.accessToken,
      //         user: result?.data.data?.user,
      //       })
      //     );
      //   } catch (err) {}
      // },
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
        
      }),
      // async onQueryStarted(_arg: any, { queryFulfilled, dispatch }) {
      //   try {
      //     const result = await queryFulfilled;

      //     localStorage.setItem(
      //       "auth",
      //       JSON.stringify({
      //         accessToken: result?.data?.data?.accessToken,
      //         user: result?.data.data?.user,
      //       })
      //     );

      //     dispatch(
      //       userLoggedIn({
      //         accessToken: result?.data?.data.accessToken,
      //         user: result?.data?.data?.user,
      //       })
      //     );
      //   } catch (err) {
      //     //
      //   }
      // },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
