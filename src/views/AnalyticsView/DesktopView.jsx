import React, { useState } from "react";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import AnalyticsDashboard from "../../components/AnalyticsDashboard";

const DesktopView = () => {
  const navigate = useNavigate();
  const [openVisitor, setOpenVisitor] = useState(false);
  const [openDays, setOpenDays] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [chart, setChart] = useState("chart1.png");
  const options = ["Visitors", "Connections", "Interactions", "Impressions"];
  return (
    <div className="bg-black max-h-[832px] max-w-[1280px] w-full h-full border border-[#1D1D1D] max-new:hidden">
      <div className="max-h-[50px] h-full w-full flex ">
        <IconButton img="govertxlogo.png" />
        <p className="max-w-[190px] w-full h-full text-white manrope-500 text-lg flex items-center pl-[23px] pb-3.5 pt-[13px] border-r-1 border-[#1D1D1D] border-b-1 tracking-tight">
          Vertxlabs, Inc
        </p>
        <div className="max-w-[920px] w-full h-full flex justify-between ">
          <p className="text-white manrope-400 tracking-tight pl-[23px] py-3 w-full max-w-[800px] border-b-1 border-[#1D1D1D] ">
            Analytics
          </p>
          <Button text="Activity" />
        </div>
        <Button text="Log out" />
      </div>
      <div className="w-full h-[782px] flex bg-black">
        <div className="w-[50px] h-full flex flex-col justify-between border-r-1 border-[#1D1D1D] bg-black">
          <div>
            <IconButton img="empty.jpg" focus="yes" />
            <IconButton img="empty.jpg" color="red" />
            <IconButton img="empty.jpg" />
          </div>
          <span className="w-[50px] h-[50px] border-t-1 border-[#1D1D1D] "></span>
        </div>
        <div className="min-w-[190px] h-full flex flex-col justify-between border-r-1 border-[#1D1D1D] bg-black">
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
                  item === "Analytics" ? "text-white" : "text-[#555555]"
                } manrope-700 tracking-tight hover:text-white hover:cursor-pointer  transition-all duration-500`}
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
              {["Overview", "Demographics"].map((item) => (
                <p
                  key={item}
                  className={`${
                    item === "Overview"
                      ? "text-white"
                      : "text-[#555555] hover:text-white hover:bg-[#1D1D1D] hover:cursor-pointer"
                  } manrope-600 tracking-tight border-r-1 border-[#1D1D1D] min-w-[120px] px-4  flex justify-center items-center transition-all duration-500`}
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
                <div className="flex gap-4 mb-4">
                  {/* first box */}
                  <div className="min-w-[402px] max-w-[901px] w-full rounded-lg h-[273px] bg-black py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        className="bg-black border  w-[150px] flex justify-around items-center border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 "
                        onClick={() => setOpenVisitor(!openVisitor)}
                      >
                        <p className="z-20 w-full text-left manrope-600 text-[12px]">
                          Visitors
                          {openVisitor && (
                            <span className=" absolute w-[140px] bg-[#1D1D1D] bottom-0 left-1 h-[1px] z-20"></span>
                          )}
                        </p>
                        <img
                          src="/dropdownArrow.png"
                          className="w-4 h-2 z-20"
                          alt=""
                        />
                        {openVisitor && (
                          <div className="absolute -bottom-[105px] pt-3 w-[150px] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg z-10">
                            <ul className="py-1">
                              {options.map((option, index) => (
                                <li
                                  key={option}
                                  className={`px-4 py-1 h-[24px] text-[10px] manrope-600 cursor-pointer text-left ${
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
                        className="bg-black border  w-[150px] flex justify-around items-center border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 "
                        onClick={() => setOpenDays(!openDays)}
                      >
                        <p className="z-20 w-full text-left manrope-600 text-[12px]">
                          Last 30 days{" "}
                          {openDays && (
                            <span className=" absolute w-[140px] bg-[#1D1D1D] bottom-0 left-1 h-[1px] z-20"></span>
                          )}
                        </p>
                        <img
                          src="/dropdownArrow.png"
                          className="w-4 h-2 z-20"
                          alt=""
                        />
                        {openDays && (
                          <div className="absolute -bottom-[152px] pt-3 w-[150px] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg z-10">
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
                                  className={`px-4 py-1 h-[24px] text-[10px] manrope-600 cursor-pointer text-left ${
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
                          openAdd === true
                            ? "w-[150px] px-5"
                            : "px-4 border-dashed"
                        }  bg-black  py-1 rounded-full text-sm border flex justify-around items-center  border-[#1D1D1D] relative z-0`}
                        onClick={() => setOpenAdd(!openAdd)}
                      >
                        <p className="z-50 w-full text-left manrope-500 text-[12px]">
                          {chart === "chart1.png" ? "+ Add" : "Connections"}
                          {openAdd && (
                            <span className=" absolute w-[140px] bg-[#1D1D1D] bottom-0 left-1 h-[1px] z-20"></span>
                          )}
                        </p>
                        {chart === "chart2.png" && (
                          <img
                            src="/dropdownArrow.png"
                            className="w-4 h-2 z-20"
                            alt=""
                          />
                        )}
                        {openAdd && (
                          <div className="absolute -bottom-[80px] left-0 pt-3 w-[150px] bg-black border-b border-x border-[#1D1D1D] rounded-b-md shadow-lg -z-10">
                            <ul className="py-1">
                              {[
                                "Connections",
                                "Interactions",
                                "Impressions",
                              ].map((option, index) => (
                                <li
                                  key={option}
                                  onClick={() =>
                                    option === "Connections"
                                      ? setChart("chart2.png")
                                      : setChart("chart1.png")
                                  }
                                  className={`px-4 py-1 h-[24px] text-[10px] manrope-600 cursor-pointer text-left ${
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
                    </div>
                    <div className="flex items-center mt-[10px]">
                      <p className="manrope-800 text-[32px]">13.49K</p>
                      <div className="flex flex-col gap-1 ml-2">
                        <span className="text-[#01754F] manrope-600 text-xs">
                          +469%
                        </span>
                        <span className="text-[#555555] manrope-600 text-xs">
                          (897)
                        </span>
                      </div>
                    </div>
                    <img src={`/${chart}`} className="w-full " alt="" />
                  </div>
                  {/* second box */}
                  <div className="max-w-[274px]  py-[15px] px-[19px] w-full rounded-lg h-[273px] bg-black max-[1060px]:hidden">
                    <div className="flex items-center justify-between">
                      <p className="manrope-700 text-xl text-white">Insights</p>
                      <button className="bg-black border  w-[108px] flex items-center justify-around border-[#1D1D1D] px-4 py-1 rounded-full text-sm relative z-0 ">
                        <p className="z-20 w-full text-left manrope-600 text-[12px]">
                          Visitors
                        </p>
                        <img
                          src="/dropdownArrow.png"
                          className="w-4 h-2"
                          alt=""
                        />
                      </button>
                    </div>
                    {[
                      { name: "Founders", value: "7.4K", number: "+000%" },
                      { name: "Investors", value: "6.09K", number: "+000%" },
                    ].map((item) => (
                      <section
                        className={
                          item.name == "Founders" ? "mt-4" : "mt-[11px]"
                        }
                        key={item.name}
                      >
                        <p className="manrope-600 text-base text-white">
                          {item.name}
                        </p>
                        <div className="flex items-center">
                          <p className="manrope-800 text-[32px]">
                            {item.value}
                          </p>
                          <div className="flex flex-col gap-1 ml-5">
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
                    <div className="h-[1px] w-full bg-[#1D1D1D] mt-[10px]"></div>
                    <div className="flex justify-end w-full">
                      <button className="mt-[15px] flex items-center gap-4">
                        <p className="manrope-600 text-[12px] text-white">
                          View detailed insights
                        </p>
                        <img
                          src="/arrow_back.png"
                          alt=""
                          className="h-[16px] w-[16px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* third box */}
                <div className="w-full max-w-[901px] h-[296px] px-[19px] py-[18px] rounded-lg bg-black flex relative">
                  <div className="min-w-[330px] ">
                    <p className="manrope-600 text-xl text-white">
                      Demographics
                    </p>
                    <button className="bg-black border  w-[108px] flex items-center justify-around border-[#1D1D1D] px-4 py-1 rounded-full text-sm absolute mt-3  z-0 ">
                      <p className="z-20 w-full text-left manrope-600 text-[12px]">
                        Visitors
                      </p>
                      <img
                        src="/dropdownArrow.png"
                        className="w-4 h-2"
                        alt=""
                      />
                    </button>
                    <img
                      src="/map.png"
                      alt=""
                      className="w-[600px] h-[213.4px]"
                    />
                    <div className="flex gap-4 absolute bottom-4 left-2 border border-[#1D1D1D] bg-black rounded-full px-4 py-1">
                      {["India", "USA", "CANADA", "UAE"].map((country, i) => (
                        <div className="flex items-center ">
                          <div
                            className={`rounded-full h-2 w-2 ${
                              i == 0
                                ? "bg-[#4834D4]"
                                : i == 1
                                ? "bg-[#BD5302]"
                                : i == 2
                                ? "bg-[#E9C16B]"
                                : "bg-[#01754F]"
                            }`}
                          ></div>
                          <p
                            key={country}
                            className={`px-2 py-1 text-xs rounded-full text-white manrope-600 `}
                          >
                            {country}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full max-w-[280px] pl-8 space-y-4">
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
                              <p className="manrope-600 text-base">
                                {item.name}
                              </p>
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
                      <img
                        src="/arrow_back.png"
                        alt=""
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
