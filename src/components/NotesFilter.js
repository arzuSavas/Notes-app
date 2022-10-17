import React from 'react'
import {useDispatch} from 'react-redux'
import{notesFilter}from '../redux/notesSlice'
function NotesFilter() {
    let dispatch =useDispatch()
  return (
    <div className='search'>
        <input type="text" placeholder='notlarını ara'
          onChange={(e)=>dispatch(notesFilter(e.target.value))}
         />
    </div>
  )
}

export default NotesFilter