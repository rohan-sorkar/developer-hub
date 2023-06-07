import { useEffect, useState } from "react";
import Error from "../../../../components/ui/error";
import RelatedVideoLoader from "../../../../components/ui/loaders/relatedVideoLoader";
import { useGetRelatedVideosQuery } from "../../../../features/videos/videosApi";
import RelatedVideoItem from "./relatedVideoItem";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { VideoType } from "../../../../types";

const RelatedVideos = ({ id, title }: { id: number; title: string }) => {
  const { data, isLoading, isError, isSuccess } = useGetRelatedVideosQuery({
    id,
    title,
  });
  const [videos, setVideos] = useState<VideoType[]>([]);

  const removeFromList = (list: VideoType[], index: number) => {
    const copiedVideoList = Array.from(list);
    const [removed] = copiedVideoList.splice(index, 1);
    return {removedVideo: removed, newVideoList: copiedVideoList};
  }

  const addToList = (list: VideoType[], index: number, element: VideoType) => {
    const copiedList = Array.from(list);
    copiedList.splice(index, 0, element);
    return copiedList;
  }

  const handleOnDragEnd = (result: DropResult) => {
    if(!result.destination) return;
    let copiedVideos = [...videos];
    const {removedVideo, newVideoList} = removeFromList(copiedVideos, result.source.index);
    copiedVideos = newVideoList

    const newSource = addToList(newVideoList, result.destination.index, removedVideo);

    setVideos(newSource);
  };

  //decide what to render
  let content: any;
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
    content = videos?.map((video, index) => (
      <Draggable key={video.id} draggableId={video.id.toString()} index={index}>
        {(provided, snapShot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <RelatedVideoItem isDragging={snapShot.isDragging} video={video} />
          </div>
        )}
      </Draggable>
    ));
  }

  useEffect(() => {
    if(!isError && isSuccess) {
      setVideos(data);
    }
  }, [isSuccess]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="relatedVideos">
        {(provided, snapShot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="no-scrollbar related-video-shadow col-span-full max-h-screen overflow-y-auto rounded-xl p-5 lg:col-auto"
          >
            {content}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RelatedVideos;
