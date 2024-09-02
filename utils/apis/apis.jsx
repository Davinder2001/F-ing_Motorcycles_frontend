export const EXPORT_ALL_APIS=()=>{

    const loadHeaderFooter=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`)
        let data= resp.json()
        return data
    }

    const loadHomeFirstSection = async () => {
          let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homedata`);
          let data = resp.json(); // Get the raw response as text
          return data;
      
      };
      

    const loadHomeCategory=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
        let data= resp.json()
        return data
    }
    
    const loadHeaderImage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/headerlogo`)
        let data= resp.json()
        return data
    }

    return{
        loadHeaderFooter,
        loadHomeFirstSection,
        loadHomeCategory,
        loadHeaderImage
    }
}




 