
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Navbar1 from './components/Navbar1';
import './input.css';

function App() {
  return (
  <div style={{ 
    backgroundImage: `url("https://images4.alphacoders.com/109/1099190.png")` 
  }} h-screen >
    <Navbar1/>
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/details' element={<DetailPage/>}/>
      </Route>
    </Routes>
  </div>
  );
}

export default App;
