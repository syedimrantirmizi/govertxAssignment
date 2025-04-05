import React from "react";

const Button = ({ text }) => {
  return (
    <div className="max-w-[120px] min-w-[120px] w-full h-full flex justify-center items-center text-white border-l-1 border-b-1 border-[#1D1D1D] manrope-500 hover:bg-[#1D1D1D] transition-all duration-500 hover:text-white hover:cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
