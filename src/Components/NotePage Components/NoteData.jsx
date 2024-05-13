import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { noteContext } from '../../context/createContext'

export default function   NoteData() {

  const {noteData,setOpenNoteDataModal} = useContext(noteContext)

  return (
    <div className=" min-h-80 px-4 py-4  bg-transparent focus :outline-none focus:ring-tranparent border-none">
           <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Note</h3>
        <IoMdClose
          onClick={() =>{ setOpenNoteDataModal(false)}}
          className="text-3xl hover:cursor-pointer"
        />
      </div>

      {/*note body start here */}
      <div>
        <h1 className=' tracking-wide sm:tracking-wider font-serif text-xl font-semibold text-center my-4 sm:my-6'>{noteData.title}</h1>
        <p className='text-base tracking-wide font-serif text-justify text-gray-800'>{noteData.content } </p>

      </div>
      {/*note body end here */}



    </div>
  )
}
