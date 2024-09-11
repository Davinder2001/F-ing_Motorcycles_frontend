'use client';

import React, { useEffect, useState } from 'react';
import ManagementPage from './_dashboard/page';
import { useRouter } from 'next/navigation';
import { getUserDashboard } from '@/Api/LoginApi/api';

const Dashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated by retrieving the token from localStorage
    const token = localStorage.getItem('token'); // Replace 'authToken' with your token key

    if (!token) {
      // If token is not found, redirect to login
      router.push('/login');
    } else {
      // If token is found, set authentication to true and fetch the dashboard data
      setIsAuthenticated(true);
      fetchDashboardData(token);
    }
  }, [router]);

  const fetchDashboardData = async (token) => {
    try {
      const data = await getUserDashboard(token);
      // const data = await getUserDashboard(token);
      setDashboardData(data); // Store the dashboard data
    } catch (error) {
      console.error('Failed to fetch user dashboard.', error);
      // If fetching data fails, redirect to login
      router.push('/login');
    } finally {
      // After fetching, set loading to false
      setLoading(false);
    }
  };

 
  // If user is authenticated, display the management page
  return (
    <div>
      {isAuthenticated && <ManagementPage dashboardData={dashboardData} />}
    </div>
  );
};

export default Dashboard;
