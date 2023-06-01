import RelatedVideos from "./components/related-videos/relatedVideos";
import { Video as VideoSection } from "./components/video/video";

const Video = () => {
  return (
    <section className="min-h-[calc(100vh_-_157px)] pb-20 pt-6">
      <div className="mx-auto min-h-[400px] max-w-7xl px-2 pb-20">
        <div className="grid grid-cols-3 gap-2 lg:gap-16">
          <VideoSection />
          <RelatedVideos />
        </div>
      </div>
    </section>
  );
};

export default Video;
