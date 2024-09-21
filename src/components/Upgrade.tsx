import React, { useState } from "react";

const Upgrade: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="text-black w-full h-full flex flex-col justify-end items-center p-2">
      <div
        className={`h-[15%] flex items-center p-4 justify-around bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${
          toggle ? "w-full" : "w-[80%]"
        } mx-auto`}
      >
        <p>©️</p>

        {toggle ? (
          <div
            className={`overflow-hidden transition-all ease-out duration-500 opacity-100 max-h-10`}
          >
            <p className="text-black">
              upgrade to <span className="text-green-400">Pro</span> and Save
              $12
            </p>
          </div>
        ) : (
          <p className="text-black">2 days left in your trail</p>
        )}
        <button
          className="p-2 text-white rounded-sm 
              bg-green-400"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? `See Pro` : `Billing`}
        </button>
      </div>
    </div>
  );
};

export default Upgrade;
