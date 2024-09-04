import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const api = EXPORT_ALL_APIS();

const HomePageManagement = () => {
    // State for content form
    const [newContent, setNewContent] = useState({
        heading: '',
        headingNxt: '',
        description: '',
        subHeading2: '',
        heading2: '',
        description2: '',
        button1: '',
        button2: '',
        image: null,
        image2: null,
    });

    // State for current content
    const [content, setContent] = useState({});
    
    // State for showing forms
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    // Fetch content on component mount
    useEffect(() => {
        const fetchContent = async () => {
            const token = localStorage.getItem('token');
            try {
                const data = await api.fetchContent(token);
                setContent(data || {});
            } catch (error) {
                console.error('Failed to fetch content:', error.message);
            }
        };

        fetchContent();
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setNewContent((prevContent) => ({
            ...prevContent,
            [name]: files ? files[0] : value
        }));
    };

    // Handle create content
    const handleCreateContent = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        for (const key in newContent) {
            if (newContent[key]) {
                formData.append(key, newContent[key]);
            }
        }

        try {
            await api.createContent(token, newContent);
            const updatedContent = await api.fetchContent(token);
            setContent(updatedContent || {});
            setNewContent({
                heading: '',
                headingNxt: '',
                description: '',
                subHeading2: '',
                heading2: '',
                description2: '',
                button1: '',
                button2: '',
                image: null,
                image2: null,
            });
            setShowAddForm(false);
        } catch (error) {
            console.error('Failed to create content:', error.message);
        }
    };

    // Handle update content
    const handleUpdateContent = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        for (const key in content) {
            if (content[key]) {
                formData.append(key, content[key]);
            }
        }

        try {
            await api.updateContent(token, content);
            const updatedContent = await api.fetchContent(token);
            setContent(updatedContent || {});
            setShowEditForm(false);
        } catch (error) {
            console.error('Failed to update content:', error.message);
        }
    };

    // Handle delete content
    const handleDeleteContent = async () => {
        const token = localStorage.getItem('token');

        try {
            await api.deleteContent(token);
            setContent({});
        } catch (error) {
            console.error('Failed to delete content:', error.message);
        }
    };

    return (
        <div>
            <h1>Home Page Management</h1>

            {showAddForm && (
                <form onSubmit={handleCreateContent}>
                    <h2>Create Content</h2>
                    <input
                        type="text"
                        name="heading"
                        value={newContent.heading}
                        onChange={handleChange}
                        placeholder="Heading"
                    />
                    <input
                        type="text"
                        name="headingNxt"
                        value={newContent.headingNxt}
                        onChange={handleChange}
                        placeholder="Next Heading"
                    />
                    <textarea
                        name="description"
                        value={newContent.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="subHeading2"
                        value={newContent.subHeading2}
                        onChange={handleChange}
                        placeholder="Sub Heading 2"
                    />
                    <input
                        type="text"
                        name="heading2"
                        value={newContent.heading2}
                        onChange={handleChange}
                        placeholder="Heading 2"
                    />
                    <textarea
                        name="description2"
                        value={newContent.description2}
                        onChange={handleChange}
                        placeholder="Description 2"
                    />
                    <input
                        type="text"
                        name="button2"
                        value={newContent.button2}
                        onChange={handleChange}
                        placeholder="Button 2"
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image2"
                        onChange={handleChange}
                    />
                    <button type="submit">Create Content</button>
                </form>
            )}

            {showEditForm && (
                <form onSubmit={handleUpdateContent}>
                    <h2>Edit Content</h2>
                    <input
                        type="text"
                        name="heading"
                        value={content.heading || ''}
                        onChange={(e) => setContent({ ...content, heading: e.target.value })}
                        placeholder="Heading"
                    />
                    <input
                        type="text"
                        name="headingNxt"
                        value={content.heading_nxt || ''}
                        onChange={(e) => setContent({ ...content, heading_nxt: e.target.value })}
                        placeholder="Next Heading"
                    />
                    <textarea
                        name="description"
                        value={content.description || ''}
                        onChange={(e) => setContent({ ...content, description: e.target.value })}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="subHeading2"
                        value={content.Sub_heading_2 || ''}
                        onChange={(e) => setContent({ ...content, Sub_heading_2: e.target.value })}
                        placeholder="Sub Heading 2"
                    />
                    <input
                        type="text"
                        name="heading2"
                        value={content.heading_2 || ''}
                        onChange={(e) => setContent({ ...content, heading_2: e.target.value })}
                        placeholder="Heading 2"
                    />
                    <textarea
                        name="description2"
                        value={content.description_2 || ''}
                        onChange={(e) => setContent({ ...content, description_2: e.target.value })}
                        placeholder="Description 2"
                    />
                    <input
                        type="text"
                        name="button2"
                        value={content.button_2 || ''}
                        onChange={(e) => setContent({ ...content, button_2: e.target.value })}
                        placeholder="Button 2"
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setContent({ ...content, image: e.target.files[0] })}
                    />
                    <input
                        type="file"
                        name="image2"
                        onChange={(e) => setContent({ ...content, image2: e.target.files[0] })}
                    />
                    <button type="submit">Update Content</button>
                </form>
            )}

            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : 'Add Content'}
            </button>

            <button onClick={() => setShowEditForm(!showEditForm)}>
                {showEditForm ? 'Cancel Edit' : 'Edit Content'}
            </button>

            <button onClick={handleDeleteContent}>
                Delete Content
            </button>

            {/* Render current content for display */}
            <div>
                <h2>Current Content</h2>
                <p><strong>Heading:</strong> {content.heading}</p>
                <p><strong>Next Heading:</strong> {content.heading_nxt}</p>
                <p><strong>Description:</strong> {content.description}</p>
                <p><strong>Sub Heading 2:</strong> {content.Sub_heading_2}</p>
                <p><strong>Heading 2:</strong> {content.heading_2}</p>
                <p><strong>Description 2:</strong> {content.description_2}</p>
                <p><strong>Button 2:</strong> {content.button_2}</p>
                {content.image && <img src={content.image} alt="Content Image" />}
                {content.image_2 && <img src={content.image_2} alt="Content Image 2" />}
            </div>
        </div>
    );
};

export default HomePageManagement;
