'use client';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor
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
        image: null,
        image_2: null,
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
        seo_title: '',
        seo_description: '',
        seo_host_url: ''
    });

    // State for current content
    const [content, setContent] = useState({
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
        image: '',
        image_2: '',
        image_1_sec_3: '',
        image_2_sec_3: '',
        image_3_sec_3: '',
        image_4_sec_3: '',
        image_5_sec_3: '',
        disc_1_sec_3: '',
        disc_2_sec_3: '',
        disc_3_sec_3: '',
        disc_4_sec_3: '',
        disc_5_sec_3: '',
        seo_title: '',
        seo_description: '',
        seo_host_url: ''
    });
    
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
    const handleQuillChange = (name) => (value) => {
        setNewContent((prevContent) => ({
            ...prevContent,
            [name]: value
        }));
    };
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setNewContent((prevContent) => ({
            ...prevContent,
            [name]: files ? files[0] : value
        }));
    };
    
    const handleUpdate = (e) => {
        const { name, value, files } = e.target;
        setContent((prevContent) => ({
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
                image: null,
                image_2: null,
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
                seo_title: '',
                seo_description: '',
                seo_host_url: ''
            });
            setShowAddForm(false);
        } catch (error) {
            console.error('Failed to create content:', error.message);
        }
    };

    const handleUpdateContent = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        const formData = new FormData();
        // Append existing content fields to formData
        for (const key in content) {
            if (content[key] !== null && content[key] !== '' && !key.startsWith('image')) {
                formData.append(key, content[key]);
            }
        }
    
        try {
            if (!content.id) {
                throw new Error('Content ID is missing.');
            }
            await api.updateContent(token, content.id, content);
            const updatedContent = await api.fetchContent(token);
            setContent(updatedContent || {});
            setContent({
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
                image: null,
                image_2: null,
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
                seo_title: '',
                seo_description: '',
                seo_host_url: ''
            });
            setShowEditForm(false);
        } catch (error) {
            console.error('Failed to update content:', error.message);
        }
    };
    

    // Handle delete content
    const handleDeleteContent = async () => {
        const token = localStorage.getItem('token');
        try {
            await api.deleteContent(token, content.id);
            setContent({});
        } catch (error) {
            console.error('Failed to delete content:', error.message);
        }
    };

    return (
        <div>
         {showAddForm && (
     <form onSubmit={handleCreateContent}>
                    <h2>Add New Content</h2>

                    {/* SEO Details Section */}
                    <div className='form-section'>
                        <h3>SEO Details</h3>
                        <input
                            type="text"
                            name="seo_title"
                            value={newContent.seo_title}
                            onChange={handleChange}
                            placeholder="SEO Title"
                        />
                        <textarea
                            name="seo_description"
                            value={newContent.seo_description}
                            onChange={handleChange}
                            placeholder="SEO Description"
                        />
                        <input
                            type="text"
                            name="seo_host_url"
                            value={newContent.seo_host_url}
                            onChange={handleChange}
                            placeholder="SEO Host URL"
                        />
                    </div>

                    {/* Content Details Section */}
                    <div className='form-section'>
                        <h3>Content Details</h3>
                        <input
                            type="text"
                            name="heading"
                            value={newContent.heading}
                            onChange={handleChange}
                            placeholder="Slider Heading"
                        />
                        <input
                            type="text"
                            name="heading_nxt"
                            value={newContent.heading_nxt}
                            onChange={handleChange}
                            placeholder="Typing Heading"
                        />
                        <ReactQuill
                            value={newContent.description}
                            onChange={handleQuillChange('description')}
                            placeholder="Slider Description"
                        />
                    </div>

                    {/* Third Section */}
                    <div className='form-section'>
                        <h3>Third Section</h3>
                        <input
                            type="text"
                            name="heading_2"
                            value={newContent.heading_2}
                            onChange={handleChange}
                            placeholder="Heading 2"
                        />
                        <ReactQuill
                            value={newContent.description_2}
                            onChange={handleQuillChange('description_2')}
                            placeholder="Main Description"
                        />
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                        />
                        <input
                            type="file"
                            name="image_2"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Fourth Section */}
                    <div className='form-section'>
                        <h3>Fourth Section</h3>
                        <input
                            type="file"
                            name="image_1_sec_3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="disc_1_sec_3"
                            value={newContent.disc_1_sec_3}
                            onChange={handleChange}
                            placeholder="Description 1"
                        />
                        <input
                            type="file"
                            name="image_2_sec_3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="disc_2_sec_3"
                            value={newContent.disc_2_sec_3}
                            onChange={handleChange}
                            placeholder="Description 2"
                        />
                        <input
                            type="file"
                            name="image_3_sec_3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="disc_3_sec_3"
                            value={newContent.disc_3_sec_3}
                            onChange={handleChange}
                            placeholder="Description 3"
                        />
                        <input
                            type="file"
                            name="image_4_sec_3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="disc_4_sec_3"
                            value={newContent.disc_4_sec_3}
                            onChange={handleChange}
                            placeholder="Description 4"
                        />
                        <input
                            type="file"
                            name="image_5_sec_3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="disc_5_sec_3"
                            value={newContent.disc_5_sec_3}
                            onChange={handleChange}
                            placeholder="Description 5"
                        />
                    </div>

                    {/* Investor Section */}
                    <div className='form-section d-none'>
                        <h3>Investor Section</h3>
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
                            name="third_sec_heading"
                            value={newContent.third_sec_heading}
                            onChange={handleChange}
                            placeholder="Third Section Heading"
                        />
                        <input
                            type="text"
                            name="s_description_3"
                            value={newContent.s_description_3}
                            onChange={handleChange}
                            placeholder="Sub Description 3"
                        />
                    </div>

                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                </form>
)}


