import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const PrivacyPolicyManagement = ({ PrivacyPolicy }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [title, setTitle] = useState(''); // For managing the title
    const [policyDescription, setPolicyDescription] = useState(''); // For managing the description
    const [policyId, setPolicyId] = useState(null); // Store the policy ID

    useEffect(() => {
        // Fetch privacy policy data
        const fetchPrivacyPolicy = async () => {
            try {
                const api = EXPORT_ALL_APIS();
                const result = await api.fetchPrivacyPolicyPage();
                // Assuming the API returns data in a format like { data: [...] }
                if (result?.data) {
                    const policy = result.data[0];
                    setTitle(policy.title);
                    setPolicyDescription(policy.description);
                    setPolicyId(policy.id); // Set the ID when data is available
                }
            } catch (error) {
                console.error('Error fetching privacy policy:', error);
            }
        };

        fetchPrivacyPolicy(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs once on component mount



    // Handle Edit Button Click
    const handleEdit = (id) => {
        setIsEditing(true);
        setIsCreating(false); // Ensure creating mode is off
        setPolicyId(id); // Set the ID of the policy being edited
    };

    // Handle Create Button Click
    const handleCreate = () => {
        setIsCreating(true);
        setIsEditing(false); // Ensure editing mode is off
        setTitle(''); // Clear title for new entry
        setPolicyDescription(''); // Clear description for new entry
        setPolicyId(null); // Clear the ID for new entry
    };

    // Handle Delete Button Click
    const handleDelete = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        
        try {
            await api.deletePrivacyPolicy(token, policyId); // Pass the ID of the policy
            // Reset state after deletion
            setTitle('');
            setPolicyDescription('');
            setPolicyId(null);
        } catch (error) {
            console.error('Failed to delete privacy policy:', error);
        }
    };

    // Handle Submit (Create or Update)
    const handleSubmit = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        const data = {
            title,
            description: policyDescription
        };

        try {
            if (isEditing && policyId) {
                await api.updatePrivacyPolicy(token, data, policyId); // Use policyId for update
               
            } else if (isCreating) {
                await api.createPrivacyPolicy(token, data);
               
            }
            // Reset form after submission
            setIsEditing(false);
            setIsCreating(false);
        } catch (error) {
            console.error('Failed to create/update privacy policy:', error);
        }
    };

    return (
        <div className='admin-content-homepage'>
            <h2>Privacy Policy Management</h2>
            {title ? (
                <div style={{ marginBottom: '20px' }}>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: policyDescription }} />

                    <div className='edit-delet-btn'>
                        <button onClick={() => handleEdit(policyId)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>No privacy policy available. <button onClick={handleCreate}>Add New Policy</button></p>
            )}

            {(isEditing || isCreating) && (
                <div>
                    <h3>{isEditing ? 'Edit Policy Description' : 'Create New Policy Description'}</h3>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ReactQuill
                        theme="snow"
                        value={policyDescription}
                        onChange={setPolicyDescription}
                    />
                    <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Create'}</button>
                </div>
            )}
        </div>
    );
};

export default PrivacyPolicyManagement;
