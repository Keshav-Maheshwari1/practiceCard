import React, { useState } from "react";

const Analytics: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="text-black w-full h-full flex flex-col justify-end items-center p-3">
      <div
        className={`flex flex-col p-4 justify-around bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out mx-auto ${
          toggle ? "w-full h-[80%]" : "w-[80%] h-[15%]"
        } relative `}
      >
        {toggle && (
          <div className="w-full flex justify-between">
            <div>
              <p className="text-black">
                Traffic <span className="ml-2">Last 3 Days</span>
              </p>
              <p className="text-gray-500">/Links</p>
              <p className="text-gray-500">/Links</p>
              <p className="text-gray-500">/Links</p>
              <p className="text-gray-500">/Links</p>
            </div>
            <div>
              <p className="text-black">See all</p>
              <p className="text-gray-500">/2345 visits</p>
              <p className="text-gray-500">/2345 visits</p>
              <p className="text-gray-500">/2345 visits</p>
              <p className="text-gray-500">/2345 visits</p>
            </div>
          </div>
        )}
        <div className="flex justify-around  w-full absolute bottom-0 p-2 ">
          <p>📈</p>
          <p className="text-black">Abchsdif</p>
          <button
            className={`p-2 text-white rounded-sm ${
              toggle ? "bg-black" : "bg-blue-400"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? `Close` : `Analytics`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
