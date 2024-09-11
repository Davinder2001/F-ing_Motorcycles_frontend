'use client'
import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';

const api = EXPORT_ALL_APIS();

const OtherSection = () => {
    // State for content form
    const [newContent, setNewContent] = useState({
        heading: '',
        heading_nxt: '',
        description: '',
        heading_2: '',
        Sub_heading_2: '',
        description_2: '',
        s_description_1: '',
        s_description_2: '',
        s_description_3: '',
        third_sec_heading: '',
        image_1_sec_3: null,
        image_2_sec_3: null,
        image_3_sec_3: null,
        image_4_sec_3: null,
        image_5_sec_3: null,
        disc_1_sec_3: '',
        disc_2_sec_3: '',
        disc_3_sec_3: '',
        disc_4_sec_3: '',
        disc_5_sec_3: '',
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
            if (newContent[key] !== null && newContent[key] !== '') {
                formData.append(key, newContent[key]);
            }
        }

        try {
            await api.createContent(token, newContent);
            const updatedContent = await api.fetchContent(token);
            setContent(updatedContent || {});
            setNewContent({
                heading: '',
                heading_nxt: '',
                description: '',
                heading_2: '',
                Sub_heading_2: '',
                description_2: '',
                s_description_1: '',
                s_description_2: '',
                s_description_3: '',
                third_sec_heading: '',
                image_1_sec_3: null,
                image_2_sec_3: null,
                image_3_sec_3: null,
                image_4_sec_3: null,
                image_5_sec_3: null,
                disc_1_sec_3: '',
                disc_2_sec_3: '',
                disc_3_sec_3: '',
                disc_4_sec_3: '',
                disc_5_sec_3: '',
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
            if (content[key] !== null && content[key] !== '') {
                formData.append(key, content[key]);
            }
        }
        
        try {
            await api.updateContent(token, formData);
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
        const getId = await api.fetchContent()
        const id = getId.id
        try {
            await api.deleteContent(token, id);
            setContent({});
        } catch (error) {
            console.error('Failed to delete content:', error.message);
        }
    };

    return (
        <div>
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
                        name="heading_nxt"
                        value={newContent.heading_nxt}
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
                        name="heading_2"
                        value={newContent.heading_2}
                        onChange={handleChange}
                        placeholder="Heading 2"
                    />
                    <input
                        type="text"
                        name="Sub_heading_2"
                        value={newContent.Sub_heading_2}
                        onChange={handleChange}
                        placeholder="Sub Heading 2"
                    />
                    <textarea
                        name="description_2"
                        value={newContent.description_2}
                        onChange={handleChange}
                        placeholder="Description 2"
                    />
                    <input
                        type="text"
                        name="s_description_1"
                        value={newContent.s_description_1}
                        onChange={handleChange}
                        placeholder="Sub Description 1"
                    />
                    <input
                        type="text"
                        name="s_description_2"
                        value={newContent.s_description_2}
                        onChange={handleChange}
                        placeholder="Sub Description 2"
                    />
                    <input
                        type="text"
                        name="s_description_3"
                        value={newContent.s_description_3}
                        onChange={handleChange}
                        placeholder="Sub Description 3"
                    />
                    <input
                        type="text"
                        name="third_sec_heading"
                        value={newContent.third_sec_heading}
                        onChange={handleChange}
                        placeholder="Third Section Heading"
                    />
                    <input
                        type="file"
                        name="image_1_sec_3"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image_2_sec_3"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image_3_sec_3"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image_4_sec_3"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image_5_sec_3"
                        onChange={handleChange}
                    />
                    <textarea
                        name="disc_1_sec_3"
                        value={newContent.disc_1_sec_3}
                        onChange={handleChange}
                        placeholder="Description 1 Section 3"
                    />
                    <textarea
                        name="disc_2_sec_3"
                        value={newContent.disc_2_sec_3}
                        onChange={handleChange}
                        placeholder="Description 2 Section 3"
                    />
                    <textarea
                        name="disc_3_sec_3"
                        value={newContent.disc_3_sec_3}
                        onChange={handleChange}
                        placeholder="Description 3 Section 3"
                    />
                    <textarea
                        name="disc_4_sec_3"
                        value={newContent.disc_4_sec_3}
                        onChange={handleChange}
                        placeholder="Description 4 Section 3"
                    />
                    <textarea
                        name="disc_5_sec_3"
                        value={newContent.disc_5_sec_3}
                        onChange={handleChange}
                        placeholder="Description 5 Section 3"
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
                        name="heading_nxt"
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
                        name="heading_2"
                        value={content.heading_2 || ''}
                        onChange={(e) => setContent({ ...content, heading_2: e.target.value })}
                        placeholder="Heading 2"
                    />
                    <input
                        type="text"
                        name="Sub_heading_2"
                        value={content.Sub_heading_2 || ''}
                        onChange={(e) => setContent({ ...content, Sub_heading_2: e.target.value })}
                        placeholder="Sub Heading 2"
                    />
                    <textarea
                        name="description_2"
                        value={content.description_2 || ''}
                        onChange={(e) => setContent({ ...content, description_2: e.target.value })}
                        placeholder="Description 2"
                    />
                    <input
                        type="text"
                        name="s_description_1"
                        value={content.s_description_1 || ''}
                        onChange={(e) => setContent({ ...content, s_description_1: e.target.value })}
                        placeholder="Sub Description 1"
                    />
                    <input
                        type="text"
                        name="s_description_2"
                        value={content.s_description_2 || ''}
                        onChange={(e) => setContent({ ...content, s_description_2: e.target.value })}
                        placeholder="Sub Description 2"
                    />
                    <input
                        type="text"
                        name="s_description_3"
                        value={content.s_description_3 || ''}
                        onChange={(e) => setContent({ ...content, s_description_3: e.target.value })}
                        placeholder="Sub Description 3"
                    />
                    <input
                        type="text"
                        name="third_sec_heading"
                        value={content.third_sec_heading || ''}
                        onChange={(e) => setContent({ ...content, third_sec_heading: e.target.value })}
                        placeholder="Third Section Heading"
                    />
                    <input
                        type="file"
                        name="image_1_sec_3"
                        onChange={(e) => setContent({ ...content, image_1_sec_3: e.target.files[0] })}
                    />
                    <input
                        type="file"
                        name="image_2_sec_3"
                        onChange={(e) => setContent({ ...content, image_2_sec_3: e.target.files[0] })}
                    />
                    <input
                        type="file"
                        name="image_3_sec_3"
                        onChange={(e) => setContent({ ...content, image_3_sec_3: e.target.files[0] })}
                    />
                    <input
                        type="file"
                        name="image_4_sec_3"
                        onChange={(e) => setContent({ ...content, image_4_sec_3: e.target.files[0] })}
                    />
                    <input
                        type="file"
                        name="image_5_sec_3"
                        onChange={(e) => setContent({ ...content, image_5_sec_3: e.target.files[0] })}
                    />
                    <textarea
                        name="disc_1_sec_3"
                        value={content.disc_1_sec_3 || ''}
                        onChange={(e) => setContent({ ...content, disc_1_sec_3: e.target.value })}
                        placeholder="Description 1 Section 3"
                    />
                    <textarea
                        name="disc_2_sec_3"
                        value={content.disc_2_sec_3 || ''}
                        onChange={(e) => setContent({ ...content, disc_2_sec_3: e.target.value })}
                        placeholder="Description 2 Section 3"
                    />
                    <textarea
                        name="disc_3_sec_3"
                        value={content.disc_3_sec_3 || ''}
                        onChange={(e) => setContent({ ...content, disc_3_sec_3: e.target.value })}
                        placeholder="Description 3 Section 3"
                    />
                    <textarea
                        name="disc_4_sec_3"
                        value={content.disc_4_sec_3 || ''}
                        onChange={(e) => setContent({ ...content, disc_4_sec_3: e.target.value })}
                        placeholder="Description 4 Section 3"
                    />
                    <textarea
                        name="disc_5_sec_3"
                        value={content.disc_5_sec_3 || ''}
                        onChange={(e) => setContent({ ...content, disc_5_sec_3: e.target.value })}
                        placeholder="Description 5 Section 3"
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
                <p><strong>Heading 2:</strong> {content.heading_2}</p>
                <p><strong>Sub Heading 2:</strong> {content.Sub_heading_2}</p>
                <p><strong>Description 2:</strong> {content.description_2}</p>
                <p><strong>Sub Description 1:</strong> {content.s_description_1}</p>
                <p><strong>Sub Description 2:</strong> {content.s_description_2}</p>
                <p><strong>Sub Description 3:</strong> {content.s_description_3}</p>
                <p><strong>Third Section Heading:</strong> {content.third_sec_heading}</p>
                {content.image_1_sec_3 && <img src={content.image_1_sec_3} alt="Image 1" />}
                {content.image_2_sec_3 && <img src={content.image_2_sec_3} alt="Image 2" />}
                {content.image_3_sec_3 && <img src={content.image_3_sec_3} alt="Image 3" />}
                {content.image_4_sec_3 && <img src={content.image_4_sec_3} alt="Image 4" />}
                {content.image_5_sec_3 && <img src={content.image_5_sec_3} alt="Image 5" />}
                <p><strong>Description 1 Section 3:</strong> {content.disc_1_sec_3}</p>
                <p><strong>Description 2 Section 3:</strong> {content.disc_2_sec_3}</p>
                <p><strong>Description 3 Section 3:</strong> {content.disc_3_sec_3}</p>
                <p><strong>Description 4 Section 3:</strong> {content.disc_4_sec_3}</p>
                <p><strong>Description 5 Section 3:</strong> {content.disc_5_sec_3}</p>
            </div>
        </div>
    );
};

export default OtherSection;
