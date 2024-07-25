import React from "react";
import Image from "next/image";

function Team() {
  return (
    <div className="w-full md:h-[60vh] md:flex justify-between gap-10 md:px-28 px-5 py-10 bg-slate-200 items-center">
      <div className="text md:w-1/2 py-10">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="font-medium text-md py-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          dolorem ab itaque, optio earum eum?
        </p>
        <div className="md:flex md:gap-10 ">
          <div className="flex flex-col py-3 md:py-0 gap-1 md:gap-3">
            <h1 className="md:text-4xl text-3xl font-bold">28</h1>
            <p>Team members</p>
          </div>
          <div className="flex flex-col py-3 md:py-0 gap-1 md:gap-3">
            <h1 className="md:text-4xl text-3xl font-bold">+ 100</h1>
            <p>Projects</p>
          </div>
          <div className="flex flex-col py-3 md:py-0 gap-1 md:gap-3">
            <h1 className="md:text-4xl text-3xl font-bold">7 years</h1>
            <p>in IT Sphere</p>
          </div>
        </div>
        <p className="font-medium text-md py-3 md:py-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi ad,
          fugiat laudantium temporibus ipsa enim ab quos officiis unde?
        </p>
      </div>
      <div className="image md:w-1/2 h-[45vh] shadow-2xl rounded-2xl overflow-hidden">
<img className="w-full h-full bg-cover " src="https://i.pinimg.com/736x/45/d7/9f/45d79fb0fb559d6fad3d4b9aa2470756.jpg" alt="" />
      </div>
    </div>
  );
}

export default Team;
