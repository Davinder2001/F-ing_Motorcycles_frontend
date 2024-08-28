'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/Api/LoginApi/api'; // Adjust the import path if needed

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      await logoutUser(token);

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
