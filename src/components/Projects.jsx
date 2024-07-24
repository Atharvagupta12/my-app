import React from "react";
import Image from "next/image";
import Image1 from "../app/assets/app1.png";
import Image2 from "../app/assets/app2.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

function Projects() {
  return (
    <div className="w-full h-full bg-slate-200 px-28 py-20">
      <h1 className="text-3xl font-bold w-1/3">
        Developed more than <span className="text-green-600"> 100 </span>{" "}
        Projects in <span className="text-green-600"> 15 </span>Industries
      </h1>
      <div className="icons p-10 flex gap-8">
        <div className="variety w-1/3 flex flex-col gap-5">
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
        </div>
         <div className="variety w-1/3 flex flex-col gap-5">
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
        </div>
        <div className="variety w-1/3 flex flex-col gap-5">
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoShareSocialSharp />
            </div>
            <a className="text-md font-medium" href="">
            Social Media
          </a>
          </div>
        </div>
      </div>
      <div className="projects w-1/2">
        <h1 className="text-3xl font-bold ">Projects we are proud of </h1>
        <p className="text-sm font-semibold py-7">
          Our Software development company is truly proud of the wonderfull
          clients we have worked with. We enjoy a long-term partnership{" "}
        </p>
        <div className="flex gap-4">
          <h1 className="font-semibold underline underline-offset-4">
            Project 1{" "}
          </h1>
          <h1>Project 2 </h1>
          <h1>Project 3 </h1>
          <h1>Project 4 </h1>
        </div>
      </div>

      <div className="w-full flex justify-between gap-10">
        <div className="project1 w-1/2 pt-10">
          <h1 className="text-3xl font-bold "> Project 1</h1>
          <p className="text-sm font-semibold py-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
            beatae esse vero, saepe harum qui fuga ex amet ipsa aut provident
            soluta atque dolor iste enim et optio at totam laudantium facere
            mollitia odit.
          </p>
          <p className="text-md ">
            Buisness Analysis / iOS / Android / QA / UI/UX Designer
          </p>
          <div className="flex gap-5 py-10">
            <div className="flex gap-1">
              <div>
                <FaLocationDot />
              </div>
              <button className="text-md  font-semibold"> India </button>
            </div>
            <div className="flex gap-2">
              <div>
                <FaLandmark />
              </div>
              <button className="text-md  font-semibold"> Real Estate </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">400%</h1>
              <h2>User Growth</h2>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">+ 200 000</h1>
              <h2>Active Growth</h2>
            </div>
          </div>
          <div className="images flex gap-8">
            <div className="w-28 h-10 mt-5">
              <img className=" w-full h-full bg-cover" src={Image1} alt="" />
            </div>
            <div className="w-28 h-10 mt-5">
              <img className="w-full h-full bg-cover" src={Image2} alt="" />
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className="w-[40vw] h-[52vh] rounded  bg-red-100"
            src="https://i.pinimg.com/564x/be/dc/65/bedc65964da8fda45a49d5af13e3c5ac.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
