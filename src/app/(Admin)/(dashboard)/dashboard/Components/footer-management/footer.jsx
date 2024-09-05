'use client'
import { useState, useEffect } from 'react';
import { updateFooter, fetchFooters } from '@/Api/FooterApi/api'; // Adjust the path as needed


import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';
let api=EXPORT_ALL_APIS()
const getFooter = api.loadHeaderFooter();


const FooterManagement = () => {
    const [formData, setFormData] = useState({
        column_1_heading_1: '',
        column_1_field_1: '',
        column_1_field_2: '',
        column_1_field_3: '',
        column_1_field_4: '',
        column_2_heading_1: '',
        column_2_field_1: '',
        column_2_field_2: '',
        column_2_field_3: '',
        column_3_heading_1: '',
        column_3_field_1: '',
        column_3_field_2: '',
        column_3_field_3: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch the footer data when the component mounts
    useEffect(() => {
        const getFooter = async () => {
            try {
                const footers = await api.loadHeaderFooter();
                if (footers.length > 0) {
                    // Assuming there is only one footer
                    const footer = footers[0];
                    setFormData({
                        column_1_heading_1: footer.column_1_heading_1 || '',
                        column_1_field_1: footer.column_1_field_1 || '',
                        column_1_field_2: footer.column_1_field_2 || '',
                        column_1_field_3: footer.column_1_field_3 || '',
                        column_1_field_4: footer.column_1_field_4 || '',
                        column_2_heading_1: footer.column_2_heading_1 || '',
                        column_2_field_1: footer.column_2_field_1 || '',
                        column_2_field_2: footer.column_2_field_2 || '',
                        column_2_field_3: footer.column_2_field_3 || '',
                        column_3_heading_1: footer.column_3_heading_1 || '',
                        column_3_field_1: footer.column_3_field_1 || '',
                        column_3_field_2: footer.column_3_field_2 || '',
                        column_3_field_3: footer.column_3_field_3 || '',
                    });
                } else {
                    setError('No footer found.');
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching footers:', err.message);
                setError('Failed to load footer.');
                setLoading(false);
            }
        };

        getFooter();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const footers = await fetchFooters();
            if (footers.length > 0) {
                const footerId = footers[0].id; // Assuming ID is available
                const updatedFooter = await updateFooter(footerId, formData);
                console.log('Updated Footer:', updatedFooter);
                // Optionally redirect or show a success message
            } else {
                setError('No footer found for updating.');
            }
        } catch (err) {
            console.error('Error updating footer:', err.message);
            setError('Failed to update footer.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Update Footer</h1>
            <form onSubmit={handleSubmit}>
            <div className='admin-footer-section-columns'>
                <div className='column-1'>
                    <h3>Column 1</h3>
                    <div>
                        <label htmlFor="column_1_heading_1">Column 1 Heading 1</label>
                        <input
                            type="text"
                            id="column_1_heading_1"
                            name="column_1_heading_1"
                            value={formData.column_1_heading_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_1_field_1">Column 1 Field 1</label>
                        <input
                            type="text"
                            id="column_1_field_1"
                            name="column_1_field_1"
                            value={formData.column_1_field_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_1_field_2">Column 1 Field 2</label>
                        <input
                            type="text"
                            id="column_1_field_2"
                            name="column_1_field_2"
                            value={formData.column_1_field_2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_1_field_3">Column 1 Field 3</label>
                        <input
                            type="text"
                            id="column_1_field_3"
                            name="column_1_field_3"
                            value={formData.column_1_field_3}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_1_field_4">Column 1 Field 4</label>
                        <input
                            type="text"
                            id="column_1_field_4"
                            name="column_1_field_4"
                            value={formData.column_1_field_4}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='column-2'>
                    <h3>Column 2</h3>
                    <div>
                        <label htmlFor="column_2_heading_1">Column 2 Heading 1</label>
                        <input
                            type="text"
                            id="column_2_heading_1"
                            name="column_2_heading_1"
                            value={formData.column_2_heading_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_2_field_1">Column 2 Field 1</label>
                        <input
                            type="text"
                            id="column_2_field_1"
                            name="column_2_field_1"
                            value={formData.column_2_field_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_2_field_2">Column 2 Field 2</label>
                        <input
                            type="text"
                            id="column_2_field_2"
                            name="column_2_field_2"
                            value={formData.column_2_field_2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_2_field_3">Column 2 Field 3</label>
                        <input
                            type="text"
                            id="column_2_field_3"
                            name="column_2_field_3"
                            value={formData.column_2_field_3}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <h3>Column 3</h3>
                    <div className='column-3'>
                        <label htmlFor="column_3_heading_1">Column 3 Heading 1</label>
                        <input
                            type="text"
                            id="column_3_heading_1"
                            name="column_3_heading_1"
                            value={formData.column_3_heading_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_3_field_1">Column 3 Field 1</label>
                        <input
                            type="text"
                            id="column_3_field_1"
                            name="column_3_field_1"
                            value={formData.column_3_field_1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_3_field_2">Column 3 Field 2</label>
                        <input
                            type="text"
                            id="column_3_field_2"
                            name="column_3_field_2"
                            value={formData.column_3_field_2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="column_3_field_3">Column 3 Field 3</label>
                        <input
                            type="text"
                            id="column_3_field_3"
                            name="column_3_field_3"
                            value={formData.column_3_field_3}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                </div>
                <button type="submit">Update Footer</button>
            </form>
        </div>
    );
};

export default FooterManagement;
