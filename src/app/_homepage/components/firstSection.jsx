import Image from "next/image";


const HomeFristSection = ({result}) => {


  return (
    <div className="container">
     <h1>{result?.heading}</h1>
     <p>{result?.description}</p>
     <Image src={result?.image}  height={100} width={100}/>
    
    </div>
  );
};

export default HomeFristSection;
