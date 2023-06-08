import loadingSpinnerImg from '../../assets/images/loading-spinner.png';

interface PropsType { buttonText: string, isLoading?: boolean }

const SubmitButton = ({buttonText, isLoading}: PropsType ) => {
  return (
    <div>
      <button
        disabled={isLoading}
        type="submit"
        className={`${isLoading ? 'cursor-not-allowed bg-red-100 text-red-300' : 'bg-red-400 text-white transition hover:bg-[#ED4C67]'} w-full rounded-md py-2 font-medium tracking-wider md:text-lg flex justify-center items-center`}
      >
        {isLoading && <img className='w-7 rounded-full mr-3 animate-spin' src={loadingSpinnerImg}/>}
        {buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
