import React from "react";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F9FAFB md:grid md:place-items-center px-5">
      <div className="my-8 md:my-24 flex items-center justify-center rounded-2xl px-4 py-8 md:py-16 shadow-md sm:px-6 lg:px-8 border-t-2 border-slate-50">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
