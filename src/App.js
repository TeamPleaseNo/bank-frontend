import './css/App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration.tsx';
import PersonalArea from "./components/PersonalArea";
import AddMicroloan from "./components/AddMicroloan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="registration" element={<Registration/>} />
          <Route path="/{id}" element={<PersonalArea/>}></Route>
          <Route path="/add" element={<AddMicroloan/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
