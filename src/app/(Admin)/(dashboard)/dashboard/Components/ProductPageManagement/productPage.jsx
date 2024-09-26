import { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

// Initialize the API methods
let api = EXPORT_ALL_APIS();

const ProductSeoPage = () => {
    const [seoData, setSeoData] = useState(null); // To store fetched SEO data
    // console.log('ddddddddddddddddddd', seoData.data)
    const [formData, setFormData] = useState({
        name: '',            // New field for name
        seoTitle: '',
        seoDescription: '',
        seoKeywords: ''
    });
    const [errors, setErrors] = useState({}); // To store validation errors

    // Fetch Product SEO Data on component mount
    useEffect(() => {
        async function fetchSeoData() {
            try {
                const token = localStorage.getItem('token'); // Ensure you have the token
                const data = await api.fetchProductPage(token); // Call API to fetch SEO data7
                if (data && data.data) {
                  setSeoData(data.data); 
                    setFormData({
                        name: data.data?.[0].name || '',       // Initialize name field
                        seoTitle: data.data?.[0].seo_title,
                        seoDescription: data.data?.[0].seo_description,
                        seoKeywords: data.data?.[0].seo_keywords
                    });
                } else {
                    console.log('No SEO data available.');
                }
            } catch (error) {
                console.error('Error fetching Product SEO data:', error);
            }
        }
        fetchSeoData();
    }, []); // Run once on mount

    // Handle the creation of SEO data
    const handleCreate = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.createProductPage(token, formData); // Use the product SEO create API
            if (response.status === false) {
                setErrors(response.message); // Set validation errors
                return;
            }
            alert('Product SEO data created successfully');
            // Fetch new data after creating
            // fetchSeoData();
        } catch (error) {
            console.error('Error creating Product SEO data:', error);
            alert('Failed to create Product SEO data');
        }
    };

    // Handle updating SEO data
    const handleUpdate = async () => {
    
        try {
            if (seoData) {
                const token = localStorage.getItem('token');
                const id = seoData?.[0].id; // Get the SEO data ID
                const response = await api.updateProductPage(token, formData, id); // Use the product SEO update API
                if (response.status === false) {
                    setErrors(response.message); // Set validation errors
                    return;
                }
                alert('Product SEO data updated successfully');
                // Fetch new data after updating
                // fetchSeoData();
            }
        } catch (error) {
            console.error('Error updating Product SEO data:', error);
            alert('Failed to update Product SEO data');
        }
    };

    // Handle deletion of SEO data
    const handleDelete = async () => {
        try {
            if (seoData) {
                const token = localStorage.getItem('token');
                const id = seoData?.[0].id; // Get the SEO data ID
                await api.deleteProductPage(token, id); // Use the product SEO delete API
                alert('Product SEO data deleted successfully');
                // Fetch new data after deleting
                // fetchSeoData();
            }
        } catch (error) {
            console.error('Error deleting Product SEO data:', error);
            alert('Failed to delete Product SEO data');
        }
    };

    return (
        <div>
            <h1>Product SEO Page</h1>

            {/* Conditional rendering of buttons */}
            {seoData?.[0].id ? (
                <>
                <div className='edit-delet-btn'> 
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                   
                </>
            ) : (
                <button onClick={handleCreate}>Create</button>
            )}

            {/* Display form fields */}
            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.join(', ')}</p>} {/* Display name errors */}
                
                <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    placeholder="SEO Title"
                />
                <textarea
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    placeholder="SEO Description"
                />
                <input
                    type="text"
                    value={formData.seoKeywords}
                    onChange={(e) => setFormData({ ...formData, seoKeywords: e.target.value })}
                    placeholder="SEO Keywords"
                />
            </div>
        </div>
    );
};

export default ProductSeoPage;
