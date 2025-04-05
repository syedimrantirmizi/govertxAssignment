import React from "react";

const IconButton = ({
  img = "empty.jpg",
  color = "green",
  focus = "no",
  mobile = "no",
}) => {
  return (
    <div
      className={`w-[50px] h-[50px] pt-2 px-2.5 pb-3 ${
        mobile === "no"
          ? (

            img === "empty.jpg"
            ? " border-b-1 border-[#1D1D1D]"
            : " border-b-1 border-[#1D1D1D]"
          ) : null 
      } ${focus == "yes" ? "bg-[#3A3030]" : ""}`}
    > 
      <div className={`w-[30px] h-[30px] rounded-full ${mobile == "no" ? "bg-white" : ""} flex justify-center items-center relative`}>
        <img
          src={`/${img}`}
          alt= {img.split(".")[0]}
          className={mobile == "no" ? "w-[15.88px] h-[15.88px]" : "w-full h-full rounded-full"}
        />
        {mobile === "no" ? (
          img === "empty.jpg" ? (
            color === "green" ? (
              <div className="w-[8px] h-[8px] bg-[#01754F] rounded-full absolute right-0 bottom-0 "></div>
            ) : (
              <div className="w-[8px] h-[8px] bg-[#8B3A08] rounded-full absolute right-0 bottom-0 "></div>
            )
          ) : null
        ) : null}
      </div>
      
    </div>
  );
};

export default IconButton;
