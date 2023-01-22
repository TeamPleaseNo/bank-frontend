import './css/App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import PersonalArea from "./components/PersonalArea";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="registration" element={<Registration/>} />
          <Route path="/{id}" element={<PersonalArea/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
