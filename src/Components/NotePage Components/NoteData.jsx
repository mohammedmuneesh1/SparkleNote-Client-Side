import React from 'react'
import { IoMdClose } from 'react-icons/io'

export default function NoteData({closeModal}) {
  return (
    <div className=" min-h-80 px-4 py-4">
           <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Note</h3>
        <IoMdClose
          onClick={() => closeModal(false)}
          className="text-3xl hover:cursor-pointer"
        />
      </div>

      {/*note body start here */}
      <div>
        <h1 className=' tracking-wide sm:tracking-wider font-serif text-xl font-semibold text-center my-4 sm:my-6'>This is the title</h1>
        <p className='text-base tracking-wide font-serif text-justify text-gray-800'>This is the content of the note.this notepad is useful for your personal purpose.thank you for using this note. we love you. see you in future </p>

      </div>
      {/*note body end here */}



    </div>
  )
}
