import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
