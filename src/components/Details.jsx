import React from "react";

function Details() {
  return (
    <div className="w-full md:h-[50vh] bg-white md:px-28 px-5 md:py-10 py-20 md:flex justify-between gap-20  ">
      <div className="md:w-1/2 ">
        <h1 className="text-3xl font-bold ">Full Development Cycle </h1>
        <p className="text-sm font-medium py-5">We use proven technologies </p>
        <div className="md:w-3/4">
          <h1 className="font-bold md:py-3 ">Web</h1>
          <p className="capitalize text-sm ">
            PHP / javascript / node.js / websocket / socket.io / vue.js / Next /
            MySql / Laravel / GoLang / Django / Python
          </p>
        </div>
        <div className="w-3/4">
          <h1 className="font-bold md:pt-8 pt-4">Mobile</h1>
          <p className="capitalize text-sm  md:py-3">
            PHP / javascript / node.js / websocket / socket.io / vue.js / Next /
            MySql / Laravel / GoLang / Django / Python
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-6 pt-6 md:py-3">
        
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">iOS Development  </a>
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">Android Development</a>
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">Web Development</a>
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">UI/UX Design</a>
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">Testing</a>
          <a className=" text-lg hover:font-semibold hover:underline underline-offset-8" href="#">IT Consulting</a>
      
      </div>
    </div>
  );
}

export default Details;
