interface PropsType {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any;
}

const InputTextField = ({
  label,
  type,
  name,
  placeholder,
  register,
  ...fields
}: PropsType) => {
  return (
    <div className="mb-3">
      <label className="font-mono text-slate-700">{label}</label>
      <input
        className="relative block w-full appearance-none rounded-none rounded-t-md border-2 border-teal-500 px-3 py-2 text-gray-900 placeholder-gray-500  focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
        type={type}
        name={name}
        placeholder={placeholder}
        {...fields}
        {...register}
      />
    </div>
  );
};

export default InputTextField;
