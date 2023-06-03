import { useEffect, useState } from "react";
import videosApi from "../features/videos/videosApi";
import { useAppDispatch } from "../app/hooks";

const useScroll = (totalCount: any) => {
  //infinite scroll functionality
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page > 1) {
      dispatch(videosApi.endpoints.getMoreVideos.initiate(page));
    }
  }, [page]);

  useEffect(() => {
    if (totalCount > 0) {
      const more = Math.ceil(totalCount / 8) > page;
      setHasMore(more);
    }
  }, [page, totalCount]);

  return {
    hasMore,
    fetchMore,
  };
};

export default useScroll;
