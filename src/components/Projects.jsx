import React from "react";

function Projects() {
  return (
    <div className="w-full h-full bg-slate-100 px-28 py-20">
      <h1 className="text-3xl font-bold w-1/3">
        Developed more than <span className="text-green-600"> 100 </span>{" "}
        Projects in <span className="text-green-600"> 15 </span>Industries
      </h1>
      <div className="icons p-10 flex gap-8">
        <div className="variety w-1/3 flex flex-col gap-5">
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
        </div>
        <div className="variety w-1/3 flex flex-col gap-5">
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
        </div>
        <div className="variety w-1/3 flex flex-col gap-5">
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
          <a className="text-md font-medium" href="">
            Social Media
          </a>
        </div>
      </div>
      <div className="projects w-1/2">
        <h1 className="text-3xl font-bold ">Projects we are proud of </h1>
        <p className="text-sm font-semibold py-7">
          Our Software development company is truly proud of the wonderfull
          clients we have worked with. We enjoy a long-term partnership{" "}
        </p>
        <div className="flex gap-4">
<h1 className="font-semibold underline underline-offset-4">Project 1 </h1>
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
          <div className="py-10">
            <button className="text-lg  font-semibold">India </button>
            <button className="text-lg px-5 font-semibold">Real Estate </button>
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
        </div>
        <div className="image">
          <img className="w-[28vw] h-[52vh] rounded  bg-red-100" src="https://i.pinimg.com/564x/11/c5/0d/11c50d95ff5fc37552b08cb01e1ab33a.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
