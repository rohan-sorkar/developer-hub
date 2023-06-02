import { loggedOut } from "../auth/authSlice";
import { RootState } from "./../../app/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:9000",
  prepareHeaders: (headers, { getState }) => {
    const token: string = (getState() as RootState).auth?.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error && result?.error?.status === 401) {
      api.dispatch(loggedOut({payload: undefined}));
      localStorage.clear();
    }
    
    return result;
  },
  endpoints: () => ({}),
});

export default apiSlice;
