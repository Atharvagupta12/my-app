import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

function Footer() {
  return (
    <div className="w-full h-full md:h-[40vh] bg-black mt-10 rounded-2xl flex flex-col gap-5 text-white md:items-center px-10 md:px-0 py-5 md:py-0 ">
      <h1 className="text-4xl font-bold py-5 md:py-10">Logo</h1>
      <div className="md:flex gap-32  md:py-10">
        <div className="flex flex-col py-5 md:py-0 gap-3 ">
          <div className="flex gap-1">
            <div>
              <FaMobileAlt />
            </div>
            <h1 className="text-sm text-gray-300"> Contact number</h1>
          </div>
          <p className="font-semibold "> +91 0000000000</p>
        </div>
        <div className="flex flex-col py-5 md:py-0 gap-3 ">
          <div className="flex gap-1">
            <div>
            <BiLogoGmail />
            </div>
            <h1 className="text-sm text-gray-300"> Gmail</h1>
          </div>
          <p className="font-semibold ">demo@gmail.com</p>
        </div>

        <div className="flex flex-col py-5 md:py-0 gap-3 ">
          <div className="flex gap-1">
            <div>
            <FaAddressBook />
            </div>
            <h1 className="text-sm text-gray-300"> Address</h1>
          </div>
          <p className="font-semibold ">Mumbai, India</p>
        </div>

        <div className="flex flex-col py-5 md:py-0 gap-3 ">
          <div className="flex gap-1">
          <div>
          <SlEnvolopeLetter />
            </div>
            <h1 className="text-sm text-gray-300"> Leave a request</h1>
          </div>
          <p className="font-semibold ">Leave a request</p>
        </div>
      </div>
      <h1>We work through the world</h1>
    </div>
  );
}

export default Footer;
