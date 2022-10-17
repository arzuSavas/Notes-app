import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotes } from '../redux/notesSlice';
function NotesArea() {
  const [text,setText]= useState('');
  const [color, setColor]=useState('');
  const dispatch =useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addNotes({text,color}))
    console.log(text,color);
    console.log(addNotes(text));
  } 
  return (
    <div>
      <form onSubmit={handleSubmit} style={{alignItems:'center'}} >
        <div className='text-area'>
           <textarea 
            onChange={(e)=>setText(e.target.value)}
            placeholder='Not Ekle...'
            required
           />
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:10}}> 
           <div className='radio-group'>
          <input type="radio" id='color1'name='cheked' value='#D75281'onClick={(e)=>setColor(e.target.value)} defaultChecked={true}/>
          <input type="radio"id='color2'name='cheked'  value='#646FD4' onClick={(e)=>setColor(e.target.value)}/>
          <input type="radio"id='color3'name='cheked'  value='#FF4949' onClick={(e)=>setColor(e.target.value)}/>
           </div>
            <button type='submit' style={{backgroundColor:`${color}`}} >Ekle</button>
            </div>
            </div>
         </form>
    </div>
  )
}

export default NotesArea