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
    // user update
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/update-profile/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    // user delete
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
