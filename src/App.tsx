import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Innerpage from "./Pages/Innerpage"

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                    <Route path="/innerpage" element={<Innerpage></Innerpage>} />
                    <Route path="/" element={<Login></Login>} />
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
