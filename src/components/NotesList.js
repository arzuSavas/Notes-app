import {useSelector} from 'react-redux';
function NotesList() {
  const items=useSelector((state)=>state.notes.items);
  const filter = useSelector((state) => state.notes.filter); 
  const filteredItems = items.filter(
    (item) => item.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <> 
       <div className='notes'>
        {filteredItems.map((item,index)=>(
        <div className='note'
           style={{background:` ${item.color}`, height:200}} 
           key={index}>
            {item.text}
        </div>
  ))
 }
       </div>
     </>
  )
 
}

export default NotesList