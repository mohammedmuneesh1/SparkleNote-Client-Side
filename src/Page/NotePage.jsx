import React from 'react'
import NoteHeader from '../Components/NotePage Components/NoteHeader'
import NoteHome from '../Components/NotePage Components/NoteHome'

export default function NotePage() {
  return (
    <div className='max-w-screen min-h-screen bg-white-cream'>
        <NoteHeader/>
        <NoteHome/>
    </div>
  )
}
