import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const api = EXPORT_ALL_APIS();

const InvestorPageManagement = () => {
    const [newInvestor, setNewInvestor] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        image: null,
    });

    const [investor, setInvestor] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch investor data when the component mounts
    useEffect(() => {
        const fetchInvestor = async () => {
            const token = localStorage.getItem('token');
            try {
                const fetchInvestorPage = await api.fetchInvestor(token);
                setInvestor(fetchInvestorPage.data[0] || {});
            } catch (err) {
                console.error('Failed to fetch investor data:', err.message);
                setError('Failed to load investor data');
            }
        };

        fetchInvestor();
    }, []);

    // Function to handle input changes (including files)
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (files) {
            // Handle file input
            setNewInvestor((prevState) => ({
                ...prevState,
                image: files[0],
            }));
        } else {
            // Handle text inputs
            setNewInvestor((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Function to handle ReactQuill changes for rich text fields
    const handleQuillChange = (name, value) => {
        setNewInvestor((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Function to handle creating an investor
    const handleCreateInvestor = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        Object.keys(newInvestor).forEach((key) => {
            formData.append(key, newInvestor[key]);
        });

        try {
            await api.createInvestorContent(token, newInvestor);
            const updatedInvestor = await api.fetchInvestor(token);
            setInvestor(updatedInvestor.data[0] || {});
            setNewInvestor({
                field1: '',
                field2: '',
                field3: '',
                field4: '',
                field5: '',
                field6: '',
                field7: '',
                field8: '',
                field9: '',
                field10: '',
                image: null,
            });
            setShowAddForm(false);
        } catch (err) {
            console.error('Failed to create investor:', err.message);
            setError('Failed to create investor');
        } finally {
            setLoading(false);
        }
    };

    // Function to handle updating an investor
    const handleUpdateInvestor = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        Object.keys(investor).forEach((key) => {
            formData.append(key, investor[key]);
        });

        const id = investor.id;
        try {
            await api.updateInvestorContent(token, id, investor);
            const updatedInvestor = await api.fetchInvestor(token);
            setInvestor(updatedInvestor.data[0] || {});
            setShowEditForm(false);
        } catch (err) {
            console.error('Failed to update investor:', err.message);
            setError('Failed to update investor');
        } finally {
            setLoading(false);
        }
    };

    // Function to handle input changes for the edit form
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            setInvestor((prevState) => ({
                ...prevState,
                image: files[0],
            }));
        } else {
            setInvestor((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Function to handle ReactQuill changes for the edit form
    const handleQuillChangeEdit = (name, value) => {
        setInvestor((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Investor Page Management</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {showAddForm && (
    <form onSubmit={handleCreateInvestor}>
        <h2>Create Investor</h2>
        
        {/* SEO Section */}
        <h3>SEO</h3>
        <input type="text" name="field8" value={newInvestor.field8 || ''} onChange={handleChange} placeholder="SEO Title" />
        <input type="text" name="field9" value={newInvestor.field9 || ''} onChange={handleChange} placeholder="SEO Description" />
        <input type="text" name="field10" value={newInvestor.field10 || ''} onChange={handleChange} placeholder="SEO Host URL" />

        {/* Page Content Section */}
        <h3>Page Content</h3>
        <input type="file" name="image" onChange={handleChange} placeholder="Image" />
        <input type="text" name="field1" value={newInvestor.field1 || ''} onChange={handleChange} placeholder="Heading" />
        <ReactQuill value={newInvestor.field2 || ''} onChange={(value) => handleQuillChange('field2', value)} placeholder="Description" />

        {/* Second Section */}
        <h3>Second Section</h3>
        <input type="text" name="field3" value={newInvestor.field3 || ''} onChange={handleChange} placeholder="Second Section Heading" />
        <input type="text" name="field4" value={newInvestor.field4 || ''} onChange={handleChange} placeholder="Card Heading 1" />
        <ReactQuill value={newInvestor.field5 || ''} onChange={(value) => handleQuillChange('field5', value)} placeholder="Card Description 1" />
        <input type="text" name="field6" value={newInvestor.field6 || ''} onChange={handleChange} placeholder="Card Heading 2" />
        <ReactQuill value={newInvestor.field7 || ''} onChange={(value) => handleQuillChange('field7', value)} placeholder="Card Description 2" />
        
        <button type="submit" disabled={loading}>Create Investor</button>
    </form>
)}


{showEditForm && (
    <form onSubmit={handleUpdateInvestor}>
        <h2>Edit Investor</h2>
        
        {/* SEO Section */}
        <h3>SEO</h3>
        <input type="text" name="field8" value={investor.field8 || ''} onChange={handleInputChange} placeholder="SEO Title" />
        <input type="text" name="field9" value={investor.field9 || ''} onChange={handleInputChange} placeholder="SEO Description" />
        <input type="text" name="field10" value={investor.field10 || ''} onChange={handleInputChange} placeholder="SEO Host URL" />

        {/* Page Content Section */}
        <h3>Page Content</h3>
        <input type="file" name="image" onChange={handleInputChange} placeholder="Image" />
        {investor.image && <p> <img src={investor.image} alt="Investor" /></p>}
        <input type="text" name="field1" value={investor.field1 || ''} onChange={handleInputChange} placeholder="Heading" />
        <ReactQuill value={investor.field2 || ''} onChange={(value) => handleQuillChangeEdit('field2', value)} placeholder="Description" />

        {/* Second Section */}
        <h3>Second Section</h3>
        <input type="text" name="field3" value={investor.field3 || ''} onChange={handleInputChange} placeholder="Second Section Heading" />
        <input type="text" name="field4" value={investor.field4 || ''} onChange={handleInputChange} placeholder="Card Heading 1" />
        <ReactQuill value={investor.field5 || ''} onChange={(value) => handleQuillChangeEdit('field5', value)} placeholder="Card Description 1" />
        <input type="text" name="field6" value={investor.field6 || ''} onChange={handleInputChange} placeholder="Card Heading 2" />
        <ReactQuill value={investor.field7 || ''} onChange={(value) => handleQuillChangeEdit('field7', value)} placeholder="Card Description 2" />
        
        <button type="submit" disabled={loading}>Update Investor</button>
    </form>
)}
<div className='edit-delet-btn'>
  {investor ? (
    // Show the Add, Edit, and Delete buttons if data exists
    <>
     
     
      <button onClick={() => setShowEditForm(!showEditForm)}>
        {showEditForm ? 'Cancel Edit' : 'Edit Investor'}
      </button>
    </>
  ) : (
    // Only show Add button if no data
    <button onClick={() => setShowAddForm(!showAddForm)}>
      {showAddForm ? 'Cancel' : 'Add Investor'}
    </button>
  )}
</div>

         

            <div>
                <div className='admin-content-homepage'> 
                    <h2>Current Investor Page</h2>
                    <h3>SEO</h3>
                    <p><strong>SEO Title:</strong> {investor.field8}</p>
                    <p><strong>SEO Discription:</strong> {investor.field9}</p>
                    <p><strong>SEO Host URL:</strong> {investor.field10}</p>
                </div>
                <div className='admin-investor-pagecontent'> 
                    <h3>Page Content</h3>
                    {investor.image && <p className='content-invest-admin'><strong>Image:</strong> <img src={investor.image} alt="Investor" /></p>}
                    <h3><strong>Heading: -</strong> {investor.field1}</h3>
                    <div className='investor-description'>
                        <strong>Discription:</strong> <div dangerouslySetInnerHTML={{ __html: investor.field2 }} />
                    </div>
                    <div className='investor-description'>
                        <h3>Second Section</h3>
                        <p><strong>Heading:</strong> {investor.field3}</p>
                        <div className='card-investor'>
                            <p><strong>Card Heading 1:</strong> {investor.field4}</p>
                            <div><strong>Card Discription 1:</strong> <div dangerouslySetInnerHTML={{ __html: investor.field5 }} /></div>
                        </div>
                        <div className='card-investor'>
                            <p><strong>Card Heading 2:</strong> {investor.field6}</p>
                            <div><strong>Card Discription 2:</strong> <div dangerouslySetInnerHTML={{ __html: investor.field7 }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorPageManagement;
