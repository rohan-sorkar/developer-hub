import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import RelatedVideos from "./components/related-videos/relatedVideos";
import { Video as VideoSection } from "./components/video/video";
import PlayerLoader from "../../components/ui/loaders/playerLoder";
import DescriptionLoader from "../../components/ui/loaders/descriptionLoader";
import CommentLoader from "../../components/ui/loaders/commentLoader";
import Error from "../../components/ui/error";

const Video = () => {
  const {videoId} = useParams();
  const {data, isLoading, isError} = useGetVideoQuery(videoId as string);

  //decide what to render
  let content;
  if(isLoading) {
    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <PlayerLoader/>
        <DescriptionLoader/>
        <CommentLoader/>
      </div>
    )
  }
  if(!isLoading && isError) {
    content = <Error message='Opps! something went wrong😕'/>
  }
  if(!isLoading && !isError && data?.id) {
    content = (
      <>
          <VideoSection video={data}/>
          <RelatedVideos id={data?.id} title={data?.title} />
      </>
    )
  }

  return (
    <section className="min-h-[calc(100vh_-_157px)] pb-20 pt-6">
      <div className="mx-auto min-h-[400px] max-w-7xl px-2 pb-20">
        <div className="grid grid-cols-3 gap-2 lg:gap-16">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Video;
