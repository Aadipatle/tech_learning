
import './App.css';
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Reset from "./pages/Reset/reset";
import LandingPage from "./pages/LandingPage/landing";
import Repass from "./pages/Reset2/repass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learning from "./pages/learning/Learning";
import "../src/App.css"
import Course from "./pages/course/Course";
import Front from "./pages/front-end/Front";


function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/repass" element={<Repass />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/course" element={<Course />} />
      <Route path="/front-end" element={<Front />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
