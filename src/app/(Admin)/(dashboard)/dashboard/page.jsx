 
import dynamic from 'next/dynamic';
import { EXPORT_ALL_APIS } from '../../../../../utils/apis/apis';

const ManagementPage = dynamic(() => import('./_dashboard/ManagementPage'), { ssr: false });

const Dashboard = async () => {


 

                let api = EXPORT_ALL_APIS();
                const profile = await api.fetchprofile();
                const categoryList = await api.fetchCategories();
                const contactPageData = await api.fetchContactPage();
                const PrivacyPolicy = await api.fetchPrivacyPolicyPage();
                const termsOfUse = await api.fetchTermsOfUsePage();
                const termsAndConditions = await api.fetchTermsAndConditionsPage();
                const AboutUs = await api.fetchAboutUsPage();
                const founders = await api.fetchFounders();
                const enquiryFormData = await api.fetchenquiryForm();
                

return (
    <div>
      { <ManagementPage profile={profile} categoryList={categoryList} contactPageData={contactPageData} PrivacyPolicy={PrivacyPolicy} termsOfUse={termsOfUse}  termsAndConditions={termsAndConditions} AboutUs={AboutUs} founders={founders} enquiryFormData={enquiryFormData} />}
    </div>
  );
};

export default Dashboard;
