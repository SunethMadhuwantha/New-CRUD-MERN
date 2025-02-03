
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Allstud from './Components/Allstud';
import Navbar from './Components/Navbar';
import Addstud from './Components/Addstud';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Allstud />} />
      <Route path="/addstud" element={<Addstud />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
