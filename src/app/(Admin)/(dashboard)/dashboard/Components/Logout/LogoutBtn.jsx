'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const LogoutBtn = () => {
  const api = EXPORT_ALL_APIS();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      await api.logoutUser(token);

      localStorage.removeItem('token');

      // // Redirect to the login page or another route
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Optionally, show an error message to the user
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default LogoutBtn;
