import React from "react";
import { IoMdClose } from "react-icons/io";


export default function CreateNote({ closeModal,btntitle }) {
  return (
    <div className=" min-h-56 px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900">Create your Note</h3>
        <IoMdClose
          onClick={() => closeModal(false)}
          className="text-3xl hover:cursor-pointer"
        />
      </div>

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
          Enter your comments here...
        </textarea>
      </div>
      {/* note content start here */}

      {/*note submit button start here */}
      <div className="max-w-full  text-center my-4">
        <button className="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white">
         {btntitle}
        </button>
      </div>
      {/*note submit button end here */}
    </div>
  );
}
