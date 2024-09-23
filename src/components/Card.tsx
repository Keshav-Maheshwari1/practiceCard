import React, { useState } from "react";

const Card = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const handlebuttonClick = () => {
    setToggle(!toggle);
    setValue(0);
  };
  const handleDivClick = () => {
    setShowIcon(!showIcon);
  };
  const updateValue = () => {
    setValue(value + 2);
  };

  if (toggle) {
    setTimeout(() => {
      updateValue();
    }, 500);
  }
  return (
    <div
      className={`flex justify-between   bg-[#eee] rounded-md shadow-sm overflow-hidden
      ${
        toggle ? "w-[50%] h-[80%] flex-col" : "w-[30%] h-[15%]"
      } transition-all duration-300 ease-out p-4
      `}
    >
      <p>
        <img src="bike.jpg" className="w-full h-full object-cover" alt="bike" />
      </p>
      {toggle && (
        <input
          type="range"
          name=""
          id=""
          value={value}
          className="transition-all ease-out"
          min="0"
          max="100"
        />
      )}

      <div className="flex justify-between p-4">
        <div
          className={`flex flex-col border-2 h-full ${!toggle && "ml-[-20%]"}`}
        >
          <p className="text-black text-xl ">headline</p>
          <p className="text-gray-500 text-lg">Another Text</p>
        </div>
        <div
          className="h-full w-[50%] flex items-center justify-end p-3 shadow-sm"
          onClick={handleDivClick}
        >
          {toggle ? (
            <button
              className="bg-black text-white rounded-sm p-2"
              onClick={() => setToggle(!toggle)}
            >
              ⏸️Pause
            </button>
          ) : (
            <button
              className="bg-black text-white rounded-sm p-2"
              onClick={handlebuttonClick}
            >
              {showIcon ? (
                <span className="text-white w-full ">▶️</span>
              ) : (
                <span className="text-white w-full">▶️ Play</span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
