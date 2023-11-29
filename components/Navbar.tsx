import React from "react";
import Drow from "./Elements/Drow";

export default function Navbar() {
  return (
    <nav>
      <div className=" justify-center">
        <div className=" mx-10 my-1">
          <div className="">
            <div className="bg-white rounded-full p-1 flex justify-between items-center">
              <div className="flex justify-center items-center">
                <button className="btn px-6 py-2 mx-1 rounded-full border-solid border-[1px] border-[#ffffff4d] hover:bg-[#e7e7e7e7] bg-white ">
                  Sigin Up
                </button>
                <Drow />
              </div>
              <div>
                <button className="pointer-events-auto mr-10 hover:text-violet-500 ">
                  btn
                </button>
                <button className="pointer-events-auto mr-10 hover:text-violet-500 ">
                  btn
                </button>
                <button className="pointer-events-auto mr-10 hover:text-violet-500 ">
                  btn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
