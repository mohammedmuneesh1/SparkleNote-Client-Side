import React from "react";
import { testimonialsData } from "../../Configs/ApplicationData";
export default function Testimonials() {
  return (
    <div className="pt-4 sm:pt-8 max-w-screen min-h-96 bg-white">
      <div className="text-section max-w-7xl mx-auto flex flex-col items-center ">
        <h3
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-once="true"
          className="text-indigo-600 uppercase sm:font-bold tracking-widest text-base sm:text-lg"
        >
          Testimonials
        </h3>
        <h1
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="200"
          className=" mt-1 sm:mt-2 font-bold  text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wider text-center"
        >
          Here's What Our Users Are Saying
        </h1>
        <p
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="300"
          className=" max-w-3xl text-gray-500 py-4 text-base md:text-xl text-justify sm:text-center tracking-normal sm:tracking-wider"
        >
          Testimonials is a great way to increase brand trust and awareness. Use
          this section to highlight your popular customers.
        </p>
      </div>
      <div className="max-w-screen p-6">
        <div      data-aos="fade-in"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="400" 
              className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          { testimonialsData.map((value) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="30"
              data-aos-once="true"
              key={value.id}
              className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-800  md:px-14 rounded-2xl md:py-14 "
            >
              <p className="text-base md:text-xl leading-normal text-gray-300 text-justify">
                {value.review}
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img alt="Avatar" src={value.userImage} loading="lazy" />
                </div>
                <div>
                  <div className="text-lg font-medium text-gray-200">
                    {value.name}
                  </div>
                  <div className="text-gray-400">{value.designation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
