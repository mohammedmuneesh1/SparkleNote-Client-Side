import React from "react";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { navbarData } from "../Configs/ApplicationData";
import { footerTermsData } from "../Configs/ApplicationData";
export default function Footer() {
  return (
    <>
      <footer className="relative bg-sky-50 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  type="button"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <FaTwitter className="mx-auto text-blue-400" />
                </button>
                <button
                  type="button"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <RiInstagramFill className="mx-auto text-red-600" />
                </button>
                <button
                  type="button"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <FaFacebookSquare className="mx-auto text-blue-800" />
                </button>
                <button
                  type="button"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <BsFillThreadsFill className="mx-auto text-black-400" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>

                  <div className="list-unstyled">
                    {navbarData.map((value) => (
                      <React.Fragment key={value.id}>
                        <Link
                          key={value.id}
                          to={value.to}
                          className="text-base text-gray-900 hover:text-gray-600 font-medium w-1/2 lg:w-auto"
                        >
                          {value.name}
                        </Link>
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <div>
                    {footerTermsData.map((value) => (
                      <React.Fragment key={value.id}>
                              <Link
                        id={value.id}
                        to={value.to}
                        className="text-gray-900 hover:text-gray-600 text-base font-semibold block pb-2 text-sm"
                      >
                        {value.name}
                      </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2021 SparkleNote by&nbsp;
                <a
                  href="https://github.com/mohammedmuneesh1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blueGray-500 hover:text-blue-800"
                >
                  Mohammed Muneesh E k
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
