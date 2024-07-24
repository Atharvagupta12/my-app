import React from 'react'

function Discuss() {
  return (
    <div className='w-full h-[50vh] bg-gradient-to-r from-yellow-500 from-40% to-lime-500 flex px-28 justify-between gap-10 text-white '>
      <div className="text mt-10 w-2/5">
         <h1 className='text-4xl py-10 font-bold w-1/2'>Let's Discuss Your Project</h1>
         <p className='text-sm font-semibold capitalize'>lets figure out how to create an effective application,
            its cost and term of its development
         </p>
      </div>
      <div className="card py-5 w-[40vw] h-[35vh] px-10 mt-16 bg-white rounded-2xl shadow-2xl text-black">
         
          <div className="flex gap-7 items-start justify-around ">
            <div className="details  h-full w-1/2 py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-sm text-slate-600">Full name</h1>
                <h1 className="text-sm py-2 ">My name</h1>
                <div className="border-t-[2px] "></div>
              </div>
              <div>
                <h1 className="text-sm text-slate-600">Buisness name </h1>
                <h1 className="text-sm py-2 ">Abc Technology PVT LTD</h1>
                <div className="border-t-[2px] "></div>
              </div>
            </div>
            <div className="details h-full w-1/2 py-5 flex flex-col gap-4">
              <div>
                <h1 className="text-sm text-slate-600">Phone no</h1>
                <h1 className="text-sm py-2">+91 00000000</h1>
                <div className="border-t-[2px] "></div>
              </div>
              <div>
                <h1 className="text-sm text-slate-600">Business mail</h1>
                <h1 className="text-sm py-2">demo@gmail.com</h1>
                <div className="border-t-[2px] "></div>
              </div>
            </div>
          </div>
          <div className="details h-full w-1/3 ">
            <button className="px-5 py-1 text-white font-semibold bg-lime-600 rounded-xl">Get Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default Discuss
