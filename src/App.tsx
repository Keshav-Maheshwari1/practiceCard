import React, { useState } from "react";
import Comment from "./components/Comment";
import Analytics from "./components/Analytics";
import Upgrade from "./components/Upgrade";

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="bg-[rgba(238,238,238,0.93)] w-[30%] h-[80%] p-3">
        <div className="w-full h-[90%] relative" style={{ userSelect: "none" }}>
          <img
            src="forest.jpg"
            alt="forest"
            className="h-full w-full object-cover"
          />
          <div className="absolute bg-[#eeee] h-[91%] w-[90%] top-0 left-0 bottom-0 right-0 m-auto flex flex-col backdrop-blur-sm rounded-md">
            <div className="w-full h-full ">
              { index === 1 ? <Comment/> : index === 2 ? <Analytics/>  : <Upgrade/> }
            </div>
            <div className="w-full h-[20%] items-end p-4 justify-around flex ">
              <button className="text-black hover:text-white hover:bg-black p-2 rounded-sm" onClick={()=>setIndex(1)}>
                Comment
              </button>
              <button className="text-black hover:text-white hover:bg-black p-2 rounded-sm" onClick={()=>setIndex(2)}>
                Analytics
              </button>
              <button className="text-black hover:text-white hover:bg-black p-2 rounded-sm" onClick={()=>setIndex(3)}>
                Upgrade
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-3 flex justify-between items-center">
          <p className="text-black">#1xDChallenge</p>
          <p className="text-black">Day5</p>
          <p className="text-black">
            <span>🅿️</span>PeerList
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
