interface PropsType {
  text: string;
  img: string;
  handler: () => void;
}

const AuthButton = (props: PropsType) => {
  return (
    <img
      onClick={props.handler}
      className="h-8 md:h-10 w-auto cursor-pointer transition hover:-translate-y-1"
      src={props.img}
      alt={props.text}
    />
  );
};

export default AuthButton;
