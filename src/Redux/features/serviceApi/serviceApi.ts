import { api } from "@/Redux/api/apiSlice";

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `/services/create-service`,
      providesTags: ["service"],
    }),
    addService: builder.mutation({
      query: (service) => ({
        url: `/services`,
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: builder.mutation({
      query: ({ id, body }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
