

import { EXPORT_ALL_APIS } from '../../utils/apis/apis';
 
import dynamic from 'next/dynamic';


const Homepage = dynamic(() => import('./_homepage/homepage'),{ssr:false});
const Layout = dynamic(() => import('./_common/layout/layout'),{ssr:false});

const Page = async() => {
  let api         = EXPORT_ALL_APIS()
  let result      = await api.fetchContent()
  let category    = await api.fetchCategories()
  let heroSection = await api.fetchHeroSections()  
  let investor    = await api.fetchInvestor()

  console.warn(result)


  return (
    <Layout>
    <Homepage result={result} category={category} heroSection={heroSection} investor={investor}/>
    </Layout>
  );
};

export default Page;



