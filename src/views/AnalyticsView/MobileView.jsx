import React, { useState } from "react";
import IconButton from "../../components/IconButton";
import { useNavigate } from "react-router";

const MobileView = () => {
  const navigate = useNavigate();
  const [openVisitor, setOpenVisitor] = useState(false);
  const [openDays, setOpenDays] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [chart, setChart] = useState("chart1.png");
  const options = ["Visitors", "Connections", "Interactions", "Impressions"];
  return (
    <div className="h-screen w-screen new:hidden relative">
      <div className="min-w-[390px] w-full h-[120px] bg-black ">
        <div className="pb-8 pt-2 flex justify-between items-center">
          <IconButton mobile="yes" />
          <IconButton img="govertxlogo.png" mobile="yes" />
          <div className="min-w-[50px] flex justify-center">
            <img src="/dots.png" alt="dots" className="" />
          </div>
        </div>
        <div className="flex w-full h-[26px] justify-around ">
          <div className="manrope-600 text-xs min-w-[83px] text-center  text-white relative">
            Overview
            <span className="absolute -bottom-1 w-[80px] bg-white h-0.5 left-0.5 rounded-full"></span>
          </div>
          {["Reports", "Demographics"].map((label) => (
            <div
              key={label}
              className={`manrope-600 text-xs min-w-[83px] text-center text-white `}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-[390px] w-full pb-[22px] bg-[#080808] flex flex-col gap-6 items-center px-6">
        {/* first box */}
        <div className=" w-full rounded-lg h-[273px] mt-6 bg-black py-[20px] px-[22px] ">
          <div className="flex gap-2 text-white">
            <button
              className="bg-black border  w-[120px] flex justify-around items-center border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 "
              onClick={() => setOpenVisitor(!openVisitor)}
            >
              <p className="z-20 w-full text-left manrope-600 text-[10px]">
                Visitors
              </p>
              <img src="/dropdownArrow.png" className="w-4 h-2 z-20" alt="" />
              {openVisitor && (
                <div className="absolute top-[14px] pt-3 w-[calc(100%+2px)] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg z-10">
                  <ul className="py-1">
                    {options.map((option, index) => (
                      <li
                        key={option}
                        className={`px-4 py-1 h-[24px] text-[8px] manrope-600 cursor-pointer text-left ${
                          index === 0
                            ? "text-white bg-[#1D1D1D]"
                            : "text-[#666] hover:bg-[#1D1D1D] hover:text-white"
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
            <button
              className="bg-black border  w-[120px] flex justify-around items-center border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 "
              onClick={() => setOpenDays(!openDays)}
            >
              <p className="z-20 w-full text-left manrope-600 text-[10px]">
                Last 30 days
              </p>
              <img src="/dropdownArrow.png" className="w-4 h-2 z-20" alt="" />
              {openDays && (
                <div
                  className={`absolute ${
                    openAdd === true ? "top-[20px]" : "top-[14px]"
                  }  pt-3 w-[calc(100%+2px)] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg -z-10`}
                >
                  <ul className="py-1">
                    {[
                      "Today",
                      "Yesterday",
                      "This week",
                      "Last week",
                      "Last 7 days",
                      "Last 30 days",
                    ].map((option, index) => (
                      <li
                        key={option}
                        className={`px-4 py-1 h-[24px] text-[8px] manrope-600 cursor-pointer text-left ${
                          index === 0
                            ? "text-white bg-[#1D1D1D]"
                            : "text-[#666] hover:bg-[#1D1D1D] hover:text-white"
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
            <button
              className={`${
                openAdd === true ? "w-[120px] px-4" : "px-4 border-dashed"
              }  bg-black  py-1 rounded-full text-sm border flex justify-around items-center  border-[#1D1D1D] relative z-0`}
              onClick={() => setOpenAdd(!openAdd)}
            >
              <p className="z-50 w-full text-left manrope-500 text-[10px]">
                {chart === "chart1.png" ? "+ Add" : "Connections"}
              </p>
              {chart === "chart2.png" && (
                <img src="/dropdownArrow.png" className="w-4 h-2 z-20" alt="" />
              )}
              {openAdd && (
                <div className="absolute top-[14px]  pt-3 w-[calc(100%+2px)] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg -z-10">
                  <ul className="py-1">
                    {["Connections", "Interactions", "Impressions"].map(
                      (option, index) => (
                        <li
                          key={option}
                          onClick={() =>
                            option === "Connections"
                              ? setChart("chart2.png")
                              : setChart("chart1.png")
                          }
                          className={`px-4 py-1 h-[24px] text-[8px] manrope-600 cursor-pointer text-left ${
                            index === 0
                              ? "text-white bg-[#1D1D1D]"
                              : "text-[#666] hover:bg-[#1D1D1D] hover:text-white"
                          }`}
                        >
                          {option}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </button>
          </div>
          <div className="flex items-center mt-[10px]">
            <p className="manrope-800 text-[24px] text-white">13.49K</p>
            <div className="flex flex-col  ml-1">
              <span className="text-[#01754F] manrope-600 text-[10px]">
                +469%
              </span>
              <span className="text-[#555555] manrope-600 text-[10px]">
                (897)
              </span>
            </div>
          </div>
          <img
            src={`/${chart}`}
            className="w-full h-[calc(100%-100px)]"
            alt=""
          />
        </div>
        {/* second box */}
        <div className="min-w-full py-[20px] px-[22px] w-full rounded-lg bg-black text-white">
          <div className="flex items-center justify-between">
            <p className="manrope-700 text-xl text-white">Insights</p>
            <button className="bg-black border  w-[108px] flex items-center justify-around border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 ">
              <p className="z-20 w-full text-left manrope-600 text-[12px]">
                Visitors
              </p>
              <img src="/dropdownArrow.png" className="w-4 h-2" alt="" />
            </button>
          </div>
          <div className="flex justify-between">
            {[
              { name: "Founders", value: "7.4K", number: "+000%" },
              { name: "Investors", value: "6.09K", number: "+000%" },
            ].map((item) => (
              <section
                className={item.name == "Founders" ? "mt-4" : "mt-[11px]"}
                key={item.name}
              >
                <p className="manrope-600 text-base text-white">{item.name}</p>
                <div className="flex items-center">
                  <p className="manrope-800 text-[32px]">{item.value}</p>
                  <div className="flex flex-col gap-1 ml-2">
                    <span className="text-[#01754F] manrope-600 text-xs">
                      {item.number}
                    </span>
                    <span className="text-[#555555] manrope-600 text-xs">
                      {item.number}
                    </span>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="h-[1px] w-full bg-[#1D1D1D] mt-[10px]"></div>
          <div className="flex justify-end w-full">
            <button className="mt-[15px] flex items-center gap-4">
              <p className="manrope-600 text-[12px] text-white">
                View detailed insights
              </p>
              <img src="/arrow_back.png" alt="" className="h-[16px] w-[16px]" />
            </button>
          </div>
        </div>
        {/* third box */}
        <div className="min-w-full max-w-[901px] py-[20px] px-[22px] mb-16 rounded-lg bg-black flex flex-col relative text-white">
          <div className="w-full ">
            <p className="manrope-600 text-xl text-white">Demographics</p>
            <button className="bg-black border  w-[108px] flex items-center justify-around border-[#1D1D1D] px-4 py-1 rounded-full text-sm absolute mt-3  z-0 ">
              <p className="z-20 w-full text-left manrope-600 text-[12px]">
                Visitors
              </p>
              <img src="/dropdownArrow.png" className="w-4 h-2" alt="" />
            </button>
            <img src="/map.png" alt="" className="w-full mt-12" />
          </div>
          <div className="w-full space-y-4 mt-4 flex justify-center flex-col ">
            {[
              { name: "India", percent: 40, color: "bg-[#6B4EFF]" },
              { name: "USA", percent: 25, color: "bg-[#FF7E29]" },
              { name: "CANADA", percent: 10, color: "bg-[#FFCD00]" },
              { name: "UAE", percent: 7, color: "bg-[#1CB98D]" },
            ].map((item) => (
              <div key={item.name} className="flex items-center">
                <img
                  src={`/${item.name.toLowerCase()}.png`}
                  alt={item.name}
                  className="w-8 h-6 mt-3 rounded-sm"
                />
                <div className="w-full pl-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="manrope-600 text-base">{item.name}</p>
                    </div>
                    <span className="text-[10px]  manrope-600">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#2A2A2A] rounded-full mt-1">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="h-[1px] w-full bg-[#1D1D1D] mt-[10px]"></div>
            <div className="flex items-center justify-end gap-4 mt-4 text-sm hover:underline cursor-pointer">
              <p className="manrope-600 text-[12px] text-white">
                View detailed insights
              </p>
              <img src="/arrow_back.png" alt="" className="h-[16px] w-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[390px] w-full h-[60px] fixed bottom-0  bg-black flex justify-around items-center ">
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
