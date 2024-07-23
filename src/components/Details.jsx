import React from "react";

function Details() {
  return (
    <div className="w-full h-[50vh] bg-white px-28 py-10 flex justify-between gap-20  ">
      <div className="w-1/2 ">
        <h1 className="text-3xl font-bold ">Full Development Cycle </h1>
        <p className="text-sm font-medium py-5">We use proven technologies </p>
        <div className="w-3/4">
          <h1 className="font-bold py-3 ">Web</h1>
          <p className="capitalize text-sm ">
            PHP / javascript / node.js / websocket / socket.io / vue.js / Next /
            MySql / Laravel / GoLang / Django / Python
          </p>
        </div>
        <div className="w-3/4">
          <h1 className="font-bold pt-8 ">Mobile</h1>
          <p className="capitalize text-sm  py-3">
            PHP / javascript / node.js / websocket / socket.io / vue.js / Next /
            MySql / Laravel / GoLang / Django / Python
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-6 py-3">
        
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
