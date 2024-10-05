'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../utils/apis/apis';


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
const GreenAnergyPageManagement = dynamic(() => import('../Components/greenEnergyPageManagement/greenAnergy'), { ssr: false });


const ManagementPage = ({profile, categoryList, PrivacyPolicy, termsOfUse, termsAndConditions, AboutUs, founders, enquiryFormData }) => {


    const router = useRouter();
   
     // Redirect to login if no token is present
     useEffect(() => {
        const api = EXPORT_ALL_APIS(); 
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); // Redirect to login if token is not found
          } else {
            // Wrapping the logic in an async function to use await
            const fetchDashboardData = async () => {
              try {
                const getDashboard = await api.getUserDashboard(token);
                if (getDashboard === undefined) {
                  alert('Session Expired')
                  localStorage.removeItem('token');
                  router.push('/login');
                }
              } catch (error) {
                console.error('Error fetching dashboard:', error); // Handle any errors
              }
            };
          
            fetchDashboardData(); // Call the async function
          }
          
       
    }, [router]);
    

    const [activeTab, setActiveTab] = useState('dashboard');
   

    return (
        <div className="dashboard">
            <div className="dashboard-inner">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="main-content">
                    {activeTab === 'dashboard' && <DashboardMain categories={categoryList} />}
                    {activeTab === 'profile' && profile && <ProfilePage profile={profile} />}
                    {activeTab === 'enquiryForm' && <EnquiryForm enquiryFormData={enquiryFormData}/>}
                    {activeTab === 'category' && <CategoryManagement />}
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
                    {activeTab === 'greenAnergyPage' && <GreenAnergyPageManagement/>}
                </div>
            </div>
        </div>
    );
};

export default ManagementPage;
