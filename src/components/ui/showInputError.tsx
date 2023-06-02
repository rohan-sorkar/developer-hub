const ShowInputError = ({ message = 'something went wrong' }: { message?: string }) => {
  return <p className="-mt-2 capitalize text-[#EB5151]">{message}</p>;
};

export default ShowInputError;
