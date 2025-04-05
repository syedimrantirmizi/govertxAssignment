import React from "react";
import IconButton from "../../components/IconButton";
import { useNavigate } from "react-router";

const MobileView = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen new:hidden relative ">
      <div className="min-w-[390px] w-full h-[120px] bg-black ">
        <div className="pb-8 pt-2 flex justify-between items-center">
          <IconButton mobile="yes" />
          <IconButton img="govertxlogo.png" mobile="yes" />
          <div className="min-w-[50px] flex justify-center">
            <img src="/dots.png" alt="dots" className="" />
          </div>
        </div>
        <div className="flex w-full h-[26px] justify-around ">
          <div className="manrope-600 text-xs text-white relative">
            Overview
            <span className=" absolute -bottom-1 w-[70px] bg-white h-0.5 -left-2 rounded-full"></span>
          </div>
          {["Porfolio", "Experience", "Media"].map((label) => (
            <div key={label} className="manrope-600 text-xs text-[#555555]">
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-[390px] w-full pb-[22px] bg-[#080808] flex flex-col  items-center px-6">
        <div className="manrope-700 text-xl pt-[17px] text-white w-full ">
          Overview
        </div>
        <div className="min-w-[344px] w-full h-[270px] bg-black rounded-[10px] mt-[20px] px-[22px] py-[20px]">
          <img
            src="/empty.jpg"
            alt=""
            className="w-[146.07057189941406px] h-[146.07057189941406px] rounded-[10px]"
          />
          <div className="flex items-end">
            <div>
              <div className="flex items-center h-[32.74905014038086px] pb-4 pt-8">
                <p className="text-[24px] w-[197.978271484375px] manrope-700 text-white ">
                  Mr.ABC
                </p>
                <img
                  src="/verified.png"
                  alt=""
                  className="w-[20.45px] h-[20.45px]"
                />
              </div>
              <p className="text-white manrope-500 text-[12px] flex items-center pb-2">
                Co-Founder & CEO @Vertx
                <span className="bg-white w-[12px] h-[12px] rounded-[1px] flex justify-center items-center ml-2">
                  <img src="/govertxlogo.png" className="w-2 h-2" alt="" />
                </span>
              </p>
              <p className="bg-white w-[72px] h-[14px] rounded-xs jetbrains-500 text-[10px] text-black pl-1 ">
                Entrepreneur
              </p>
            </div>
            <div className="flex gap-2 items-center  h-fit">
              {["linkedin", "x", "gmail"].map((icon, index) => (
                <img
                  key={index}
                  src={`/${icon}.png`}
                  className="w-[20px] h-[20px]"
                  alt={icon.split(".")[0]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="min-w-[344px] w-full text-white h-[300px] bg-black rounded-[10px] mt-[10px] px-[22px] py-[20px]">
          <p className="manrope-800 text-lg ">Founded Companies</p>
          <p className="manrope-700 text-[64px]">02</p>
          <div className="flex items-center justify-between mt-4">
            <div className="bg-white w-[32px] h-[29px] rounded-[2px] flex justify-center items-center">
              <img
                src="/govertxlogo.png"
                className="w-[18.78px] h-[18.78px] "
                alt=""
              />
            </div>
            <div className="w-[calc(100%-120px)]">
              <div className="flex  gap-2.5 items-center">
                <p className="manrope-700 text-sm">Vertx</p>
                <div className="bg-[#579560] w-6 rounded-[2px] text-center text-[8px] h-3 text-[#04470B] jetbrains-mono-500">
                  CEO
                </div>
              </div>
              <div className="manrope-400 text-[10px]">
                Founded in 2025. in <b>Fintech</b>
              </div>
            </div>
            <div className="manrope-500 text-[8px]">View Profile</div>
          </div>
          <div className="flex items-top justify-between mt-4">
            <div className="pt-1">
              <img
                src="/empty.jpg"
                className="w-[32px] h-[29px] rounded-[2px]"
                alt=""
              />
            </div>
            <div className="w-[calc(100%-120px)]">
              <div className="flex w-[213px] gap-2.5 items-center">
                <p className="manrope-700 text-sm ">Vertx</p>
                <div className="bg-[#B1BDEB] w-14 rounded-[2px] text-center text-[8px] h-3 text-[#10074F] jetbrains-mono-500">
                  PROPRIETOR
                </div>
              </div>
              <div className="manrope-400 max-w-[200px] text-[10px]">
                Founded in 2023. Acquired by abc. in <b>QuickCommerce.</b>
              </div>
            </div>
            <div className="manrope-500 text-[8px]">View Profile</div>
          </div>
        </div>
      </div>
      <div className="min-w-[390px] h-[60px] w-full bg-black flex justify-around items-center fixed bottom-0 ">
        {["Dashboard", "Analytics", "Connect", "Activity", "Dealroom"].map(
          (label) => (
            <div
              key={label}
              className="flex items-center flex-col justify-center gap-1"
              onClick={() => {
                if (label === "Analytics") {
                  navigate("/analytics");
                } else {
                  navigate("/");
                }
              }}
            >
              <img src={`/${label.toLowerCase()}.png`} alt={label} />
              <p className="text-white manrope-400 text-[8px]">{label}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MobileView;
