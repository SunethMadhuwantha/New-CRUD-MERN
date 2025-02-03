
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Allstud from './Components/Allstud';
import Navbar from './Components/Navbar';
import Addstud from './Components/Addstud';
import Editstud from './Components/Editstud';
import Viewstud from './Components/Viewstud';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Allstud />} />
      <Route path="/addstud" element={<Addstud />} />
      <Route path="/editstud/:id" element={<Editstud />} />
      <Route path="/viewstud" element={<Viewstud />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
