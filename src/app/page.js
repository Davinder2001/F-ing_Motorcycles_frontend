

import { EXPORT_ALL_APIS } from '../../utils/apis/apis';
import Layout from './_common/layout/layout';

import Homepage from './_homepage/homepage';

const Page = async() => {
  let api         = EXPORT_ALL_APIS()
  let result      = await api.fetchContent()
  let category    = await api.fetchCategories()
  let heroSection = await api.fetchHeroSections()  


  return (
    <Layout>
    <Homepage result={result} category={category} heroSection={heroSection}/>
    </Layout>
  );
};

export default Page;
