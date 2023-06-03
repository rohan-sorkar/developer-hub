import { TagType } from "../../types";
import apiSlice from "../api/apiSlice";

const tagsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagType[], void>({
      query: () => '/tags'
    })
  }),
});

export const {useGetTagsQuery} = tagsApi;