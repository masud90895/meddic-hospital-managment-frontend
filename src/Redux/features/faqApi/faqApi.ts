import { api } from "@/Redux/api/apiSlice";

const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get Faq
    getFaq: builder.query({
      query: () => `/faqs`,
      providesTags: ["faq"],
      transformResponse: (response: any) => response.data,
    }),
    // create Faq
    createFaq: builder.mutation({
      query: (body) => ({
        url: `/faqs`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["faq"],
    }),
    // update Faq
    updateFaq: builder.mutation({
      query: ({id,body}) => ({
        url: `/faqs/update/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["faq"],
    }),
    // delete Faq
    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `/faqs/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faq"],
    }),
  }),
});
