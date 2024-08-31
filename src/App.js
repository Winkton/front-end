import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import SearchIdPage from './pages/auth/SearchIdPage';
import UpdatePasswordPage from './pages/auth/UpdatePasswordPage';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritePage';
import MyPage from './pages/MyPage';

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
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/profile" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
