import { BiSolidCategory } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHandsHelping } from "react-icons/fa";
import { GiFlatPlatform } from "react-icons/gi";
import { TbClockStar, TbFreeRights } from "react-icons/tb";


//================================================APP NAVBAR DATA START HERE==============================================================================
export const navbarData = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Help", to: "/" },
  { id: 3, name: "Support Form", to: "/" },
  { id: 4, name: "Blogs", to: "/" },
  { id: 5, name: "About Us", to: "/" },
  { id: 6, name: "Contact Us", to: "/" },
];
//================================================APP NAVBAR DATA END HERE==============================================================================


//=====================================APP FOOTER TERMS DATA START HERE=============================================================
export const footerTermsData = [
  { id: 1, name: "MIT License", to: "/" },
  { id: 2, name: "Terms & Conditions", to: "/" },
  { id: 3, name: " Privacy Policy", to: "/" },
];
//=====================================APP FOOTER TERMS DATA END HERE=============================================================



//===================================APP FEATURES DATA START HERE=============================================================================================
export const appFeatures = [
  {
    id: 1,
    logo: <FaCloudDownloadAlt className="text-blue-600 text-2xl" />,
    heading: "Use it everywhere",
    description:
      "Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.",
  },
  {
    id:2,
    logo:<BiSolidCategory  className="text-blue-600 text-2xl" />,
    heading:"Customizable Categories",
    description:"Organize your notes with ease by creating custom categories tailored to your needs."
  },
  {
    id:3,
    logo: <FaHandsHelping className="text-blue-600 text-2xl" />, 
    heading:"Feedback and Support",
    description:" Provide feedback or get assistance with our dedicated support team always ready to help."
  },
  {
    id:4,
    logo:<TbClockStar  className="text-blue-600 text-2xl" />,
    heading:"Go back in time",
    description:"Your notes are automatically backed up with every change, ensuring you can easily revisit past ideas from weeks or months ago."
  },
  {
    id:5,
    logo:<GiFlatPlatform className="text-blue-600 text-2xl" /> ,
    heading:"Cross-Platform Sync",
    description:"Access your notes from anywhere with ease, thanks to seamless synchronization that ensures your notes are always up-to-date across all your devices."
  },
  {
    id:6,
    logo:<TbFreeRights   className="text-blue-600 text-2xl" />,
    heading:"It’s free",
    description:"secure note-taking app! Organize effortlessly with our user-friendly interface and robust security. Start jotting down ideas worry-free today!",
  },
];
//===================================APP FEATURES DATA END HERE=============================================================================================



//===================================APP FAQ DATA START HERE=============================================================================================


export const faqData = [
    {
      id: 1,
      question: "How do I create a new note?",
      answer: "You can create a new note by clicking on the 'New Note' button or by selecting the option to create a new note from the menu. Before creating notes, you have to login to make sure your data has been saved and secure."
    },
    {
      id: 2,
      question: "Is my data secure?",
      answer: "Yes, ensuring the security and privacy of your data is our top priority. We employ industry-standard security measures to safeguard your notes and protect them from unauthorized access."
    },
    {
      id: 3,
      question: "Can I organize my notes into categories?",
      answer: "Yes, you can organize your notes into customizable categories to keep them neatly sorted and easily accessible."
    },
    {
      id: 4,
      question: "Is there a limit to the number of notes I can create?",
      answer: "No, there is no limit to the number of notes you can create. Feel free to create as many notes as you need to organize your thoughts and ideas."
    },
    {
      id: 5,
      question: "Can I access my notes on multiple devices?",
      answer: "Yes, our app currently supports synchronization across multiple devices, enabling access to your notes from anywhere. We're currently available as a web application, with plans to expand to other platforms in the future."
    },
    {
      id: 6,
      question: "How do I share my notes with others?",
      answer: "Currently, we're working on implementing a sharing feature to allow you to share notes with others. Stay tuned for updates as we continue to develop this feature in the near future!"
    },

    {
      id: 7,
      question: "Is there a way to recover deleted notes?",
      answer: "Yes, you can recover deleted notes from the trash folder within a specified period. Deleted notes are permanently removed after this period."
    },
    {
        id:8,
        question:" Is it possible to retrieve notes after deletion?",
        answer:"Yes, it will be possible to retrieve deleted notes in the near future. We're currently working on implementing this feature to ensure your data remains safe and easily recoverable. So, don't worry if a note gets deleted – your data is secure, and we'll soon have a solution for retrieval.",
    },
    {
        id:9,
        question:"Is it possible to edit the note after it creation ?",
        answer:"Yes, it is possible to edit notes after creation. Once you've created a note, you can easily edit its content, format, and other details at any time to keep your information up-to-date and organized."
    },
    {
      id: 10,
      question: "What if I encounter technical issues or have feedback?",
      answer: "If you encounter any technical issues or have feedback, please reach out to our support team. We're here to help and welcome your feedback to improve our app."
    },
  ];



//===================================APP FEATURES DATA END HERE=============================================================================================



//==================================APP USERS TESTIMONIALS DATA START HERE===================================================================================
export const testimonialsData = [{
  id:"review01",
  name:'Sarah Lee',
  userImage:"https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100",
  review:"I've tried countless note-taking apps, but none compare to this gem. Its intuitive interface and seamless synchronization make it a pleasure to use. Now, I can easily switch between devices without missing a beat",
  designation:"Digital Marketing at Wipro",
},{
  id:"review02",
  name:'James Jacob',
  userImage:"https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80",
  review:"As a busy professional, staying organized is crucial. Thanks to this note-taking app, I can stay on top of my tasks with ease. The synchronization feature ensures I never miss a beat, allowing me to focus on what truly matters",
  designation:"Data Analyst at Samsung",
},{
  id:"review03",
  name:'Alex Martinez',
  userImage:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80",
  review:"This app simplifies note-taking. With just titles and content, I capture ideas effortlessly. Whether quick thoughts or detailed outlines, it's my trusted companion for organizing on the fly.",
  designation:"Student at Yale University"
}]

//==================================APP USERS TESTIMONIALS DATA END HERE===================================================================================