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
    getVideo: builder.query<VideoType, string>({
      query: (id) => `/videos/${id}`,
      providesTags: ['Video']
    }),
    getAllVideos: builder.query<VideoType[], void>({
      query: () => '/videos',
    }),
    getMoreVideos: builder.query<VideoType[], number | string>({
      query: (page) => `/videos?_page=${page}&_limit=8`,
      async onQueryStarted(arg, { getState, dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            videosApi.util.updateQueryData("getVideos", undefined, (draft) => {
              const clonedData = result?.data?.slice();
              return {
                data: [...draft.data, ...clonedData],
                totalCount: draft.totalCount,
              };
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    getRelatedVideos: builder.query<VideoType[],{id: number, title: string}>({
      query: ({id, title}) => {
        const titleToArray = title.split(' ');
        const queryString = titleToArray.map((t) => `title_like=${t}`).join('&');

        return `/videos?${queryString}&id_ne=${id}`
      }
    }),
    likeVideo: builder.mutation<VideoType, {id: number, video: VideoType}>({
      query: ({id, video}) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: video
      }),
      invalidatesTags: ['Video']
    }),
    disLikeVideo: builder.mutation<VideoType, {id: number, video: VideoType}>({
      query: ({id, video}) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: video
      }),
      invalidatesTags: ['Video']
    }),
  }),
});

export const {useGetVideosQuery, useGetAllVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useLikeVideoMutation, useDisLikeVideoMutation} = videosApi;
export default videosApi;