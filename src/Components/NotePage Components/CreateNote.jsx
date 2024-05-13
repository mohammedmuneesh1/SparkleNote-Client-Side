import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import Loading from "../Loading";
import { swalFn } from "../SwalModal";
import { Axios } from "../../Configs/Axios";
import { noteContext } from "../../context/createContext";

export default function CreateNote({ closeModal,btntitle,categories }) {

  const {loading,setLoading,updatePage,setUpdatePage} = useContext(noteContext);
  

  const createNoteFn = async(e)=>{
    e.preventDefault();
    try {
      const title = e.target.title.value.trim();
      const content = e.target.content.value.trim();
      const categoryId = e.target.category.value;
      if (!title || !content ) {
        return swalFn("warning","complete the field",1500);
    }
      setLoading(true);
      const response = await Axios.post('/api/note/notes',{title,content,categoryId});
      if(response.status ===201){
        setUpdatePage(!updatePage);
        setLoading(false)
        closeModal(false);
        return swalFn("success","new note created.",1000);
      }
    } catch (error) {

            setLoading(false)
         return swalFn("error","Error occured while verifying your link. try again.",1500)
    }
  }

  if(loading){
    return <Loading/>
  }

  return (
    <div className=" min-h-56 px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900">Create your Note</h3>
        <IoMdClose
          onClick={() => closeModal(false)}
          className="text-3xl hover:cursor-pointer"
        />
      </div>
<form name="createNote" onSubmit={createNoteFn}>
      {/*note title start here  */}
      <div className="my-2 flex flex-col">
        <label className="tracking-wide text-base text-gray-900 font-semibold font-mono  my-1 ml-1">
          Title
        </label>
        <input
          className="rounded-md  outline-none focus:ring-transparent focus:outline-none font-serif"
          type="text"
          name="title"
          placeholder="Note Title"
          required
        />
      </div>
      {/*note title start here  */}

      {/* note content start here */}
      <div className="my-2 flex flex-col">
        <label className="tracking-wide text-base text-gray-900 font-semibold font-mono  my-1 ml-1">
          Title
        </label>
        <textarea
          className="outline-none font-serif focus:outline-transparent "
          name="content"
          rows="10"
          cols="50"
        >
          Enter your note content....
        </textarea>
      </div>
      {/* note content start here */}

        {/* note category start here */}
        <div className="my-2 flex flex-col">
          <select name="category" required>
            <option value="" selected disabled>Option</option>
            {categories.map((value)=>(
              <React.Fragment key={value._id}>
            <option value={value._id}>{value.name}</option>
              </React.Fragment>
            ))}
          </select>
       
      </div>
      {/* note category start here */}



      {/*note submit button start here */}
      <div className="max-w-full  text-center my-4">
        <button type="submit" className="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white">
         {btntitle}
        </button>
      </div>
      {/*note submit button end here */}
    </form>
    </div>
  );
}
