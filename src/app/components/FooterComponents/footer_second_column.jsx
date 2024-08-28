"use client";

import { useEffect, useState } from 'react';
import { fetchFooters } from '@/Api/FooterApi/api'; // Ensure the path is correct

const FooterColumnTwo = () => {
    const [footer, setFooter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFooter = async () => {
            try {
                const data = await fetchFooters();
                
                // Conditional logging based on environment
                if (process.env.NODE_ENV === 'development') {
                    console.log('Fetched footers data:', data); // Debugging line
                }
                
                // Assuming there's only one footer in the array
                if (data.length > 0) {
                    setFooter(data[0]); // Use the first footer from the array
                } else {
                    setError('No footer data found.');
                }
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error fetching footers data:', error); // Detailed error log
                }
                setError('Failed to load footer data.');
            } finally {
                setLoading(false);
            }
        };

        loadFooter();
    }, []);

    if (loading) return <p>Loading footer...</p>;
    if (error) return <p>{error}</p>;

    if (!footer) return <p>No footer data available.</p>;

    return (
        <div>
            {footer.column_2_heading_1 ? (
                <h2>{footer.column_2_heading_1}</h2>
            ) : (
                <p>No heading available</p>
            )}
            <ul>
                {footer.column_2_field_1 ? <li>{footer.column_2_field_1}</li> : <li>No field 1 available</li>}
                {footer.column_2_field_2 ? <li>{footer.column_2_field_2}</li> : <li>No field 2 available</li>}
                {footer.column_2_field_3 ? <li>{footer.column_2_field_3}</li> : <li>No field 3 available</li>}
            </ul>
        </div>
    );
};

export default FooterColumnTwo;
