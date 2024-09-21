import React, { useState } from "react";

const Comment: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="text-black w-full h-full flex flex-col justify-end items-center p-2">
      <div
        className={`h-[15%] flex items-center p-4 justify-around bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${
          toggle ? "w-full" : "w-[80%]"
        } mx-auto`}
      >
        <p>💬</p>
        <p className="text-black">1241234</p>
        {toggle && (
          <div
            className={`overflow-hidden transition-all ease-out duration-500 opacity-100 max-h-10`}
          >
            <p className="text-black">Failed to Complete</p>
          </div>
        )}
        <button
          className="bg-red-400 p-2 text-white rounded-sm"
          onClick={() => setToggle(!toggle)}
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default Comment;
