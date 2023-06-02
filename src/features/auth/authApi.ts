import apiSlice from "../api/apiSlice";
import { loggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData
      }),

      async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          //save to local store
          localStorage.setItem('auth', JSON.stringify({
            accessToken: result.data.accessToken,
            user: result.data.user
          }));
          //save to store
          dispatch(loggedIn({
            accessToken: result.data.accessToken,
            user: result.data.user
          }));
        }
        catch(err) {
          // do nothing
        }
      }
    }),
    
    login: builder.mutation({
      query: (loginInfo) => ({
        url: '/login',
        method: 'POST',
        body: loginInfo
      }),
      
      async onQueryStarted(arg, {dispatch, getState, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          //save to local store
          localStorage.setItem('auth', JSON.stringify({
            accessToken: result.data.accessToken,
            user: result.data.user
          }));
          //save to store
          dispatch(loggedIn({
            accessToken: result.data.accessToken,
            user: result.data.user
          }));
        }
        catch(err) {
          // do nothing
        }
      }
    })
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;
