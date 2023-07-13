import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://technet-server-nine.vercel.app",
  }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});
