import './App.css';
import NotesArea from './components/NotesArea';
import NotesFilter from './components/NotesFilter';
import NotesList from './components/NotesList';
function App() {
  return (
    <div className="App">
      <NotesArea/>
      <NotesFilter/>
      <NotesList/>
    </div>
  );
}

export default App;
