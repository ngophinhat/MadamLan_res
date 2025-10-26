import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import InforPage from "./pages/InforPage";
import CareerPage from "./pages/CareerPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from "./pages/AdminDashboard";
import BookingHistoryPage from './pages/BookingHistoryPage';
import UserSettingsPage from './pages/UserSettingsPage';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/thuc-don" element={<MenuPage />} />
        <Route path="/dat-cho" element={<BookingPage/>} />
        <Route path="/tin-tuc" element={<InforPage />} />
        <Route path="/ve-chung-toi" element={<AboutUsPage/>} />
        <Route path="/tuyen-dung" element={<CareerPage/>} />
        
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        

        <Route 
          path="/lich-su-dat-ban" 
          element={
            <PrivateRoute role="customer">
              <BookingHistoryPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/cai-dat-thong-tin" 
          element={
            <PrivateRoute role="customer">
              <UserSettingsPage />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/admin/dashboard" 
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
  );
}

export default App;