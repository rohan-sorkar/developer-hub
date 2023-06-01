import RelatedVideoItem from "./relatedVideoItem";

const RelatedVideos = () => {
  return (
    <div className="no-scrollbar related-video-shadow col-span-full max-h-screen overflow-y-auto rounded-xl p-5 lg:col-auto">
      <RelatedVideoItem />
    </div>
  );
};

export default RelatedVideos;
