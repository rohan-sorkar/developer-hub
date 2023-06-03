import { VideoType } from "../../types";
import apiSlice from "../api/apiSlice";

const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<{data: VideoType[], totalCount: any}, void>({
      query: () => '/videos?_page=1&_limit=8',
      transformResponse: (response: VideoType[], meta, arg) => {
        const totalCount = meta?.response?.headers.get("X-Total-Count");
        return {
          data: response,
          totalCount,
        };
      }
    }),
    getAllVideos: builder.query<VideoType[], void>({
      query: () => '/videos',
    }),
    getMoreVideos: builder.query<{data: VideoType[], totalCount: any}, number | string>({
      query: (page) => `/videos?_page=${page}&_limit=8`,
      async onQueryStarted(arg, { getState, dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            videosApi.util.updateQueryData("getVideos", undefined, (draft) => {
              return {
                data: [...draft.data, ...result.data],
                totalCount: draft.totalCount,
              };
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    })
  }),
});

export const {useGetVideosQuery, useGetAllVideosQuery} = videosApi;
export default videosApi;