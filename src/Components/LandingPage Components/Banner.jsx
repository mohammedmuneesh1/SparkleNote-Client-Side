import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="flex flex-col max-w-screen bg-slate-100 min-h-[80vh] sm:h-[91vh] mt-20 sm:mt-0 sm:justify-center items-center">
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        className=" max-w-screen sm:max-w-3xl text-4xl md:text-6xl font-mono  text-center tracking-normal sm:tracking-wider mb-8"
      >
        Tame your work, <br /> organize your life{" "}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        data-aos-once="true"
        className="text-sm sm:text-xl leading-8 text-gray-900 mt-6  tracking-wider font-semibold max-w-3xl  text-justify   px-4 sm:text-center mb-8"
      >
        Remember everything and tackle any project with your notes, tasks, and
        schedule all in one place. With our integrated platform, you can
        seamlessly manage your entire workflow from start to finish.
      </p>
      <Link
      to="/signup"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-once="true"
        className="rounded-md bg-green-500  text-center font-sans text-base sm:text-lg tracking-wide sm:tracking-wider font-semibold  py-4 px-8 sm:px-12 hover:bg-green-600 hover:text-white hover:shadow-md transition ease-in-out duration-600 mb-8"
      >
        Start for free
      </Link>
      <h3
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="400"
        data-aos-once="true"
        className="tracking-wider text-base font-semibold"
      >
        Already have an account?
        <Link to="/login" className="ml-1 underline">Log in now</Link>
      </h3>
    </div>
  );
}
