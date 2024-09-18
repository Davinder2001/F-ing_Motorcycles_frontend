'use client';
import dynamic from 'next/dynamic';
// Import all pages and APIs
import React, { useState } from 'react';
const DashboardMain = dynamic(() => import('../Components/MainDashboard/dashboard'), { ssr: false });
const Sidebar = dynamic(() => import('../Components/Sidebar/Sidebar'), { ssr: false });
const ProfilePage = dynamic(() => import('../Components/Profile/ProfilePage'), { ssr: false });
const EnquiryForm = dynamic(() => import('../Components/EnquiryForm/enquiryForm'), { ssr: false });
const CategoryManagement = dynamic(() => import('../Components/categories/Cat'), { ssr: false });
const ProductManagement = dynamic(() => import('../Components/ProductManagement/product'), { ssr: false });
const HeaderLogoPage = dynamic(() => import('../Components/Header/headerLogo'), { ssr: false });
const FooterManagement = dynamic(() => import('../Components/footer-management/footer'), { ssr: false });
const HomePageManagement = dynamic(() => import('../Components/HomePageManagement/HomePageManagement'), { ssr: false });
const ProductSeoPage = dynamic(() => import('../Components/ProductPageManagement/productPage'), { ssr: false });
const InvestorPageManagement = dynamic(() => import('../Components/InvestorPageManagement/investorPage'), { ssr: false });
const AboutPageManagement = dynamic(() => import('../Components/aboutPageManagement/aboutPageManagement'), { ssr: false });
const ContactPageManage = dynamic(() => import('../Components/ContactPageManagement/contactPageManage'), { ssr: false });
const PrivacyPolicyManagement = dynamic(() => import('../Components/PrivacyPolicyManagement/PrivacyPolicyManagement'), { ssr: false });
const TermsOfUseManagement = dynamic(() => import('../Components/TermsofUseManagement/TermsofUseManagement'), { ssr: false });
const TermsAndConditionsManagement = dynamic(() => import('../Components/TermsAndConditionsManagement/TermsAndConditionsManagement'), { ssr: false });
const FounderManagement = dynamic(() => import('../Components/FounderManagement/FounderManagement'), { ssr: false });

// import Sidebar from '@/app/(Admin)/(dashboard)/dashboard/Components/Sidebar/Sidebar';
// import DashboardMain from '@/app/(Admin)/(dashboard)/dashboard/Components/MainDashboard/dashboard';
// import Profile from '@/app/(Admin)/(dashboard)/dashboard/Components/Profile/ProfilePage';
// import CategoryManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/categories/Cat';
// import HeaderLogoPage from '@/app/(Admin)/(dashboard)/dashboard/Components/Header/headerLogo';
// import FooterManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/footer-management/footer';
// import HomePageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/HomePageManagement/HomePageManagement';
// import ProductPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/ProductPageManagement/productPage';
// import InvestorPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/InvestorPageManagement/investorPage';
// import AboutPageManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/aboutPageManagement/aboutPageManagement';
// import ContactPageManage from '@/app/(Admin)/(dashboard)/dashboard/Components/ContactPageManagement/contactPageManage';
// import PrivacyPolicyManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/PrivacyPolicyManagement/PrivacyPolicyManagement';
// import TermsofUseManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/TermsofUseManagement/TermsofUseManagement';
// import TermsAndConditionsManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/TermsAndConditionsManagement/TermsAndConditionsManagement';
// import FounderManagement from '@/app/(Admin)/(dashboard)/dashboard/Components/FounderManagement/FounderManagement';
// import EnquiryForm from '@/app/(Admin)/(dashboard)/dashboard/Components/EnquiryForm/enquiryForm';
// import ProductManagement from '../Components/ProductManagement/product';

const ManagementPage = ({profile, categoryList, PrivacyPolicy, termsOfUse, termsAndConditions, AboutUs, founders, enquiryFormData }) => {


    // // Set states
    const [activeTab, setActiveTab] = useState('dashboard');
    // const [profileData, setProfileData] = useState(null);
    // const [categories, setCategories] = useState([]);
    // const [contactPageData, setContactPageData] = useState([]);
    // const [PrivacyPolicy, setPrivacyPolicy] = useState([]);
    // const [termsOfUse, settermsOfUse] = useState([]);
    // const [termsAndConditions, settermsAndConditions] = useState([]);
    // const [AboutUs, setaboutUs] = useState([]);
    // const [founders, setfounders] = useState([]);
    // const [enquiryFormData, setenquiryForm] = useState([]);
    // const [loading, setLoading] = useState(true);


    // Fetch APIs data 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let api = EXPORT_ALL_APIS();
    //             const profile = await api.fetchprofile();
    //             const categoryList = await api.fetchCategories();
    //             const contactPageData = await api.fetchContactPage();
    //             const PrivacyPolicy = await api.fetchPrivacyPolicyPage();
    //             const termsOfUse = await api.fetchTermsOfUsePage();
    //             const termsAndConditions = await api.fetchTermsAndConditionsPage();
    //             const AboutUs = await api.fetchAboutUsPage();
    //             const founders = await api.fetchFounders();
    //             const enquiryFormData = await api.fetchenquiryForm();
    //             setProfileData(profile);
    //             setCategories(categoryList);
    //             setContactPageData(contactPageData);
    //             setPrivacyPolicy(PrivacyPolicy);
    //             settermsOfUse(termsOfUse);
    //             settermsAndConditions(termsAndConditions);
    //             setaboutUs(AboutUs);
    //             setfounders(founders);
    //             setenquiryForm(enquiryFormData);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []); 



    return (
        <div className="dashboard">
            <div className="dashboard-inner">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="main-content">
                    {activeTab === 'dashboard' && <DashboardMain categories={categoryList} />}
                    {activeTab === 'profile' && profile && <ProfilePage profile={profile} />}
                    {activeTab === 'enquiryForm' && <EnquiryForm enquiryFormData={enquiryFormData}/>}
                    {activeTab === 'category' && <CategoryManagement categories={categories} />}
                    {activeTab === 'product' && <ProductManagement />}
                    {activeTab === 'header' && <HeaderLogoPage />}
                    {activeTab === 'footer' && <FooterManagement />}
                    {activeTab === 'homePage' && <HomePageManagement />}
                    {activeTab === 'productPage' && <ProductSeoPage />}
                    {activeTab === 'investorPage' && <InvestorPageManagement />}
                    {activeTab === 'aboutPage' && <AboutPageManagement AboutUs={AboutUs}/>}
                    {activeTab === 'contactPage' && <ContactPageManage  />}
                    {activeTab === 'privacyPolicy' && <PrivacyPolicyManagement PrivacyPolicy={PrivacyPolicy}/>}
                    {activeTab === 'termsOfUse' && <TermsOfUseManagement termsOfUse={termsOfUse}/>}
                    {activeTab === 'terms&Conditions' && <TermsAndConditionsManagement termsAndConditions={termsAndConditions}/>}
                    {activeTab === 'founder' && <FounderManagement founders={founders} />}
                </div>
            </div>
        </div>
    );
};

export default ManagementPage;
