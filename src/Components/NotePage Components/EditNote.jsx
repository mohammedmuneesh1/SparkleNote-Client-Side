import React, { useContext } from 'react'
import { noteContext } from '../../context/createContext';
import { IoMdClose } from 'react-icons/io';
import { swalFn } from '../SwalModal';
import { Axios } from '../../Configs/Axios';

export default function EditNote() {
    const {setLoading,updatePage,setUpdatePage,setOpenUpdateNoteModal,categories,noteData} = useContext(noteContext);

 
    const editNoteFn = async(e)=>{
    e.preventDefault();
    try {
      const title = e.target.title.value.trim();
      const content = e.target.content.value.trim();
      const categoryId = e.target.category.value;
      if (!title || !content ) {
        return swalFn("warning","complete the field",1500);
    }
      setLoading(true);
      const response = await Axios.put(`/api/note/edit/${noteData._id}`,{title,content,categoryId});
      if(response.status ===200){
        setUpdatePage(!updatePage);
        setLoading(false)
        setOpenUpdateNoteModal(false)
        return swalFn("success","note edited successflly.",1000);
      }
    } catch (error) {
        setLoading(false)
        setOpenUpdateNoteModal(false)
         return swalFn("error","Error occured while verifying your link. try again.",1500)
    }
    
 }

    return (
    <div className=" min-h-56 px-4 py-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-gray-900">Edit  your Note</h3>
      <IoMdClose
        onClick={() => setOpenUpdateNoteModal(false)}
        className="text-3xl hover:cursor-pointer"
      />
    </div>
<form name="createNote" onSubmit={editNoteFn}>
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
        defaultValue={noteData.title}
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
        defaultValue={noteData.content} 
      >
      </textarea>
    </div>
    {/* note content start here */}

      {/* note category start here */}
      <div className="my-2 flex flex-col">
        <select name="category" required>
          {categories.map((value)=>(
            <React.Fragment key={value._id}>
          <option value={value._id} selected={value._id === noteData.categoryId._id}>{value.name}</option>
            </React.Fragment>   
          ))}
        </select>
     
    </div>
    {/* note category start here */}



    {/*note submit button start here */}
    <div className="max-w-full  text-center my-4">
      <button type="submit" className="bg-green-500 hover:bg-blue-700 active:bg-green-800 px-4 py-2 rounded-md text-white">
        Update Note
      </button>
    </div>
    {/*note submit button end here */}
  </form>
  </div>
  )
}
