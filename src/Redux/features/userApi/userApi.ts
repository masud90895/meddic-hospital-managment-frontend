import { api } from "@/Redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/users/my-profile`,
      providesTags: ["users"],
      transformResponse: (response: any) => response.data,
    }),
    // get all users
    getAllUsers: builder.query({
      query: (search: string) => `/users?searchTerm=${search}`,
      providesTags: ["users"],
      transformResponse: (response: any) => response.data.data,
    }),
  }),
});

export const { useGetUserQuery, useGetAllUsersQuery } = userApi;
