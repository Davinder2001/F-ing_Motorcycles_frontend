import TabComponent from './components/productTabs'
import Layout from '../_common/layout/layout';
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis'

const page = async() => {
  let api=EXPORT_ALL_APIS()
  let result=await api.fetchProductPage()

  return (
    <div>
   <Layout>   
      <TabComponent result={result}/>
  </Layout>

    </div>
  )
}

export default page