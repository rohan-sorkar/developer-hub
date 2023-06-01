const VideoPlayer = () => {
  return (
    <iframe
      width="100%"
      className="aspect-video rounded-lg"
      src="https://www.youtube-nocookie.com/embed/3rKyewl7wzo"
      title="Why you SHOULD be using TypeScript with React"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
