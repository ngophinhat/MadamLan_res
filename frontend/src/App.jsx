import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"; 

import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import InforPage from "./pages/InforPage";
import CareerPage from "./pages/CareerPage"
import AboutUsPage from "./pages/AboutUsPage"
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import KeyboardShortcutHandler from "./components/KeyboardShortcutHandler";

function App() {
  return (
    <>
      <KeyboardShortcutHandler/>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/thuc-don" element={<MenuPage />} />
        <Route path="/dat-cho" element={<BookingPage/>} />
        <Route path="/tin-tuc" element={<InforPage />} />
        <Route path="/ve-chung-toi" element={<AboutUsPage/>} />
        <Route path= "/tuyen-dung" element= {<CareerPage/>} />
        <Route path="/admin/login" element={<LoginPage/>} />
        <Route path="/dat-ban" element={<BookingPage/>}/>
        
        <Route
          path="/admin/dashboard" 
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;