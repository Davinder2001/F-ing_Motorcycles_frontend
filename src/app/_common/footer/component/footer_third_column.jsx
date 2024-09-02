'use client'
const FooterColumnThree = ({result}) => {
    

    return (
        <div>
            {result&&result.map((ele,index)=>{
                return <div key={index}>
                <li>{ele.column_3_field_1}</li>
                <li>{ele.column_3_field_2}</li> 
                <li>{ele.column_3_field_3}</li> 
                </div>
            })}
        </div>
    );
};

export default FooterColumnThree;
