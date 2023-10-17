import { api } from "@/Redux/api/apiSlice";

const feedBackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getAll
    getAllFeedBack: builder.query({
      query: () => `/feedback-forms`,
      providesTags: ["FeedBack"],
      
    }),
    // create
    createFeedBack: builder.mutation({
      query: (body) => ({
        url: `/feedback-forms/add-feedback`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["FeedBack"],
    }),
    // update
    updateFeedBack: builder.mutation({
      query: ({ id, body }) => ({
        url: `/feedback-forms/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["FeedBack"],
    }),
    // delete
    deleteFeedBack: builder.mutation({
      query: (id) => ({
        url: `/feedback-forms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FeedBack"],
    }),
  }),
});

export const {
  useGetAllFeedBackQuery,
  useCreateFeedBackMutation,
  useUpdateFeedBackMutation,
  useDeleteFeedBackMutation,
} = feedBackApi;
