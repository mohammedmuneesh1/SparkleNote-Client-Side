import React, { useEffect } from 'react'
import { MdOutlineEmail, MdOutlinePassword } from 'react-icons/md';
import { Link } from 'react-router-dom'

export default function Login() {
    useEffect(()=>{
        window.scrollTo(0,0)

    },[]);



  return (
    <div className="font-[sans-serif] bg-white text-white md:min-h-screen">
    <div className="grid md:grid-cols-2 items-center gap-8 h-screen">
      <div data-aos="fade-down" data-aos-duration="900" data-aos-once="true" className="max-md:order-1 p-4">
        <img
          src=" https://readymadeui.com/signin-image.webp"
          className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
          alt="signup-svg"
        />

        
      </div>

      <div  data-aos="fade-up" data-aos-duration="900" data-aos-once="true" className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
        <form name="register_form"   className="max-w-lg w-full mx-auto">
      
          <div className="mb-12">
            <h3 className=" font-mono tracking-wide text-3xl md:text-5xl font-bold text-sky-400 text-center mb-4">
              Login
            </h3>
            <p className='text-base text-slate-100 text-center tracking-wider'>Welcome Back you've been missed!</p>
          </div>



          {/*email start here*/}
          <div className="mt-10">
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                autoComplete="off"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                placeholder="Enter email"
              />
              <MdOutlineEmail className='absolute right-2 w-[18px] h-[18px]' />
          
            </div>
          </div>
          {/*email end here*/}

          {/* password start */}
          <div className="mt-10">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
              <MdOutlinePassword className='absolute right-2 w-[18px] h-[18px]' />
            </div>
          </div>
          {/* password start */}

          <div className="mt-12">
            <button
              type="submit"
              className="w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-indigo-400 border border-indigo-400 focus:outline-none"
            >
              Login
            </button>
            <p className="text-sm mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-sky-400 font-semibold hover:underline ml-1 tracking-wider"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
