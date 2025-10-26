import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const adminToken = localStorage.getItem('adminToken');
  const customerToken = localStorage.getItem('customerToken');

  // Trường hợp 1: Route này yêu cầu quyền 'admin'
  if (role === 'admin') {
    // Nếu có token admin thì cho vào, không thì đá về trang login
    return adminToken ? children : <Navigate to="/admin/login" />;
  }

  // Trường hợp 2: Route này yêu cầu quyền 'customer'
  if (role === 'customer') {
    // Nếu có token customer thì cho vào, không thì đá về trang login
    return customerToken ? children : <Navigate to="/auth/login" />;
  }
  
  return adminToken || customerToken ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;