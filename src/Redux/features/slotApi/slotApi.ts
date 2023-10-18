import { api } from "@/Redux/api/apiSlice";

const SLOT_API = "/slots";

const slotApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getSlot
    getSlot: builder.query({
      query: () => `${SLOT_API}`,
      providesTags: ["slot"],
    }),
     // create slot
     createSlot: builder.mutation({
      query: (data) => ({
        url: `${SLOT_API}/create-slot`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slot"],
    }),

    // update slot
    updateSlot : builder.mutation({
      query: ({id, data}) => ({
        url: `${SLOT_API}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["slot"],
    }),
    // delete slot
    deleteSlot : builder.mutation({
      query: (id) => ({
        url: `${SLOT_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useGetSlotQuery,
  useCreateSlotMutation,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotApi;