import { useEffect, useRef, useState } from "react";
import emojiImg from "../../../../../assets/images/emoji.webp";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes';
import { VideoType } from "../../../../../types";
import { useAppSelector } from "../../../../../app/hooks";
import shortid from "shortid";
import { useAddCommentMutation, useEditCommentMutation } from "../../../../../features/comments/commentsApi";
import Error from "../../../../../components/ui/error";

const CommentInputField = ({video} : {video: VideoType}) => {
  const {user} = useAppSelector((state) => state.auth) || {};
  const {email: userEmail, name: userName} = user || {};
  const {updateCommentId} = useAppSelector(state => state.comments) || {};
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const [addComment, {isError: isAddCommentError}] = useAddCommentMutation();
  const [updateVideoComment, {isError: isUpdateCommentError}] = useEditCommentMutation();

  const onClickEmoji = (emojiData: EmojiClickData) => {
    setSearchTerm((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(!showEmojiPicker);
    inputRef.current?.focus();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      if((searchTerm == null) || (searchTerm === '')) return;
      if(isUpdate) {
        upDateComment();
      } else {
        createCommentAndUpdateVideo();
      }
    }
  }

  const upDateComment = () => {
    const updatedComments = video?.comments.map((comment) => {
      if(comment.id === updateCommentId) {
        comment = {...comment, title: searchTerm}
      }
      return comment
    });
    const updatedVideo = {...video, comments: [...updatedComments]};
    updateVideoComment({id: video?.id, updatedVideo});
    setSearchTerm('');
    setIsUpdate(false);
    inputRef.current?.blur();
  }

  const createCommentAndUpdateVideo = () => {
    const newComment = {
      id: shortid.generate(),
      title: searchTerm,
      name: userName,
      email: userEmail,
      date: new Date(),
      likes: []
    };
    const updatedVideo = {...video, comments: [newComment, ...video?.comments]};
    addComment({id: video?.id, updatedVideo: updatedVideo});
    setSearchTerm('');
    inputRef.current?.blur();
  }

  useEffect(() => {
    const comment = video.comments.find((c) => c.id === updateCommentId);
    if (comment?.title !== undefined) {
      setSearchTerm(comment?.title);
      setIsUpdate(!isUpdate);
    }
  }, [updateCommentId]);

  if(isAddCommentError || isUpdateCommentError) return <Error/>;

  return (
    <div className="relative">
      <input
        type="text"
        className="w-80 rounded border border-gray-300 py-1 pl-6 pr-12 italic text-gray-600 caret-slate-400 outline-none focus:shadow-inner"
        placeholder="Write a comment..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <img
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="absolute right-0 top-0 mr-5 mt-1 h-7 w-7 cursor-pointer"
        src={emojiImg}
        alt="emoji"
      />
      <div className="absolute pb-7">
        {showEmojiPicker && <EmojiPicker onEmojiClick={onClickEmoji} width={320}/>}
      </div>
    </div>
  );
};

export default CommentInputField;
