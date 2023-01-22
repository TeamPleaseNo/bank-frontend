import logo from './logo.svg';
import './css/App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