{showEditForm && (
    <form onSubmit={handleUpdateContent}>
        <h2>Edit Content</h2>

        {/* SEO Details Section */}
        <div className='form-section'>
            <h3>SEO Details</h3>
            <input
                type="text"
                name="seo_title"
                value={content.seo_title || ''}
                onChange={handleUpdate}
                placeholder="SEO Title"
            />
            <textarea
                name="seo_description"
                value={content.seo_description || ''}
                onChange={handleUpdate}
                placeholder="SEO Description"
            />
            <input
                type="text"
                name="seo_host_url"
                value={content.seo_host_url || ''}
                onChange={handleUpdate}
                placeholder="SEO Host URL"
            />
        </div>

        {/* Content Details Section */}
        <div className='form-section'>
            <h3>Content Details</h3>
            <input
                type="text"
                name="heading"
                value={content.heading || ''}
                onChange={handleUpdate}
                placeholder="Slider Heading"
            />
            <input
                type="text"
                name="heading_nxt"
                value={content.heading_nxt || ''}
                onChange={handleUpdate}
                placeholder="Typing Heading"
            />
            <ReactQuill
                name="description"
                value={content.description || ''}
                onChange={(value) => setContent((prevContent) => ({
                    ...prevContent,
                    description: value
                }))}
                placeholder="Slider Description"
            />
        </div>

        {/* Third Section */}
        <div className='form-section'>
            <h3>Third Section</h3>
            <input
                type="text"
                name="heading_2"
                value={content.heading_2 || ''}
                onChange={handleUpdate}
                placeholder="Heading 2"
            />
            <ReactQuill
                name="description_2"
                value={content.description_2 || ''}
                onChange={(value) => setContent((prevContent) => ({
                    ...prevContent,
                    description_2: value
                }))}
                placeholder="Main Description"
            />
            <input
                type="file"
                name="image"
                onChange={handleUpdate}
            />
              {content.image && <img src={content.image} alt="Content Image" />}
                      
            <input
                type="file"
                name="image_2"
                onChange={handleUpdate}
            />
              {content.image_2 && <img src={content.image_2} alt="Content Image 2" />}
        </div>

        {/* Fourth Section */}
        <div className='form-section'>
            <h3>Fourth Section</h3>
            <input
                type="file"
                name="image_1_sec_3"
                onChange={handleUpdate}
            />
             {content.image_1_sec_3 && <img src={content.image_1_sec_3} alt="Image 1 Sec 3" />}
            <textarea
                name="disc_1_sec_3"
                value={content.disc_1_sec_3 || ''}
                onChange={handleUpdate}
                placeholder="Description 1"
            />
            <input
                type="file"
                name="image_2_sec_3"
                onChange={handleUpdate}
            />
             {content.image_2_sec_3 && <img src={content.image_3_sec_3} alt="Image 1 Sec 3" />}
            <textarea
                name="disc_2_sec_3"
                value={content.disc_2_sec_3 || ''}
                onChange={handleUpdate}
                placeholder="Description 2"
            />
            <input
                type="file"
                name="image_3_sec_3"
                onChange={handleUpdate}
            />
             {content.image_3_sec_3 && <img src={content.image_3_sec_3} alt="Image 1 Sec 3" />}
            <textarea
                name="disc_3_sec_3"
                value={content.disc_3_sec_3 || ''}
                onChange={handleUpdate}
                placeholder="Description 3"
            />
            <input
                type="file"
                name="image_4_sec_3"
                onChange={handleUpdate}
            />
             {content.image_4_sec_3 && <img src={content.image_4_sec_3} alt="Image 1 Sec 3" />}
            <textarea
                name="disc_4_sec_3"
                value={content.disc_4_sec_3 || ''}
                onChange={handleUpdate}
                placeholder="Description 4"
            />
            <input
                type="file"
                name="image_5_sec_3"
                onChange={handleUpdate}
            />
             {content.image_5_sec_3 && <img src={content.image_5_sec_3} alt="Image 1 Sec 3" />}
            <textarea
                name="disc_5_sec_3"
                value={content.disc_5_sec_3 || ''}
                onChange={handleUpdate}
                placeholder="Description 5"
            />
        </div>

        {/* Investor Section */}
        <div className='form-section d-none'>
            <h3>Investor Section</h3>
            <input
                type="text"
                name="s_description_1"
                value={content.s_description_1 || ''}
                onChange={handleUpdate}
                placeholder="Sub Description 1"
            />
            <input
                type="text"
                name="s_description_2"
                value={content.s_description_2 || ''}
                onChange={handleUpdate}
                placeholder="Sub Description 2"
            />
            <input
                type="text"
                name="third_sec_heading"
                value={content.third_sec_heading || ''}
                onChange={handleUpdate}
                placeholder="Third Section Heading"
            />
            <input
                type="text"
                name="s_description_3"
                value={content.s_description_3 || ''}
                onChange={handleUpdate}
                placeholder="Sub Description 3"
            />
        </div>

        <button type="submit">Update</button>
        <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>
    </form>
)}



            {!showAddForm && !showEditForm && (
                <div>
                    <div className=''>
                    <h2>SEO Details</h2>
                    <p><strong>SEO Title:</strong> {content.seo_title}</p>
                    <p><strong>SEO Description:</strong> {content.seo_description}</p>
                    <p><strong>SEO Host URL:</strong> {content.seo_host_url}</p>
                    </div>
                    <h2>Content Details</h2>
                    <p><strong>Slider Heading:</strong> {content.heading}</p>
                    <p><strong>Typing Heading:</strong> {content.heading_nxt}</p>
                    <p><strong>Slider Description :</strong> </p>
                     <div
        dangerouslySetInnerHTML={{ __html: content.heading || '' }}
    />
                    <h2>Third Section</h2>
                    <p><strong>Heading:</strong> {content.heading_2}</p>
                    <p><strong>Sub Heading :</strong> {content.Sub_heading_2}</p>
                    <p><strong>Sub Description 1:</strong> {content.s_description_1}</p>
                    <p><strong>Sub Description 2:</strong> {content.s_description_2}</p>
                    <p><strong>Sub Description 3:</strong> {content.s_description_3}</p>
                    <p><strong>Main Description :</strong> </p>
                     <div
        dangerouslySetInnerHTML={{ __html: content.description_2 || '' }}
    />

                    {content.image && <img src={content.image} alt="Content Image" />}
                        {content.image_2 && <img src={content.image_2} alt="Content Image 2" />}

                    <h2>Third Section</h2>
                    <p><strong>Fourth Section Heading:</strong> {content.third_sec_heading}</p>
                    <p>{content.disc_1_sec_3}</p>
                    {content.image_1_sec_3 && <img src={content.image_1_sec_3} alt="Image 1 Sec 3" />}
                    <p>{content.disc_2_sec_3}</p>
                        {content.image_2_sec_3 && <img src={content.image_2_sec_3} alt="Image 2 Sec 3" />}
                        <p>{content.disc_3_sec_3}</p>
                        {content.image_3_sec_3 && <img src={content.image_3_sec_3} alt="Image 3 Sec 3" />}
                        <p>{content.disc_4_sec_3}</p>
                        {content.image_4_sec_3 && <img src={content.image_4_sec_3} alt="Image 4 Sec 3" />}
                        <p>{content.disc_5_sec_3}</p>
                        {content.image_5_sec_3 && <img src={content.image_5_sec_3} alt="Image 5 Sec 3" />}
                    <div>
                        
                        
                        
                    </div>
                    <div>
                                            
                        
                        
                       
                    </div>
                    <button onClick={() => setShowAddForm(true)}>Add Content</button>
                    <button onClick={() => setShowEditForm(true)}>Edit Content</button>
                    <button onClick={handleDeleteContent}>Delete Content</button>
                </div>
            )}
        </div>
    );
};

export default OtherSection;
