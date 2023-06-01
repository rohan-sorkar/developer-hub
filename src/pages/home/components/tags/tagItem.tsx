const TagItem = () => {
  const style = `${
    true
      ? "bg-slate-600 hover:bg-slate-700 text-white"
      : "bg-slate-200 hover:bg-slate-300"
  }  text-slate-600 px-4 py-1 rounded-full cursor-pointer font-mono`;

  return (
    <button type="button" className={style}>
      Javascript
    </button>
  );
};

export default TagItem;
