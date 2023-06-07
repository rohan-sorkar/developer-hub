import { VideoType } from "../../types";
import apiSlice from "../api/apiSlice";
import videosApi from "../videos/videosApi";

const commentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({id, updatedVideo}) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: updatedVideo
      }),
      async onQueryStarted(arg, {getState, dispatch, queryFulfilled}) {
        dispatch(videosApi.util.updateQueryData('getVideo', arg.id.toString(), (draft) => {
          Object.assign(draft, arg.updatedVideo)
        }))
        try{
          await queryFulfilled;
        }
        catch(err) {

        }
      }
    }),
    deleteComment: builder.mutation({
      query: ({videoId, updatedVideo}) => ({
        url: `/videos/${videoId}`,
        method: 'PATCH',
        body: updatedVideo
      }),
      async onQueryStarted(arg, {getState, dispatch, queryFulfilled}) {
        const patchResult = dispatch(videosApi.util.updateQueryData('getVideo', arg.videoId.toString(), (draft) => {
          Object.assign(draft, arg.updatedVideo);
        }))
        try{
          await queryFulfilled;
        }
        catch(err) {
          patchResult.undo();
        }
      }
    }),
    likeComment: builder.mutation({
      query: ({ videoId, updatedVideo }) => ({
        url: `/videos/${videoId}`,
        method: "PATCH",
        body: updatedVideo,
      }),
      async onQueryStarted(arg, { getState, dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          videosApi.util.updateQueryData(
            "getVideo",
            arg.videoId.toString(),
            (draft) => {
              Object.assign(draft, arg.updatedVideo)
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),
    editComment: builder.mutation({
      query: ({ id, updatedVideo }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: updatedVideo,
      }),
      async onQueryStarted(arg, { getState, dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          videosApi.util.updateQueryData(
            "getVideo",
            arg.id.toString(),
            (draft) => {
              Object.assign(draft, arg.updatedVideo)
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),
  })
});

export const {useAddCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useEditCommentMutation} = commentsApi;