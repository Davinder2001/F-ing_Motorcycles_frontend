import React, { useState, useEffect } from 'react'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const FounderManagement = ({ founders }) => {
    const [foundersList, setFoundersList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [founderId, setFounderId] = useState(null);
    

    useEffect(() => {
        fetchFounders();  // Fetch founders when the component mounts
    }, []);

    const fetchFounders = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        
        try {
            const response = await api.fetchFounders(token);  // Fetch founders from API
            if (response && response.data) {
                setFoundersList(response.data);
            }
        } catch (error) {
            console.error('Failed to fetch founders:', error);
        }
    };

    const handleEdit = (id) => {
        const founder = foundersList.find((f) => f.id === id);
        setName(founder.name);
        setDescription(founder.description);
        setImage(null); // Reset the image, assume a new one may be uploaded.
        setFounderId(founder.id);
        setIsEditing(true);
        setIsCreating(false);
    };

    const handleCreate = () => {
        setIsCreating(true);
        setIsEditing(false);
        setName('');
        setDescription('');
        setImage(null);
        setFounderId(null);
    };

    const handleDelete = async (id) => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        
        try {
            await api.deleteFounder(token, id);
            setFoundersList(foundersList.filter((founder) => founder.id !== id));
            console.log('Founder deleted');
        } catch (error) {
            console.error('Failed to delete founder:', error);
        }
    };

    const handleSubmit = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
   
        // If editing, include the founderId in the data object
        const data = { name, description, image };
        if (isEditing && founderId) {
            data.id = founderId; // Add id to data when editing
        }
    
          
        try {
            if (isEditing && founderId) {
                // Update the founder
                await api.updateFounder(token, data, founderId);
                setFoundersList(foundersList.map(f => f.id === founderId ? { ...f, name, description } : f));
            } else if (isCreating) {
                // Create new founder
                const newFounder = await api.createFounder(token, data);
                setFoundersList([...foundersList, newFounder]);
            }
            setIsEditing(false);
            setIsCreating(false);
        } catch (error) {
            console.error('Failed to create/update founder:', error);
        }
    };
    

    return (
        <div>
            <h2>Founder Management</h2>
            <div className='admin-founder-section'> 
                {foundersList.length > 0 ? (
                    foundersList.map((founder) => (
                        <div className="admin-founder-card" key={founder.id} >
                            <h3>{founder.name}</h3>
                            <div dangerouslySetInnerHTML={{ __html: founder.description }} />
                            {founder.image && <img src={founder.image} alt={founder.name} style={{ width: '150px', height: 'auto' }} />}
                            <div className='button-founder'> 
                                <button onClick={() => handleEdit(founder.id)}>Edit</button>
                                <button onClick={() => handleDelete(founder.id)}>Delete</button>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p>No founders available. <button onClick={handleCreate}>Add New Founder</button></p>
                )}
            </div>
            <button onClick={handleCreate}>Add New Founder</button>

            {(isEditing || isCreating) && (
                <div>
                    <h3>{isEditing ? 'Edit Founder' : 'Create New Founder'}</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Create'}</button>
                </div>
            )}
        </div>
    );
};

export default FounderManagement;
