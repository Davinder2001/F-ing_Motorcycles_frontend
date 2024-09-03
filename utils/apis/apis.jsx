export const EXPORT_ALL_APIS=()=>{

    const loadHeaderFooter=async()=>{
        try {
            let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`)
            let data= resp.json()
            return data
            
        } catch (error) {
            console.log('error')
        }
    }

    const loadHomeFirstSection = async () => {
        try {
            
            let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homedata`)
            let data = await resp.json();  
            return data;
        } catch (error) {
            console.log('error')
        }
      
      };
      

    const loadHomeCategory=async()=>{
        try {
            let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
            let data=await resp.json()
            return data
            
        } catch (error) {
           console.log('error') 
        }
    }
    
    const loadHeaderImage=async()=>{
        try {
            
            let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/headerlogo`)
            let data=await resp.json()
            return data
        } catch (error) {
            console.log('error')
        }
    }

    return{
        loadHeaderFooter,
        loadHomeFirstSection,
        loadHomeCategory,
        loadHeaderImage
    }
}




 