import { api } from "@/Redux/api/apiSlice";

const BOOKING_API = "/appointment-booking";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => `${BOOKING_API}`,
      providesTags: ["booking"],
    }),
    // getMyBooking
    getMyBooking: builder.query({
      query: () => `${BOOKING_API}/my-booking`,
      providesTags: ["booking"],
    }),
    createBooking: builder.mutation({
      query: (data) => ({
        url: `${BOOKING_API}/add-booking`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),

    // my appointments
    myAppointment: builder.query({
      query: () => `${BOOKING_API}/my-booking`,
      providesTags: ["booking"],
    }),

    // updateBooking
    updateBooking: builder.mutation({
      query: ({ id, data }) => ({
        url: `${BOOKING_API}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    // delete Blog
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `${BOOKING_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetMyBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useMyAppointmentQuery,
} = bookingApi;
