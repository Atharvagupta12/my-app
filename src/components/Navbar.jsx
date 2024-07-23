import React from "react";

function Navbar() {
  return (
    <div
      className="fixed z-[999] w-full h-20 py-4 px-28 flex 
    justify-between items-center bg-white"
    >
      <div className="logo ">
        <h1 className="font-semibold text-lg">Logo</h1>
      </div>
      <div className="links flex gap-6">
        {["Services", "Media", "Cases", "FAQ", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-md  cursor-pointer font-medium`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="">
        <button className="text-green-700  px-8">+91 00000000</button>
        <button className="text-green-700 ">Demo @gmail.com</button>
      </div>
    </div>
  );
}

export default Navbar;
