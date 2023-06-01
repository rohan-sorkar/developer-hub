export default function Error({ message }: { message: string }) {
  return (
    <div className="col-span-12 mx-auto flex h-10 w-full max-w-7xl items-center justify-center bg-red-100 p-2 text-red-700">
      {message}
    </div>
  );
}
