import React from "react";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const DesktopView = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black max-h-[832px] max-w-[1280px] w-full h-full border border-[#1D1D1D] max-new:hidden">
      <div className="max-h-[50px] h-full w-full flex ">
        <IconButton img="govertxlogo.png" />
        <p className="max-w-[190px] w-full h-full text-white manrope-500 text-lg flex items-center pl-[23px] pb-3.5 pt-[13px] border-r-1 border-[#1D1D1D] border-b-1 tracking-tight">
          Vertxlabs, Inc
        </p>
        <div className="max-w-[920px] w-full h-full flex justify-between ">
          <p className="text-white manrope-400 tracking-tight pl-[23px] py-3 w-full max-w-[800px] border-b-1 border-[#1D1D1D] ">
            Profile
          </p>
          <Button text="Activity" />
        </div>
        <Button text="Log out" />
      </div>
      <div className="w-full h-[782px] flex bg-black">
        <div className="w-[50px] h-full flex flex-col justify-between border-r-1 border-[#1D1D1D]">
          <div>
            <IconButton img="empty.jpg" focus="yes" />
            <IconButton img="empty.jpg" color="red" />
            <IconButton img="empty.jpg" />
          </div>
          <span className="w-[50px] h-[50px] border-t-1 border-[#1D1D1D] "></span>
        </div>
        <div className="max-w-[190px] w-full h-full flex flex-col justify-between border-r-1 border-[#1D1D1D] bg-black">
          <div className="pt-[16px] pl-[23px] gap-[28px] flex flex-col">
            {[
              "Dashboard",
              "Analytics",
              "Connect",
              "Dealroom",
              "Profile",
              "Settings",
            ].map((item) => (
              <p
                key={item}
                className={`${
                  item === "Dashboard"
                    ? "text-white" : "text-[#555555]"} manrope-700 tracking-tight hover:text-white hover:cursor-pointer  transition-all duration-500`}
                onClick={() => {
                  if (item === "Analytics") {
                    navigate("/analytics");
                  } else if (item === "Dashboard") {
                    navigate("/");
                  }
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="max-w-[1039px] w-full h-full ">
          <div className="w-full h-[49px] flex justify-end ">
            <div className="max-w-[930px] w-full h-full flex  border-b-1 border-[#1D1D1D]">
              {["Overview", "Portfolio", "Experience", "Media"].map((item) => (
                <p
                  key={item}
                  className={`${
                    item === "Overview"
                      ? "text-white"
                      : "text-[#555555] hover:text-white hover:bg-[#1D1D1D] hover:cursor-pointer"
                  } manrope-600 tracking-tight border-r-1 border-[#1D1D1D] w-[120px] flex justify-center items-center transition-all duration-500`}
                >
                  {item}
                </p>
              ))}
            </div>
            <Button text="More" />
          </div>
          <div>
            <div className="w-full h-[733px] bg-[#080808] flex flex-col justify-center items-center px-16">
              <div className="text-white w-full  max-w-[971.1734619140625px] h-[623.2243041992188px] ">
                <p className="manrope-800 text-[28px] pb-[24px]">Overview</p>
                <div className="w-full h-[198.4790802001953px] bg-black border border-[#272727] rounded-xl flex items-center pl-[70px]">
                  <div>
                    <img src="/user.png" alt="" className="w-[80px] h-[80px]" />
                  </div>
                  <div className="h-full flex flex-col pt-7 pb-7 pl-[30px] ">
                    <div className="flex items-center h-[32.74905014038086px] pb-0.5">
                      <p className="text-[24px] w-[197.978271484375px] manrope-600">
                        Mr A
                      </p>
                      <img
                        src="/verified.png"
                        alt=""
                        className="w-[20.45px] h-[20.45px]"
                      />
                    </div>
                    <p className="text-white manrope-500 text-[12px] flex items-center pb-3.5">
                      Co-Founder & CEO @Vertx
                      <span className="bg-white w-[12px] h-[12px] rounded-[1px] flex justify-center items-center ml-2">
                        <img
                          src="/govertxlogo.png"
                          className="w-2 h-2"
                          alt=""
                        />
                      </span>
                    </p>
                    <p className="bg-white w-[72px] h-[14px] rounded-xs jetbrains-500 text-[10px] text-black pl-1 mb-8">
                      Entrepreneur
                    </p>
                    <div className="flex gap-[8px] items-center">
                      <img
                        src="/linkedin.png"
                        className="w-[28px] h-[28px]"
                        alt=""
                      />
                      <img src="/x.png" className="w-[24px] h-[24px]" alt="" />
                      <img
                        src="/gmail.png"
                        className="w-[30px] h-[30px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <section className="w-full flex gap-[18px] h-[347.3384094238281px]">
                  <div className="w-full max-w-[444.2623596191406px] min-w-[250px] h-full bg-black border border-[#272727] rounded-xl pl-[28px] mt-3.5 pt-[18px]">
                    <p className="manrope-800 text-lg pb-2.5">
                      Founded Companies
                    </p>
                    <p className="manrope-800 text-[64px]">02</p>
                    <div className="flex items-center justify-between mt-4 ">
                      <div className="bg-white min-w-[32px] max-w-[32px] h-[29px] rounded-[2px] flex justify-center items-center">
                        <img
                          src="/govertxlogo.png"
                          className="w-[18.78px] h-[18.78px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[calc(100%-120px)]">
                        <div className="flex  gap-2.5 items-center ">
                          <p className="manrope-700 text-sm">Vertx</p>
                          <div className="bg-[#579560] w-6 rounded-[2px] text-center text-[8px] h-3 text-[#04470B] jetbrains-mono-500">
                            CEO
                          </div>
                        </div>
                        <div className="manrope-400 text-[10px]">
                          Founded in 2025. in <b>Fintech</b>
                        </div>
                      </div>
                      <div className="manrope-500 text-[8px] pr-5 cursor-pointer">
                        View Profile
                      </div>
                    </div>
                    <div className="flex items-top justify-between mt-4 ">
                      <div className="pt-1">
                        <img
                          src="/empty.jpg"
                          className="min-w-[32px] h-[29px] rounded-[2px]"
                          alt=""
                        />
                      </div>
                      <div className="w-[calc(100%-120px)]">
                        <div className="flex gap-2.5 items-center">
                          <p className="manrope-700 text-sm ">Vertx</p>
                          <div className="bg-[#B1BDEB] w-14 rounded-[2px] text-center text-[8px] h-3 text-[#10074F] jetbrains-mono-500">
                            PROPRIETOR
                          </div>
                        </div>
                        <div className="manrope-400 max-w-[200px] text-[10px]">
                          Founded in 2023. Acquired by abc. in
                          <b>QuickCommerce.</b>
                        </div>
                      </div>
                      <div className="manrope-500 text-[8px] pr-5 cursor-pointer">
                        View Profile
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-[444.2623596191406px] min-w-[250px] h-full bg-black border border-[#272727] rounded-xl pl-[28px] mt-3.5 pt-[18px] ">
                    <p className="manrope-800 text-lg pb-2.5">Experience</p>
                    <p className="manrope-800 text-[64px]">03</p>
                    {[...Array(3).keys()].map((item) => (
                      <div className="flex items-center justify-between mt-4">
                        <div className="pt-1">
                          <img
                            src="/empty.jpg"
                            className="min-w-[32px] h-[29px] rounded-[2px]"
                            alt=""
                          />
                        </div>
                        <div className="max-w-[calc(100%-120px)] w-full">
                          <div className="flex gap-2.5 items-center">
                            <p className="manrope-700 text-sm ">
                              Company {item + 1}
                            </p>
                          </div>
                        </div>
                        <div className="manrope-500 text-[8px] pr-5 cursor-pointer">
                          View Profile
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
