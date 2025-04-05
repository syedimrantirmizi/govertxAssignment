const AnalyticsDashboard = () => {
  return (
    <div className=" p-4 md:p-6 lg:p-8 text-white space-y-6 w-full max-w-[1280px] mx-auto manrope-400">
      {/* Visitors Chart */}
      <div className="flex flex-row gap-6">
        <div className="flex-1 bg-black rounded-xl p-5 border border-[#1E1E1E] w-[612px] h-[273px] ">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="bg-black border border-[#1D1D1D] px-4 py-1 rounded-full text-sm">
                Visitors
              </button>
              <button className="bg-black border border-[#1D1D1D] px-4 py-1 rounded-full text-sm">
                Last 30 days
              </button>
              <button className="bg-black px-4 py-1 rounded-full text-sm border border-dashed border-gray-600">
                + Add
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-3xl font-bold mr-3">13.49K </div>
            <section className="flex flex-col">
              <span className="text-green-500 text-sm align-top">+469%</span>
              <div className="text-gray-500 text-sm">(897)</div>
            </section>
          </div>
          {/* Placeholder Chart */}
          <div className="mt-6 h-[180px] border-t border-black pt-4">
            <img
              src="/chart1.png"
              alt="chart"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Insights */}
        <div className="w-full max-w-[274px] h-[273px] bg-black rounded-xl p-5 border border-[#1E1E1E] flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">Founders</p>
            <p className="text-2xl font-bold">
              7.4K{" "}
              <span className="text-green-500 text-xs align-top ml-1">
                +000%
              </span>
            </p>
            <p className="text-gray-500 text-xs">(000)</p>
            <p className="text-sm text-gray-400 mt-6 mb-1">Investors</p>
            <p className="text-2xl font-bold">
              6.09K{" "}
              <span className="text-green-500 text-xs align-top ml-1">
                +000%
              </span>
            </p>
            <p className="text-gray-500 text-xs">(000)</p>
          </div>
        </div>
      </div>

      {/* Demographics */}
      <div className="bg-black rounded-xl h-[296px] w-[901px] border border-[#1E1E1E] flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <h2 className="text-xl font-bold mb-4">Demographics</h2>
          <img
            src="/map.png"
            alt="map"
            className="w-full h-[240px] object-contain rounded-lg"
          />
          <div className="flex gap-4 absolute bottom-0 left-0">
            {["India", "USA", "CANADA", "UAE"].map((country, i) => (
              <div
                key={country}
                className={`px-3 py-1 text-xs rounded-full border ${
                  i === 0
                    ? "border-[#6B4EFF] text-[#6B4EFF]"
                    : i === 1
                    ? "border-[#FF7E29] text-[#FF7E29]"
                    : i === 2
                    ? "border-[#FFCD00] text-[#FFCD00]"
                    : "border-[#1CB98D] text-[#1CB98D]"
                }`}
              >
                {country}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[280px] space-y-4">
          {[
            { name: "India", percent: 40, color: "bg-[#6B4EFF]" },
            { name: "USA", percent: 25, color: "bg-[#FF7E29]" },
            { name: "CANADA", percent: 10, color: "bg-[#FFCD00]" },
            { name: "UAE", percent: 7, color: "bg-[#1CB98D]" },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={`/${item.name.toLowerCase()}.png`}
                    alt={item.name}
                    className="w-5 h-4 rounded-sm"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
                <span className="text-sm">{item.percent}%</span>
              </div>
              <div className="w-full h-2 bg-[#2A2A2A] rounded-full mt-1">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mt-4 text-sm hover:underline cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
