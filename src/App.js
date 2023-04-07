import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<NotesForm />} />
          <Route path='/allNotes' element={<AllNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
