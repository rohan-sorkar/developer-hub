interface PropsType { buttonText: string, disabled?: boolean }

const SubmitButton = (props: PropsType ) => {
  return (
    <div>
      <button
        disabled={props.disabled}
        type="submit"
        className="w-full rounded-md border border-transparent bg-red-400 py-2 font-medium tracking-wider text-white transition hover:bg-[#ED4C67] md:text-lg"
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
