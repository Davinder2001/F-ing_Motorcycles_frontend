

import { EXPORT_ALL_APIS } from '../../utils/apis/apis';
import Layout from './_common/layout/layout';

import Homepage from './_homepage/homepage';

const Page = async() => {
  let api=EXPORT_ALL_APIS()
  let result=await api.loadHomeFirstSection()

  let category=await api.loadHomeCategory()
  


  return (
    <Layout>
      <div className='container'>
     
          <Homepage result={result} category={category}/>
       
      </div>
    </Layout>
  );
};

export default Page;
