import React from "react";
import { appFeatures } from "../../Configs/ApplicationData";

export default function Features() {
  return (
    <div className="max-w-screen min-h-[40vh] bg-gray-800 pt-8 ">
      <h1 className=" font-sans text-3xl sm:text-5xl tracking-normal sm:tracking-wider font-semibold text-white text-center mb-8">
        Comprehensive underneath, <br /> Simple on the surface
      </h1>
      {/*grid start here */}
      <div className="max-w-screen  mx-8 p-4   grid justify-items-center  md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {appFeatures.map((value) => (
          <div key={value.id} className="max-w-sm  mb-2   py-2">
            <div className="heading flex justify-center   items-center gap-x-4">
              {value.logo}
              <h1 className=" text-base sm:text-xl font-bold tracking-wide text-white">
                {value.heading}
              </h1>
            </div>
            <p className="p-2 text-center  text-base sm:text-lg tracking-wide font-semibold text-gray-400">
              {value.description}
            </p>
          </div>
        ))}
      </div>
      {/*grid end here */}
      
    </div>
  );
}
