import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const FooterColumnOne = ({ result }) => (
    <div>
        {result?.[0]?.column_1_heading_1 && <h5>{result[0].column_1_heading_1}</h5>}
        <ul>
            {result?.map((ele, index) => (
                <li key={index}>{ele.column_1_field_1}</li>
            ))}
        </ul>
        {result?.map((ele, index) => (
            <div key={index} style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                {ele.column_1_field_2 && (
                    <a href={ele.column_1_field_2} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                )}
                {ele.column_1_field_3 && (
                    <a href={ele.column_1_field_3} target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                )}
                {ele.column_1_field_4 && (
                    <a href={ele.column_1_field_4} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                )}
            </div>
        ))}
    </div>
);

export default FooterColumnOne;
