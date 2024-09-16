'use client'
import Link from 'next/link';

const FooterColumnTwo = ({ result }) => {
    return (
        <div>
            {result && result.map((ele, index) => (
                <div key={index}>
                    <h5>{ele.column_2_heading_1}</h5>
                    <li>
                        <Link href="/PrivacyPolicy">
                            {ele.column_2_field_1}
                        </Link>
                    </li>
                    <li>
                        <Link href="/TermsOfUse">
                            {ele.column_2_field_2}
                        </Link>
                    </li>
                    <li>
                        <Link href="/TermsAndConditions">
                            {ele.column_2_field_3}
                        </Link>
                    </li>
                </div>
            ))}
        </div>
    );
};

export default FooterColumnTwo;
