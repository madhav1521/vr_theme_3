import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Innerpage from "./Pages/Innerpage"
import History from './Pages/History';
import Docs from './Pages/Docs';
import Wallet from './Pages/Wallet';
import Setting from './Pages/Setting';

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                    <Route path="/innerpage" element={<Innerpage></Innerpage>} />
                    <Route path="/history" element={<History></History>} />
                    <Route path="/docs" element={<Docs></Docs>} />
                    <Route path="/wallet" element={<Wallet></Wallet>} />
                    <Route path="/setting" element={<Setting></Setting>} />
                    <Route path="/" element={<Login></Login>} />
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
