'use client';


// Import all pages and APIs
import React, { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../utils/apis/apis';
import Sidebar from '@/app/(Admin)/(dashboard)/dashboard/Components/Sidebar/Sidebar';
import DashboardMain from '@/app/(Admin)/(dashboard)/dashboard/Components/MainDashboard/dashboard';
import Profile from '@/app/(Admin)/(dashboard)/dashboard/Components/Profile/ProfilePage';
import CategoryManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/categories/Cat';
import HeaderLogoPage from '@/app/(Admin)/(dashboard)/dashboard/Components/Header/headerLogo';
import FooterManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/footer-management/footer';
import HomePageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/HomePageManagement/page';
import ProductPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/ProductPageManagement/productPage';
import InvestorPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/InvestorPageManagement/investorPage';
import AboutPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/aboutPageManagement/aboutPageManagement';
import ContactPageManage from '@/app/(Admin)/(dashboard)/dashboard/Components/ContactPageManagement/contactPageManage';

const ManagementPage = () => {


    // Set states
    const [activeTab, setActiveTab] = useState('dashboard');
    const [profileData, setProfileData] = useState(null);
    const [categories, setCategories] = useState([]);
    const [contactPageData, setContactPageData] = useState([]);
    const [loading, setLoading] = useState(true);


    // Fetch APIs data 
    useEffect(() => {
        const fetchData = async () => {
            try {
                let api = EXPORT_ALL_APIS();
                const profile = await api.fetchprofile();
                const categoryList = await api.fetchCategories();
                const contactPageData = await api.fetchContactPage();
                setProfileData(profile);
                setCategories(categoryList);
                setContactPageData(contactPageData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 



    return (
        <div className="dashboard">
            <div className="dashboard-inner">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="main-content">
                    {activeTab === 'dashboard' && <DashboardMain />}
                    {activeTab === 'profile' && profileData && <Profile profileData={profileData} />}
                    {activeTab === 'category' && <CategoryManagement categories={categories} />}
                    {activeTab === 'header' && <HeaderLogoPage />}
                    {activeTab === 'footer' && <FooterManagement />}
                    {activeTab === 'homePage' && <HomePageManagement />}
                    {activeTab === 'productPage' && <ProductPageManagement />}
                    {activeTab === 'investorPage' && <InvestorPageManagement />}
                    {activeTab === 'aboutPage' && <AboutPageManagement />}
                    {activeTab === 'contactPage' && <ContactPageManage contactPageData={contactPageData} />}
                </div>
            </div>
        </div>
    );
};

export default ManagementPage;
