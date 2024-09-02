
const FooterColumnOne = ({result}) => {
    

  
    return (
        <div>
            {result&&result.map((ele,index)=>{
                return <div key={index}>
                <li>{ele.column_1_field_1}</li>
                <li>{ele.column_1_field_2}</li>
                <li>{ele.column_1_field_3}</li>
                <li>{ele.column_1_field_4}</li> 
                </div>
            })}
        </div>
    );
};

export default FooterColumnOne;
