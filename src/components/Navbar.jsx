import React from "react";

function Navbar() {
  return (
    <div
      className="fixed z-[999] w-full h-20 py-4 px-5 md:px-28 flex 
    justify-between items-center bg-white "
    >
      <div className="logo ">
        <h1 className="font-semibold text-lg">Logo</h1>
      </div>
      <div className="links flex gap-8">
        {["Services", "Media", "Cases", "FAQ", "Contact"].map((item, index) => (
          <a
          href="#"
            key={index}
            className={`text-md hidden md:block  cursor-pointer font-medium`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex ">
        <button className="text-green-700 md:block hidden px-8">+91 00000000</button>
        <button className="text-green-700  md:block hidden  ">Demo @gmail.com</button>
      </div>
      <div className="navbt">
        <button className="px-5 py-2 bg-lime-500 text-white font-semibold rounded-full md:hidden ">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
