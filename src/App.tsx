import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/headerComponent/header.tsx';
import HomePage from './components/pages/homePage.tsx'
import PredmetPage from './components/pages/predmetPage.tsx'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/predmet" element={<PredmetPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
