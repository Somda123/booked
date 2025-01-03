
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main'
import BookRoom  from "./components/BookRoom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Status from "./components/Status";

function App (){
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Main/>} />
        <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>


    
  )
}


export default App

