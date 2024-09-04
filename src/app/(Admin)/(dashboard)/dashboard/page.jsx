'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserDashboard } from '@/Api/LoginApi/api';
import Sidebar from '@/app/(Admin)/(dashboard)/dashboard/Components/Sidebar/Sidebar';
import CategoryManagement from './Components/categories/Cat';
import ProductManagement from './Components/products/product';
import FooterManagement from './Components/footer-management/footer';
import HeaderLogoPage from './Components/Header/headerLogo';
import HomePageManagement from './Components/HomePageManagement/page';
import ProductPageManagement from './Components/ProductPageManagement/productPage';
import InvestorPageManagement from './Components/InvestorPageManagement/investorPage';
import DashboardMain from './Components/MainDashboard/dashboard';

import { EXPORT_ALL_APIS } from '../../../../../utils/apis/apis';
let api=EXPORT_ALL_APIS()
const getCatDash = api.fetchCategories();


const Dashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');  
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
                {activeTab === 'dashboard' && <DashboardMain getCatDash={getCatDash}/>}
                {activeTab === 'category' && <CategoryManagement />}
                {activeTab === 'product' && <ProductManagement />}
                {activeTab === 'header' && <HeaderLogoPage/> }
                {activeTab === 'footer' && <FooterManagement /> }
                {activeTab === 'homePage' && <HomePageManagement /> } 
                {activeTab === 'productPage' && <ProductPageManagement /> } 
                {activeTab === 'investorPage' && <InvestorPageManagement /> }
                {activeTab === 'aboutPage' && <FooterManagement /> } {/* Change with original page */}
                {activeTab === 'contactPage' && <FooterManagement /> } {/* Change with original page */}
                
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
