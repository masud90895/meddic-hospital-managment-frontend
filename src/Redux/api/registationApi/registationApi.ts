import { IUserCreate } from "@/types/authType";
import { baseApi } from "../basedApi";

const registrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body: Partial<IUserCreate>) => ({
        url: `/auth/create-user`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = registrationApi;
