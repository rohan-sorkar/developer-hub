interface PropsType {
    label: string,
    type: string,
    placeholder: string,
    name: string,
}

const InputTextField = (props: PropsType) => {
  return (
    <div className="mb-3">
      <label className="font-mono text-slate-700">
        {props.label}
      </label>
      <input
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputTextField;
