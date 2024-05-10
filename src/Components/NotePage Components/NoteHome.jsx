import { Pagination } from "flowbite-react";
import { useState } from "react";
import { FaPen, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { SwalConfirmModalFn } from "../SwalConfirmModal";
import { Modal } from "flowbite-react";
import NoteData from "./NoteData";
export default function NoteHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const onPageChange = (page) => {
    alert(page);
    setCurrentPage(page);
  };

  const deleteFn =async (id)=>{
    const result =  await SwalConfirmModalFn("Do you want to delete the note ?", "", "Successfully deleted the note");
    alert(result)
    if(result){
        //then execute the axios function 
    }
  }



  return (
    <div className="max-w-screen  min-h-[90vh] mx-4 bg-transparent mb-12">
      {/*text and categories start here */}
      <div className="text-area">
        <h1 className="text-center  tracking-wide font-semibold text-2xl  mt-10 font-sans ">
          Your Notes
        </h1>
        <hr className="mx-6 "/>
        <div className="categories max-w-screen flex items-center justify-between mt-4 ">
          <div className=" max-w-lg hidden sm:flex gap-x-5 overflow-x-auto">
            <Link className="text-gray-800 font-semibold ">ALL</Link>
            <Link className="text-gray-800 font-semibold ">Personal</Link>
            <Link className="text-gray-800 font-semibold ">Home</Link>
            <Link className="text-gray-800 font-semibold ">Home</Link>
   
          </div>

          <div className="flex sm:hidden">
            <select className="">
              <option selected>Categories</option>
              <option>Personal</option>
              <option>Home</option>
              <option>Business</option>
            </select>
          </div>

          <div className="completed">
            <input
              type="checkbox"
              className="w-[15px] h-[15px] bg-transparent outline-none rounded-sm hover:cursor-pointer "
            />
            &nbsp;<span>Show only completed notes</span>
          </div>
        </div>
      </div>
      {/*text and categories end here */}

      {/* note card grid start here */}
      <div className="max-w-screen min-h-[50vh]  sm:pt-8 grid sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      
      
        {/*note card  start here*/}

        <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

         {/*note card  start here*/}

         <div class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  ">
          <div className=" card-header flex  items-center justify-between ">
            <h3>Business</h3>
            <div className="card-icon flex gap-x-2">
              <input type="checkbox" className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent" />
              <FaPen className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
              <MdDelete onClick={deleteFn} className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
              13 things to work on
            </h4>
            <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono ">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex items-center justify-between  px-3 sm:px-4">
            <span> March 28, 2020</span>
            <FaRegEye className="text-xl  hover:cursor-pointer text-gray-700" onClick={()=>setOpenModal(true)}/>
          </div>
        </div>
        {/*note card  end here*/}

     
      
       
       
       
      </div>
      {/* note card grid end here */}

      {/* view note data start here */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <NoteData closeModal={setOpenModal} />

      </Modal>
      
      {/* view note data end here */}

      {/*pagination start here */}
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
      {/*pagination end here */}
    </div>
  );
}
