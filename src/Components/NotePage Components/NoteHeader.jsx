import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { SwalConfirmModalFn } from "../SwalConfirmModal";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import CreateNote from "./CreateNote";




export default function NoteHeader() {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate()
    
    const logoutFn= async ()=>{
       const result =  await SwalConfirmModalFn("Do you want to log out?", "", "Successfully logged out","Logout");
       if(result){ //if swalconfirmmodal function return true then execute the if condition 
        navigate("/");
    
       }



      }
  return (
    <div className="flex items-center bg-slate-100 max-w-screen py-2  px-0 lg:px-4 shadow-md">
      <div className="left-side flex items-center justify-start sm:justify-center max-w-[95%] sm:max-w-[80%] grow ">
        <div className="form max-w-[480px] w-full px-1  sm:px-4 lg:ml-48">
          <div className="relative ">
            <input
              type="text"
              name="search"
              className="w-full border h-11 sm:h-12 shadow p-4 rounded-full outline:none outline-none focus:ring-transparent "
              placeholder="search"
              autoComplete="off"
            />
              <ImSearch className="absolute top-3.5 sm:top-4 right-3 text-teal-400 ml-8" />
          </div>
        </div>
        <button onClick={()=> setOpenModal(true)}  className="flex items-center px-5 text-sm  sm:text-base sm:px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer">
      <FaPlus />
        Add
      </button>
      </div>
      <div className="right-side  max-w-[5%] sm:max-w-[20%] grow flex sm:justify-end mx-2 sm:mx-4">
      <FiLogOut onClick={logoutFn} className="text-4xl   text-blue-400" />
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
    <CreateNote  closeModal={setOpenModal} btntitle={"Create Note"}/>
</Modal>


    </div>
  );
}
