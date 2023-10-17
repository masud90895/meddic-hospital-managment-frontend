import { api } from "@/Redux/api/apiSlice";

const RatingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (body) => ({
        url: `/review-ratings/add-review`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["service"],
    }),
    // get my reviews
    getMyReviews: builder.query({
      query: () => `/review-ratings/my-reviews`,
      providesTags: ["service"],
      transformResponse: (response: any) => response.data,
    }),
    // delete reviews
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review-ratings/${id}`,
        method: "DELETE",
        id,
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useCreateRatingMutation,
  useGetMyReviewsQuery,
  useDeleteReviewMutation,
} = RatingApi;
