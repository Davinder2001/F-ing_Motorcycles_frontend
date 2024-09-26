import { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';

// Initialize the API methods
let api = EXPORT_ALL_APIS();

const ContactSeoPage = () => {
    const [seoData, setSeoData] = useState(null);
    const [formData, setFormData] = useState({
        seoTitle: '',
        seoDescription: '',
        seoKeywords: ''
    });

    // Fetch SEO Data on component mount
    useEffect(() => {
        async function fetchSeoData() {
            try {
                const data = await api.fetchContactSeoPage();
                setSeoData(data.data);
                if (data.data) {
                    setFormData({
                        seoTitle: data.data.seo_title,
                        seoDescription: data.data.seo_description,
                        seoKeywords: data.data.seo_keywords
                    });
                }
            } catch (error) {
                console.error('Error fetching SEO data:', error);
            }
        }
        fetchSeoData();
    }, []);

    const handleCreate = async () => {
        try {
            const token = localStorage.getItem('token');
            await api.createContactSeoData(token, formData);
            alert('Contact SEO data created successfully');
        } catch (error) {
            console.error('Error creating SEO data:', error);
            alert('Failed to create Contact SEO data');
        }
    };

    const handleUpdate = async () => {
        try {
            if (seoData) {
                const token = localStorage.getItem('token');
                await api.updateContactSeoData(token, formData, seoData.id);
                alert('Contact SEO data updated successfully');
            }
        } catch (error) {
            console.error('Error updating SEO data:', error);
            alert('Failed to update Contact SEO data');
        }
    };

    const handleDelete = async () => {
        try {
            if (seoData) {
                const token = localStorage.getItem('token');
                await api.deleteContactSeoData(token, seoData.id);
                alert('Contact SEO data deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting SEO data:', error);
            alert('Failed to delete Contact SEO data');
        }
    };

    return (
        <div className='admin-homepage-seo'>
            <h1>Contact SEO Page</h1>
            <div>
               data {seoData?.name}
            </div>
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
            
            {/* Conditional rendering of buttons */}
            {seoData ? (
                <>
                <div className='button-founder'>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                </>
            ) : (
                <button onClick={handleCreate}>Create</button>
            )}
        </div>
    );
};

export default ContactSeoPage;
