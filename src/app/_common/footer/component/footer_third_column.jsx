'use client'
import Link from 'next/link';

const FooterColumnThree = ({ result }) => {
    return (
        <div>
            {result && result.map((ele, index) => (
                <div key={index}>
                    <h5>{ele.column_3_heading_1}</h5>
                    <ul className='footer-addrses'>
                        <li>
                            <Link href={`tel:${ele.column_3_field_1}`}>
                                {ele.column_3_field_1}
                            </Link>
                        </li>
                        <li>
                            <Link href={`mailto:${ele.column_3_field_2}`}>
                                {ele.column_3_field_2}
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                {ele.column_3_field_3}
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterColumnThree;
