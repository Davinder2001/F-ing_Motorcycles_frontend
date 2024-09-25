'use client';

import { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Dynamically import Quill for client-side rendering
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS

let api = EXPORT_ALL_APIS();

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({
        name: '',
        shortDescription: '',
        longDescription: '', // This will use Quill editor
    });
    const [editCategoryData, setEditCategoryData] = useState({
        id: '',
        name: '',
        shortDescription: '',
        longDescription: '', // This will use Quill editor
    });

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const fetchedCategories = await api.fetchCategories();
                setCategories(fetchedCategories || []);
            } catch (error) {
                console.error('Error loading categories:', error.message);
            }
        };
    
        loadCategories();
    }, []);
    

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        const formData = {
            name: newCategory.name,
            short_description: newCategory.shortDescription,
            long_description: newCategory.longDescription,
        };
    
        try {
            await api.createCategory(token, formData);
            const updatedCategories = await api.fetchCategories();
            setCategories(updatedCategories || []);
            setNewCategory({ name: '', shortDescription: '', longDescription: '' });
            setShowAddForm(false);
        } catch (error) {
            console.error('Failed to create category:', error.message);
        }
    };

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        const formData = {
            name: editCategoryData.name,
            short_description: editCategoryData.shortDescription,
            long_description: editCategoryData.longDescription,
        };
    
        try {
            await api.updateCategory(token, editCategoryData.id, formData);
            const updatedCategories = await api.fetchCategories();
            setCategories(updatedCategories || []);
            setEditCategoryData({
                id: '',
                name: '',
                shortDescription: '',
                longDescription: '',
            });
            setEditCategory(null);
        } catch (error) {
            console.error('Failed to update category:', error.message);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        const token = localStorage.getItem('token');
        try {
            await api.deleteCategory(token, categoryId);
            const updatedCategories = await api.fetchCategories();
            setCategories(updatedCategories || []);
        } catch (error) {
            console.error('Failed to delete category:', error.message);
        }
    };

    return (
        <div className='category-managment'>
            <h2>Category Management</h2>

            <button onClick={() => setShowAddForm(true)}>Add New Category</button>

            {/* Add Category Form */}
            {showAddForm && !editCategory && (
                <div>
                    <h3>Add New Category</h3>
                    <form onSubmit={handleCreateCategory}>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={newCategory.name}
                            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Short Description"
                            value={newCategory.shortDescription}
                            onChange={(e) => setNewCategory({ ...newCategory, shortDescription: e.target.value })}
                            required
                        />
                        <ReactQuill
                            value={newCategory.longDescription}
                            onChange={(value) => setNewCategory({ ...newCategory, longDescription: value })}
                            placeholder="Long Description"
                        />
                        <button type="submit">Create Category</button>
                        <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                    </form>
                </div>
            )}

            {/* Edit Category Form */}
            {editCategory && (
                <div>
                    <h3>Edit Category</h3>
                    <form onSubmit={handleUpdateCategory}>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={editCategoryData.name}
                            onChange={(e) => setEditCategoryData({ ...editCategoryData, name: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Short Description"
                            value={editCategoryData.shortDescription}
                            onChange={(e) => setEditCategoryData({ ...editCategoryData, shortDescription: e.target.value })}
                            required
                        />
                        <ReactQuill
                            value={editCategoryData.longDescription}
                            onChange={(value) => setEditCategoryData({ ...editCategoryData, longDescription: value })}
                            placeholder="Long Description"
                        />
                        <button type="submit">Update Category</button>
                        <button type="button" onClick={() => setEditCategory(null)}>Cancel</button>
                    </form>
                </div>
            )}

            {/* Categories Table */}
            {categories.length > 0 ? (
                <table className='category-table' border="0.5px solid #e5e5e5" cellPadding="10" cellSpacing="0" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Short Description</th>
                            <th>Long Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.short_description}</td>
                                <td>
                                    <div dangerouslySetInnerHTML={{ __html: category.long_description }} />
                                </td>
                                <td> 
                                    <button className="edit-delet-table" onClick={() => {
                                        setEditCategory(category);
                                        setEditCategoryData({
                                            id: category.id,
                                            name: category.name,
                                            shortDescription: category.short_description,
                                            longDescription: category.long_description,
                                        });
                                    }}>
                                        Edit
                                    </button>
                                    <button className="edit-delet-table" onClick={() => handleDeleteCategory(category.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No categories available</p>
            )}
        </div>
    );
};

export default CategoryManagement;
