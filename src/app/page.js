

import { EXPORT_ALL_APIS } from '../../utils/apis/apis';
import Layout from './_common/layout/layout';

import Homepage from './_homepage/homepage';

const Page = async() => {
  let api         = EXPORT_ALL_APIS()
  let result      = await api.fetchContent()
  let category    = await api.fetchCategories()
  let heroSection = await api.fetchHeroSections()  
  let investor    = await api.fetchInvestor()


  return (
    <Layout>
    <Homepage result={result} category={category} heroSection={heroSection} investor={investor}/>
    </Layout>
  );
};

export default Page;
