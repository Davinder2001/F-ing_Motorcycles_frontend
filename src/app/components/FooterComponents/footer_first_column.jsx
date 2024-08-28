"use client";

import { useEffect, useState } from 'react';
import { fetchFooters } from '@/Api/FooterApi/api'; // Ensure the path is correct

const FooterColumnOne = () => {
    const [footer, setFooter] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFooter = async () => {
            try {
                const data = await fetchFooters();
                if (data.length > 0) {
                    fetchFooters(data[0]); // Use the first footer from the array
                } else {
                    setError('No footer data found.');
                }
            } catch (error) {
                console.error('Error fetching footers data:', error);
                setError('Failed to load footer data.');
            }   
        };

        loadFooter();
    }, []);

    if (error) return <p>{error}</p>;

    // Displaying a basic placeholder while data is loading
    return (
        <div>
            {footer ? (
                <>
                    {footer.column_1_heading_1 ? (
                        <h2>{footer.column_1_heading_1}</h2>
                    ) : (
                        <p>No heading available</p>
                    )}
                    <ul>
                        {footer.column_1_field_1 ? <li>{footer.column_1_field_1}</li> : <li>No field 1 available</li>}
                        {footer.column_1_field_2 ? <li>{footer.column_1_field_2}</li> : <li>No field 2 available</li>}
                        {footer.column_1_field_3 ? <li>{footer.column_1_field_3}</li> : <li>No field 3 available</li>}
                        {footer.column_1_field_4 ? <li>{footer.column_1_field_4}</li> : <li>No field 4 available</li>}
                    </ul>
                </>
            ) : (
                <p>Loading footer...</p>
            )}
        </div>
    );
};

export default FooterColumnOne;
