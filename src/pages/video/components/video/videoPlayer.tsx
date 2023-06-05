interface PropsType {
  link: string,
  title: string
}

const VideoPlayer = (props: PropsType) => {
  return (
    <iframe
      width="100%"
      className="aspect-video rounded-lg"
      src={props.link}
      title={props.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
