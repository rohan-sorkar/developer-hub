import { Link } from "react-router-dom";

interface PropsType {
    link: string,
    linkText: string,
}

const LinkForm = (props: PropsType) => {

  return (
    <div className="flex items-center justify-end">
      <div className="text-sm">
        <Link
          to={props.link}
          className="font-medium text-red-400 underline hover:text-red-500"
        >
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};

export default LinkForm;
