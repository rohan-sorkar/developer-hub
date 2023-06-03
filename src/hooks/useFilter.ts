import { useAppSelector } from "../app/hooks";
import { useGetAllVideosQuery } from "../features/videos/videosApi";
import { VideoType } from "../types";

const useFilter = (videoItems: VideoType[]) => {
  //searching and filtering logic
  const { searchTerm } = useAppSelector((state) => state.videos) || {};
  const { selectedTags } = useAppSelector((state) => state.tags) || {};
  const { data: allVideos } = useGetAllVideosQuery(undefined, {
    skip: !searchTerm,
  });

  const performSearch = (videos: VideoType[]) => {
    const filteredItems = videos?.filter(
      (v) =>
        v?.title.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        v?.description.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    return filteredItems?.length > 0 ? filteredItems : videoItems;
  };
  const searchedVideos = performSearch(allVideos!);

  const filteredVideos = searchedVideos?.reduce(
    (acc, cur, _index, searchedArray) => {
      for (const tag of selectedTags) {
        if (cur.tags.includes(tag)) {
          const hasAlreadyInAcc = acc.some((v) => v.id === cur.id);
          acc = hasAlreadyInAcc ? acc : [cur, ...acc];
        }
      }

      if (selectedTags?.length === 0) {
        acc = searchedArray;
      }

      return acc;
    },
    [] as VideoType[]
  );

  return { filteredVideos };
};

export default useFilter;
