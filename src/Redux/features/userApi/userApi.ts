import { api } from "@/Redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/users/my-profile`,
      providesTags: ["users"],
      transformResponse: (response: any) => response.data,
    }),
    
  }),
});

export const { useGetUserQuery } = userApi;
