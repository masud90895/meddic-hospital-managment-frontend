import { api } from "@/Redux/api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get blog
    getBlog: builder.query({
      query: () => `/blogs`,
      providesTags: ["blog"],
      transformResponse: (response: any) => response.data,
    }),
    // create Blog
    createBlog: builder.mutation({
      query: (body) => ({
        url: `/blogs/create-blog`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["blog"],
    }),
    // update Blog
    updateBlog: builder.mutation({
      query: ({ id, body }) => ({
        url: `/blogs/update/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["blog"],
    }),
    // delete Blog
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
