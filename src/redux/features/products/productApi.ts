import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    singleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComments: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
  useSingleProductsQuery,
} = productApi;
