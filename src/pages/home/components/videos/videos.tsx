import Error from "../../../../components/ui/error";
import VideoLoader from "../../../../components/ui/loaders/videoLoader";
import { useGetVideosQuery } from "../../../../features/videos/videosApi";
import VideoItem from "./videoItem";
import InfiniteScroll from "react-infinite-scroll-component";
import useFilter from "../../../../hooks/useFilter";
import useScroll from "../../../../hooks/useScroll";

const Videos = () => {
  const { data, isLoading, isError } = useGetVideosQuery();
  const { data: videoItems, totalCount } = data || {};

  const { filteredVideos } = useFilter(videoItems!);
  const { hasMore, fetchMore } = useScroll(totalCount);

  //decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
          <VideoLoader key={v} />
        ))}
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="An error occurred in the videos" />;
  }
  if (!isLoading && !isError && videoItems?.length === 0) {
    content = <Error message="The video list is empty" />;
  }
  if (!isLoading && !isError && videoItems?.length && videoItems.length > 0) {
    content = (
      <InfiniteScroll
        dataLength={videoItems?.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={""}
      >
        <div className="mx-auto grid min-h-[300px] max-w-7xl grid-cols-12 gap-4 px-5 pb-5 lg:px-0">
          {filteredVideos?.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      </InfiniteScroll>
    );
  }

  return isLoading ? (
    <div className="mx-auto grid min-h-[300px] max-w-7xl grid-cols-12 gap-4 px-5 lg:px-0">
      {content}
    </div>
  ) : (
    content ? content : <></>
  );
};

export default Videos;
