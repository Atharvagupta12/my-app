import React from "react";
import Footer from "../components/Footer";
import { GoPlusCircle } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";

function FAQ() {
  return (
    <div className="w-full h-full bg-white px-28  py-10">
      <h1 className="text-4xl font-bold py-10">FAQ</h1>
      <div className="flex justify-between gap-10 ">
        <div className="w-1/2 h-full ">
          <div>
            <div className="border-[1px] my-10 "></div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">
                What is the cost of Mobile application?
              </h1>

              <div className="text-3xl text-green-700">
              <GoPlusCircle />
              </div>
            </div>
          </div>

          <div>
            <div className="border-[1px] my-10"></div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">
                Do you provide the guarentee for the mobile application?
              </h1>
              <div className="text-3xl text-green-700">
              <GoPlusCircle />
              </div>
            </div>
            <div className="border-[1px] my-10"></div>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <div>
            <div className="border-[1px] my-10"></div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">
              How long will development take?
              </h1>
              <div className="text-4xl text-green-700">
              <IoMdCloseCircleOutline />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deserunt ipsam id repudiandae accusantium voluptatibus asperiores
              est libero distinctio laborum? <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              totam, sint, rerum a cumque exercitationem nulla expedita qui,
              odit doloremque nobis nam distinctio maxime asperiores vel
              excepturi molestiae eligendi. Assumenda.
            </p>
          </div>
          <div>
            <div className="border-[1px] my-10"></div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">
                I will not tell my idea, Do you guarentee confidentaility?
              </h1>
              <div className="text-3xl text-green-700">
              <GoPlusCircle />
              </div>
            </div>
            <div className="border-[1px] my-10"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
