import React, { useContext, useEffect } from 'react'
import { MdOutlineEmail, MdOutlinePassword } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { swalFn } from '../SwalModal';
import Loading from '../Loading';
import { Axios } from '../../Configs/Axios';
import { noteContext } from '../../context/createContext';

export default function Login() {
  const navigate = useNavigate();
  const {loading,setLoading} = useContext(noteContext)
 
    useEffect(() => {
      window.scrollTo(0, 0);
      const isAuth = () => {
          const token = localStorage.getItem("token");
          if (token && token !== "undefined") {
              navigate("/note");
          }
      };
      isAuth();
  }, [navigate]);


  const loginFn = async(e)=>{
    e.preventDefault();
    try {

      const email = e.target.email.value.trim();
      const password = e.target.password.value.trim();
      if (!email || !password ) {
        return swalFn("warning","complete the form",1500)
    }
    setLoading(true)
    let  response = await Axios.post('/api/user/login',{email,password});
    if(response.status === 201){
      setLoading(false)
     return swalFn("success"," We've sent a verification email to your inbox. Please take a moment to confirm your email address.",3000)
   }
   if(response.status === 200){
    const token = await response?.data?.token;
    localStorage.setItem("token",token);
    setLoading(false)
    swalFn("success","Welcome Back",1500)
    return navigate("/note");
 }
    } catch (error) {
      console.log(error)
      setLoading(false)
      if(error.response.status === 404){
        swalFn("error",error.response.data.errorMessage,2000);
        return navigate("/login");
      }
      return swalFn("error","Error occured while login. Please try again after some time")
    }
  }


  if(loading){
    return <Loading/>;
  }



  return (
    <div className="font-[sans-serif] bg-white text-white min-h-screen">
    <div className="grid md:grid-cols-2 items-center gap-8 h-screen">
      <div data-aos="fade-down" data-aos-duration="900" data-aos-once="true" className="max-md:order-1 p-4 md:min-h-screen">
        <img
          src=" https://readymadeui.com/signin-image.webp"
          className="lg:max-w-[90%] max-w-full  h-full object-contain block mx-auto"
          alt="signup-svg"
        />

        
      </div>

      <div  data-aos="fade-up" data-aos-duration="900" data-aos-once="true" className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
        <form name="login_form" onSubmit={loginFn}   className="max-w-lg w-full mx-auto">
      
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
