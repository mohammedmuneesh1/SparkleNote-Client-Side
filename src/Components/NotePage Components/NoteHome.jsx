import React, { useContext, } from "react";
import { FaPen, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { SwalConfirmModalFn } from "../SwalConfirmModal";
import { Modal } from "flowbite-react";
import NoteData from "./NoteData";
import Loading from "../Loading";
import { Axios } from "../../Configs/Axios";
import { swalFn } from "../SwalModal";
import { noteContext } from "../../context/createContext";
import EditNote from "./EditNote";
export default function NoteHome() {
  const {
    categories,
    notes,
    updatePage,
    setUpdatePage,
    openNoteDataModal,
    setOpenNoteDataModal,
    loading,
    setLoading,
    setNoteData,
    openUpdateNoteModal,
    setOpenUpdateNoteModal,
    completedNoteCheckBox,
    setCompletedNoteCheckBox,
    setGetNoteQuery
  } = useContext(noteContext);

 

  const deleteFn = async (noteId) => {
    try {
      const result = await SwalConfirmModalFn(
        "Do you want to delete the note ?",
        "",
        "Successfully deleted the note"
      );
      if (result) {
        const response = await Axios.delete(`/api/note/notes/${noteId}`);
        if (response.status === 200) {
          return setUpdatePage(!updatePage);
        }
      }
    } catch (error) {
      return swalFn(
        "error",
        "error occured while deleting note. Try after sometime. Thank you."
      );
    }
  };

  const markCompletedFn = async (e,noteId)=>{
    const checkBoxStatus =e.target.checked;
    if(checkBoxStatus){
      try {
      setLoading(true)
      const response = await Axios.put(`/api/note/completed/${noteId}`,{})

      if(response.status === 200){
        setLoading(false)
        setUpdatePage(!updatePage)
        return swalFn("success",response.data.message,1500)

      }
      
    } catch (error) {
  
      setLoading(false)
     return swalFn("error","error occured",2000)
      
    }
}  
else{
  try {
    setLoading(true)
    const response = await Axios.put(`/api/note/uncompleted/${noteId}`,{})
    if(response.status === 200){
      setLoading(false)
      setUpdatePage(!updatePage)
      return swalFn("success",response.data.message,1500)
    }
    
  } catch (error) {

    setLoading(false)
   return swalFn("error","error occured",2000)
    
  }
}  
  }

  const showCompletedNotes =()=>{
    const updatedCheckBoxValue = !completedNoteCheckBox;
    setCompletedNoteCheckBox(updatedCheckBoxValue);
    if(updatedCheckBoxValue){
      setGetNoteQuery(prevState=>({
        ...prevState,
        isCompleted:true
      }))
      return setUpdatePage(!updatePage)
    }
    else{
      setGetNoteQuery(prevState=>({
        ...prevState,
        isCompleted:null
      }))
      return setUpdatePage(!updatePage)

    }

  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen  min-h-[90vh] mx-4 bg-transparent mb-12">
      {/*text and categories start here */}
      <div className="text-area">
        <h1 className="text-center  tracking-wide font-semibold text-2xl  mt-10 font-sans ">
          Your Notes
        </h1>
        <hr className="mx-6 " />
        <div className="categories max-w-screen flex items-center justify-between mt-4 ">
          <div className=" max-w-lg hidden sm:flex gap-x-5 overflow-x-auto">
            <span className="text-gray-800 font-semibold ">ALL</span>
            {categories.map((value) => (
              <React.Fragment key={value._id}>
                <span className="text-gray-800 font-semibold ">
                  {value.name}
                </span>
              </React.Fragment>
            ))}
          </div>

          <div className="flex sm:hidden">
            <select className="">
              <option selected disabled>
                Categories
              </option>
              {categories.map((value) => (
                <React.Fragment key={value._id}>
                  <option value={value._id}>{value.name}</option>
                </React.Fragment>
              ))}
            </select>
          </div>

          <div className="completed">
            <input
              type="checkbox"
              className="w-[15px] h-[15px] bg-transparent outline-none rounded-sm hover:cursor-pointer "
              checked={completedNoteCheckBox}
              onChange={()=>showCompletedNotes()}
            />
            &nbsp;<span>Show only completed notes</span>
          </div>
        </div>
      </div>
      {/*text and categories end here */}

      {/* note card grid start here */}
      <div className="max-w-screen min-h-[50vh] pt-8 grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
        {/*note card  start here*/}

        {notes.length > 0 &&
          notes.map((value) => (
            // <div
            //   key={value._id}
            //   class="max-w-sm md:max-w-xs xl:max-w-xsm h-56 flex flex-col justify-between  bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4  "
            // >
            <div
              key={value._id}
              class="max-w-md w-full h-56 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4"
            >
              <div className=" card-header flex  items-center justify-between ">
                <h3>{value.categoryId.name}</h3>
                <div className="card-icon flex gap-x-2">
                  <input
                    type="checkbox"
                    checked={value.isCompleted} 
                    className="rounded-sm bg-transparent  hover:cursor-pointer  border-gray-700 outline:none focus:ring-transparent"
                    onChange={(event)=>markCompletedFn(event,value._id)}
                  />
                  <FaPen onClick={()=>{setOpenUpdateNoteModal(true); setNoteData(value)}} className=" text-gray-700 text-sm sm:text-base hover:cursor-pointer" />
                  <MdDelete
                    onClick={() => deleteFn(value._id)}
                    className=" text-gray-700 text-sm sm:text-lg  hover:cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <h4 class=" text-xl text-left  sm:tracking-wide sm:text-2xl  text-gray-800  font-bold my-1">
                  {value.title}
                </h4>
                <p class="my-2 text-gray-800 text-base tracking-wide text-justify font-mono overflow-scroll">
                  {value.content.substring(0,60)}...
                </p>
              </div>
              <div className="flex items-center justify-between  px-3 sm:px-4">
                <span>{value.updatedAt}</span>
                <FaRegEye
                  className="text-xl  hover:cursor-pointer text-gray-700"
                  onClick={() => {
                    setOpenNoteDataModal(true);
                    setNoteData(value);
                  }}
                />
              </div>
            </div>
          ))}
      </div>
      {/* note card grid end here */}

      {/* view note data start here */}

      <Modal
        show={openNoteDataModal}
        size="md"
        popup
        className="bg-black bg-opacity-5 "
      >
        <NoteData closeModal={setOpenNoteDataModal} />
      </Modal>
      {/* view note data end here */}
{/*Edit Note data Start here */}
<Modal
        show={openUpdateNoteModal}
        size="md"
        popup
        className="bg-black bg-opacity-5 "
      >
        <EditNote/>
        </Modal>

{/*Edit Note data End here */}

    </div>
  );
}
