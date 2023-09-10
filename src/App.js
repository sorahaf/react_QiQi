
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Navbar1 from './components/Navbar1';
import './input.css';

function App() {
  return (
  <div class = "bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: `url("https://preview.redd.it/66ic9c791ih61.png?auto=webp&s=967caa3ebc04e9262d7ba83ee0534015a3a5cb5b")` ,
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
