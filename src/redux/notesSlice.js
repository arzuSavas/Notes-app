import { createSlice } from '@reduxjs/toolkit'
export const notesSlice = createSlice({
    name:'notes',
    initialState:{
      items:[
        {
        title :'İlk not',
        text:'ilk not yazıldı',
        color:'#D75281',
      },
      ],
      filter:'' 
    },
    reducers:{
      addNotes:(state,action)=>{
        state.items.push(action.payload)
      },
      notesFilter:(state,action)=>{
      state.filter =action.payload;
      console.log(state.filter)
      }
    },
})
export const {addNotes,notesFilter}=notesSlice.actions;
export default notesSlice.reducer;