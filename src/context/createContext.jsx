import { createContext, useState } from "react";

const noteContext = createContext();

function NoteProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);
  const [singleNoteValueModal, setSingleNoteValueModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openNoteDataModal, setOpenNoteDataModal] = useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [noteData, setNoteData] = useState({});
  const [openUpdateNoteModal, setOpenUpdateNoteModal] = useState(false);
  const [getNoteQuery, setGetNoteQuery] = useState({
    category: null,
    isCompleted: null,
  });
  const [completedNoteCheckBox, setCompletedNoteCheckBox] = useState(false);

  const [formdata, setFormdata] = useState({
    pass: "",
    repass: "",
  });

  return (
    <noteContext.Provider
      value={{
        loading,
        setLoading,
        showPassword,
        setShowPassword,
        showRepassword,
        setShowRepassword,
        isSuccess,
        setIsSuccess,
        formdata,
        setFormdata,
        categories,
        setCategories,
        notes,
        setNotes,
        singleNoteValueModal,
        setSingleNoteValueModal,
        openModal,
        setOpenModal,
        updatePage,
        setUpdatePage,
        currentPage,
        setCurrentPage,
        openNoteDataModal,
        setOpenNoteDataModal,
        noteData,
        setNoteData,
        openUpdateNoteModal,
        setOpenUpdateNoteModal,
        getNoteQuery,
        setGetNoteQuery,
        completedNoteCheckBox,
        setCompletedNoteCheckBox,
      }}
    >
      {children}
    </noteContext.Provider>
  );
}
export { noteContext, NoteProvider };
