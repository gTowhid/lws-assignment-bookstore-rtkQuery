import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/editBook/:bookId' element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
