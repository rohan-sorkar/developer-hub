import { useGetTagsQuery } from "../../../../features/tags/tagsApi";
import TagLoader from "../../../../components/ui/loaders/tagLoader";
import ResetButton from "../../../../components/ui/resetButton";
import TagItem from "./tagItem";
import Error from "../../../../components/ui/error";

const Tags = () => {
  const {data, isLoading, isError} = useGetTagsQuery();
  
  //decide what to render
  let content;

  if(isLoading) {
    content = [1,2,3,4,5,6,7,8,9,10,11].map((v) => <TagLoader key={v}/>)
  }   
  if(!isLoading && isError) {
    content = <Error message="An error occurred in the tags"/>
  }
  if(!isLoading && !isError && data?.length === 0 ) {
    content = <Error message="The tag list is empty"/>
  }
  if(!isLoading && !isError && data?.length && data.length > 0 ) {
    content = data.map((tag) => <TagItem key={tag.id} tag={tag}/>)
  }
  
  return (
    <div className="mx-auto mb-6 flex max-w-7xl flex-wrap gap-2 border-b px-5 pb-7 md:pt-7 lg:px-0">
      {content}
      <ResetButton />
    </div>
  );
};

export default Tags;
