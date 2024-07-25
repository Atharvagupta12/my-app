import React from "react";
import { LuFileBarChart2 } from "react-icons/lu";

function Application() {
  return (
    <div className="w-full h-full md:px-28 px-5 py-10 bg-white">
      <h1 className="text-4xl font-bold py-16">
        Application Development Stages
      </h1>
      <div className="cardcontainer md:flex justify-between gap-5 ">
      <div className="cards md:w-1/3 flex flex-col gap-8 ">
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
        </div>
        <div className="Image md:h-[70vh] my-5 md:w-1/4 p-5 md:p-0 overflow-hidden ">
          <img
            className="h-full w-full"
            src="https://i.pinimg.com/564x/58/99/a2/5899a26d1b2b3e99511ca5b8db3bf92e.jpg"
            alt=""
          />
        </div>
        <div className="cards md:w-1/3 flex flex-col gap-8 ">
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
          <div className="card w-full h-[22vh] flex flex-col items-center py-4 rounded-xl shadow-xl bg-zinc-100">
          <div className="flex gap-2 items-center">
              <div className="md:text-3xl text-2xl ">
                <LuFileBarChart2 />
              </div>
              <div>
                <h1 className="text-lg py-2 md:py-5 font-semibold">Analysis</h1>
              </div>
            </div>
            <p className="text-md px-8">
              We craft technical specs , aligning with your buisness, technology
              , and user requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
