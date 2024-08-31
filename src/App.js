import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import SearchIdPage from './pages/auth/SearchIdPage';
import UpdatePasswordPage from './pages/auth/UpdatePasswordPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/searchId" element={<SearchIdPage />} />
          <Route path="/updatePassword" element={<UpdatePasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
