import { useState } from "react";
import Error from "../../../../components/ui/error";
import RelatedVideoLoader from "../../../../components/ui/loaders/relatedVideoLoader";
import { useGetRelatedVideosQuery } from "../../../../features/videos/videosApi";
import RelatedVideoItem from "./relatedVideoItem";

const RelatedVideos = ({ id, title }: { id: number; title: string }) => {
  const { data, isLoading, isError } = useGetRelatedVideosQuery({ id, title });
  const [debra, setDebra] = useState(data)

  //decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = (
      <Error message="Opps! something went wrong in relative videos😕" />
    );
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <Error message="There is no related video😕" />;
  }
  if (!isLoading && !isError && data?.length && data?.length > 0) {
    content = data?.map((video) => <RelatedVideoItem key={video?.id} video={video}/>)
  }

  return (
    <div className="no-scrollbar related-video-shadow col-span-full max-h-screen overflow-y-auto rounded-xl p-5 lg:col-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
