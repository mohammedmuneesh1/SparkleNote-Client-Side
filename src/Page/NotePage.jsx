import React, { useContext, useEffect } from 'react'
import NoteHeader from '../Components/NotePage Components/NoteHeader'
import NoteHome from '../Components/NotePage Components/NoteHome'
import { Axios } from '../Configs/Axios';
import { swalFn } from '../Components/SwalModal';
import { noteContext } from '../context/createContext';
import { Pagination } from 'flowbite-react';

export default function NotePage() {

  const {setCategories,setNotes,updatePage,currentPage,setCurrentPage,getNoteQuery} = useContext(noteContext)
  
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  

  const getAllCategory = async()=>{
    try {
      const response = await Axios.get('/api/note/categories');
      if(response.status ===200){

      return setCategories(response.data.data);
      }
    } catch (error) {
      return swalFn("error","Error while fetching categories",1500)
      
    }
  }

  const getAllNotes = async()=>{
    try {

      let apiUrl = `/api/note/notes?page=${currentPage}`;

      if(getNoteQuery.category !== null ){
        apiUrl +=`&category=${getNoteQuery.category}` 
      }
      if(getNoteQuery.isCompleted !==null){
        apiUrl+=`&completed=${getNoteQuery.isCompleted}`
      }
      const response = await Axios.get(apiUrl);
      if(response.status ===200){
      setNotes(response.data.data);
      }
    } catch (error) {

       swalFn("error","Error while fetching notes",1500)
    }
  }









useEffect(()=>{
  getAllCategory()
  getAllNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[updatePage,currentPage])




  return (
    <div className='max-w-screen min-h-screen bg-white-cream'>
        <NoteHeader/>
        <NoteHome />
          <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}
