import React, { useContext, useEffect } from 'react'
import verifyImage from "../../Assets/verifyImage.png"
import { useNavigate, useParams } from 'react-router-dom'
import { Axios } from '../../Configs/Axios';
import { swalFn } from '../SwalModal';
import { Link } from 'react-router-dom';
import { noteContext } from '../../context/createContext';

export default function VerifyUser() {
  const {loading,setLoading,isSuccess,setIsSuccess} = useContext(noteContext)

    const navigate = useNavigate();
    let {userId,token}= useParams();

    const verifyEmail = async()=>{
        try {
            if(localStorage.getItem("token")){
                return navigate("/login")
            }

            let  response = await Axios.put(`/api/user/${userId}/verify/${token}`,{});


            if(response.status === 200){
                setLoading(false)
                setIsSuccess(true);
                swalFn("success","Email has been verified. Login again",2000)
               setTimeout(()=>{
                return navigate("/login")
               },5000);
             }
            
        } catch (error) {
            setLoading(false)
            if(error.response.status === 410){
              swalFn("error",error.response.data.errorMessage,2000);
              return navigate("/login");
            }
             swalFn("error","Error occured while verifying your link. try again.",1500)
             return navigate("/");

            
        }
  
    }
    useEffect(()=>{
        verifyEmail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigate]);

  return (
    <div className='max-w-screen min-h-screen bg-slate-100 flex flex-col items-center justify-center'>
           
           {loading &&  
           <>
            <h1 className="max-w-xl text-center">Hosted In Render Hosting Platform. It may take 30-50 second to Loading/submit data. Please Hold on</h1>
       <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> 
           </>
            }

            {isSuccess &&<>
            <img src={verifyImage} alt="verify-logo" />
            <Link to="/login" className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
    >
    Login  </Link>
            </>}
           
           
    </div>
  )
}
