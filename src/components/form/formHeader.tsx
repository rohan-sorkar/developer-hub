import logo from "../../assets/images/logo.png";

const FormHeader = ({headerText} : {headerText: string}) => {
  return (
    <div>
      <img
        className="mx-auto h-9 w-12 md:h-12 md:w-16 rounded-xl"
        src={logo}
        alt="developer-hub"
      />
      <h2 className="mt-3 md:mt-6 text-center text-xl md:text-3xl font-bold md:font-extrabold text-slate-600">
        {headerText}
      </h2>
    </div>
  );
};

export default FormHeader;
