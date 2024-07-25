import React from "react";
import Image from "../app/assets/landing.png"

function Landing() {
  return (
    <div className=" w-full h-fit md:h-[100vh] md:flex justify-between items-center  gap-10 bg-slate-200 px-5 md:pl-28  pt-32  md:pt-0 py-10">
      <div className="text md:w-1/2 w-full  md:h-[70vh] ">
        <div className="heading md:pt-10">
          <h1 className="md:text-4xl text-3xl font-semibold">
            <span className="md:text-4xl text-3xl font-bold text-yellow-500">
              User Centric Excellence
            </span>
            : Our
          </h1>
          <h1 className="md:text-4xl text-3xl font-semibold">App development Services </h1>
          <h1 className="md:text-4xl text-3xl font-semibold">Tackels Your Pain Points </h1>
        </div>
        <div className="para py-5 md:py-10 text-lg font-semibold capitalize">
          <p>
            Experience a seamless digital journey with{" "}
            <span className="text-green-700 font-bold">Desum</span> - Where
            every line of code resolves your challenges and{" "}
            <span className="text-yellow-500 font-bold capitalize">
              elevates your app experience{" "}
            </span>
            to unparallel heights
          </p>
        </div>
        <div className="card py-10 md:w-[40vw] w-[90vw] h-full md:h-[35vh]  px-10 bg-white rounded-2xl shadow-2xl">
          <h1 className="text-lg font-semibold w-3/4">
            Leave your Contact and we will call you back within 30 min
          </h1>
          <div className="md:flex gap-7 ">
            <div className="details  h-full md:w-1/3 py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-sm text-slate-600">Full name</h1>
                <h1 className="text-sm py-1">My name</h1>
                <div className="border-t-[2px] "></div>
              </div>
              <div>
                <h1 className="text-sm text-slate-600">Buisness name </h1>
                <h1 className="text-sm py-1">Abc Technology</h1>
                <div className="border-t-[2px] "></div>
              </div>
            </div>
            <div className="details h-full md:w-1/3 md:py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-sm text-slate-600">Phone no</h1>
                <h1 className="text-sm py-1">+91 00000000</h1>
                <div className="border-t-[2px] "></div>
              </div>
              <div>
                <h1 className="text-sm text-slate-600">Business mail</h1>
                <h1 className="text-sm py-1">demo@gmail.com</h1>
                <div className="border-t-[2px] "></div>
              </div>
            </div>
            <div className="details h-full w-1/3 md:py-20 py-5">
            <button className="px-5 py-1 text-white font-semibold bg-lime-600 rounded-xl">Get Consultation</button>
            </div>
          </div>
        </div>
      </div>
      <div className="image w-1/2 hidden md:block h-[100vh] -my-40 ">
      <img className="w-full  z-999 h-full bg-cover " src="https://i.pinimg.com/564x/c0/95/5b/c0955bf64385b5cd73ac79d788fefd66.jpg" alt="" />
      </div>
    </div>
  );
}

export default Landing;
