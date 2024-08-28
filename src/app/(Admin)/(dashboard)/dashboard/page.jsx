'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserDashboard } from '@/Api/LoginApi/api';
import Sidebar from '@/app/(Admin)/(dashboard)/dashboard/Components/Sidebar/Sidebar';
import CategoryManagement from './Components/categories/Cat';
import ProductManagement from './Components/products/product';
import FooterManagement from './Components/footer-management/footer';

const Dashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('category');  
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            fetchDashboardData(token);
        } else {
            router.push('/login');
        }
    }, [router]);

    const fetchDashboardData = async (token) => {
        try {
            const data = await getUserDashboard(token);
            setDashboardData(data);
        } catch (error) {
            console.error('Failed to fetch user dashboard.', error);
            router.push('/login');
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated || loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='dashboard'>
        <div className='dashboard-inner'>

            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='main-content'>
                {activeTab === 'category' && <CategoryManagement />}
                {activeTab === 'product' && <ProductManagement />}
                {activeTab === 'footer' && <FooterManagement />}
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
