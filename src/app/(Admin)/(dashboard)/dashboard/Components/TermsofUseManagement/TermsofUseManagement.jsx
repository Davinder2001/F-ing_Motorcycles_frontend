import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const TermsOfUseManagement = ({ termsOfUse }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [termsId, setTermsId] = useState(null);

  
    useEffect(() => {
        // Fetch terms of use data
        const fetchTermsOfUse = async () => {
            const api = EXPORT_ALL_APIS();
            try {
                const result = await api.fetchTermsOfUsePage();
                // Assuming the API returns data in a format like { data: [...] }
                if (result.data) {
                    const term = result.data[0];
                    setTitle(term.title);
                    setDescription(term.description);
                    setTermsId(term.id); // Set the ID when data is available
                }
            } catch (error) {
                console.error('Error fetching terms of use:', error);
            }
        };

        fetchTermsOfUse(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs once on component mount


    const handleEdit = (id) => {
        setIsEditing(true);
        setIsCreating(false);
        setTermsId(id);
    };

    const handleCreate = () => {
        setIsCreating(true);
        setIsEditing(false);
        setTitle('');
        setDescription('');
        setTermsId(null);
    };

    const handleDelete = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        
        try {
            await api.deleteTermsOfUse(token, termsId);
            alert('Terms of use deleted');
            setTitle('');
            setDescription('');
            setTermsId(null);
        } catch (error) {
            console.error('Failed to delete terms of use:', error);
        }
    };

    const handleSubmit = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        const data = { title, description };

        try {
            if (isEditing && termsId) {
                await api.updateTermsOfUse(token, data, termsId);
            } else if (isCreating) {
                await api.createTermsOfUse(token, data);
            }
            setIsEditing(false);
            setIsCreating(false);
        } catch (error) {
            console.error('Failed to create/update terms of use:', error);
        }
    };

    return (
        <div className='admin-content-homepage'>
            <h2>Terms of Use Management</h2>
            {title ? (
                <div style={{ marginBottom: '20px' }}>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    <div className='edit-delet-btn'>
                        <button onClick={() => handleEdit(termsId)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>No terms of use available. <button onClick={handleCreate}>Add New Terms</button></p>
            )}

            {(isEditing || isCreating) && (
                <div>
                    <h3>{isEditing ? 'Edit Terms of Use' : 'Create New Terms of Use'}</h3>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                    />
                    <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Create'}</button>
                </div>
            )}
        </div>
    );
};

export default TermsOfUseManagement;
