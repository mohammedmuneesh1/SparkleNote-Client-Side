import React, { useEffect, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";
import { Link, useNavigate } from "react-router-dom";
import { swalFn } from "../SwalModal";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
// import SwalModal from "../SwalModal";
// import SubmitModal from "./SubmitModal";
export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const isAuth = () => {
        const token = localStorage.getItem("token");
        if (token && token !== "undefined") {
            navigate("/note");
        }
    };
    isAuth();
}, []);



    const[loading,setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [formdata, setFormdata] = useState({
    pass: "",
    repass: "",
  });
  
  
//   const showAlert = (icon, text, timer = null) => {
//     return <SwalModal timer={timer} icon={icon} text={text} />;
//   };



//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const signUp =async (e) => {
//     e.preventDefault();
//     return <SwalModal timer={2000} icon={'warning'} text={'should agree with the terms and conditions.'} />;
//   }

const signUp =  (e) => {
    e.preventDefault();
    // return swalfn("error","thank god working");
      const name = e.target.username.value.trim();
            const email = e.target.email.value.trim();
            const password = e.target.password.value.trim();
            const repassword = e.target.repassword.value.trim();
            const terms_conditions = e.target.terms_condition.checked;
            
            if (!name || !email || !password || !repassword) {
                return swalFn("warning","complete the form",1500)
           
            }
            if( password !== repassword || password.length < 8 ||  !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[A-Z]/.test(password)  ){
                return swalFn("error","pasword should meet the conditions",1500);

            }
            if (!terms_conditions) {
                return swalFn("warning","should agree with the terms and conditions. Check out our terms and conditions.",1500)
            }
            const obj = { name, email, password };
            console.log(obj)

            return swalFn("success","form submitted successfully")
            

    // return showAlert("error","thankyou working",2000)
    // return <SwalModal timer={2000} icon={'warning'} text={'should agree with the terms and conditions.'} />;
  }
    


//     
//     setLoading(true)
//      let  response = await Axios.post('/user/register',obj)
//      console.log(response);
//        setLoading(false)
//        setFormdata({pass:'',repass:""})
//        window.scrollTo(0, 0);
//        if(response.status == 201){
//         return Swal.fire({
//          icon:"success",
//          text:response.data.message,
//         })
//        }

//     }
//     catch(err){
//       setLoading(false)
//       if(err.response){
//         window.scrollTo(0, 0);
//         return Swal.fire({
//           icon:"error",
//           text:err.response.data.message,
//         })
//       }
//       window.scrollTo(0, 0);
//       return Swal.fire({
//         icon:"error",
//         text:"an error occured while submitting the form. Please try again."
//       })
      

//     }

//   };

//   if(loading){
//     return <SubmitModal/>;
//   }


  return (
    <div className="font-[sans-serif] bg-white text-white md:min-h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 min-h-screen">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true" className="max-md:order-1 p-4">
          <img
            src="https://www.tailwindtap.com/assets/common/marketing.svg"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="signup-svg"
          />

          {/*https://www.tailwindtap.com/assets/common/marketing.svg  https://readymadeui.com/signin-image.webp*/}
        </div>
        <div  data-aos="fade-down" data-aos-duration="500" data-aos-once="true" className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form name="register_form" onSubmit={signUp}  className="max-w-lg w-full mx-auto">
        
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-400">
                Create an account
              </h3>
            </div>

            {/*username start here */}
            <div>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  autoComplete="off"
                  required
                  className="w-full bg-transparent text-sm  border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
             <IoMdPerson className="absolute right-2 h-[18px] w-[18px]" />
              </div>
            </div>
            {/*username end here */}


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

            {/*enter password start */}
            <div className="mt-10">
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={(e) =>
                    setFormdata({ ...formdata, pass: e.target.value })
                  }
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <FaEye onClick={() => setShowPassword(!showPassword)}  className="absolute right-2 h-[18px] w-[18px]" />
              </div>
            </div>
            {/*enter password start */}

            {formdata.pass.length > 0 ? (
              <ReactPasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={8}
                value={formdata.pass}
                valueAgain={formdata.repass} //for checking reenter password correct or not
              />
            ) : (
              ""
            )}

            {/*Re-enter password start */}
            <div className="mt-10">
              <div className="relative flex items-center">
                <input
                  name="repassword"
                  type={showRepassword ? "text" : "password"}
                  onChange={(e) =>
                    setFormdata({ ...formdata, repass: e.target.value })
                  }
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Re-Enter password"
                />
                <FaEye onClick={() => setShowPassword(!showPassword)}  className="absolute right-2 h-[18px] w-[18px]" />
              </div>
            </div>
            {/*Re-enter password end */}

            {/* terms&condition start here */}
            <div className="flex items-center mt-8">
              <input
                htmlFor="remember-me"
                name="terms_condition"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                I accept the{" "}
                <Link 
                to="/"
                  className="text-yellow-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </Link >
              </label>
            </div>
            {/* terms&condition start here */}

            <div className="mt-12">
              <button
                type="submit"
                className="w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-yellow-400 border border-yellow-400 focus:outline-none"
              >
                Register
              </button>
              <p className="text-sm mt-8">
                Already have an account?
                <Link
                  to="/login"
                  className="text-yellow-400 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
