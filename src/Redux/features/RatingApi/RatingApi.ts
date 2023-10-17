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
  }),
});

export const { useCreateRatingMutation } = RatingApi;
