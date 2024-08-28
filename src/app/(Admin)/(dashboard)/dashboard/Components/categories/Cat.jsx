'use client';

import { useState, useEffect } from 'react';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '@/Api/CategoryApi/api';

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({
        name: '',
        shortDescription: '',
        longDescription: '',
        // image: null
    });
    const [editCategoryData, setEditCategoryData] = useState({
        id: '',
        name: '',
        shortDescription: '',
        longDescription: '',
        // image: null
    });

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const fetchedCategories = await fetchCategories();
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

        const formData = new FormData();
        formData.append('name', newCategory.name);
        formData.append('short_description', newCategory.shortDescription);
        formData.append('long_description', newCategory.longDescription);
        // if (newCategory.image) {
        //     formData.append('category_image', newCategory.image);
        // }

        try {
            await createCategory(token, newCategory);
            const updatedCategories = await fetchCategories();
            setCategories(updatedCategories || []);
            setNewCategory({ name: '', shortDescription: '', longDescription: '', /* image: null */ });
            setShowAddForm(false);
        } catch (error) {
            console.error('Failed to create category:', error.message);
        }
    };

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        formData.append('name', editCategoryData.name);
        formData.append('short_description', editCategoryData.shortDescription);
        formData.append('long_description', editCategoryData.longDescription);
        // if (editCategoryData.image) {
        //     formData.append('category_image', editCategoryData.image);
        // }

        try {
            await updateCategory(token, editCategoryData.id, editCategoryData);
            const updatedCategories = await fetchCategories();
            setCategories(updatedCategories || []);
            setEditCategory(null);
            setEditCategoryData({
                id: '',
                name: '',
                shortDescription: '',
                longDescription: '',
                // image: null
            });
        } catch (error) {
            console.error('Failed to update category:', error.message);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        const token = localStorage.getItem('token');
        try {
            await deleteCategory(token, categoryId);
            const updatedCategories = await fetchCategories();
            setCategories(updatedCategories || []);
        } catch (error) {
            console.error('Failed to delete category:', error.message);
        }
    };

    return (
        <div>
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
                        <textarea
                            placeholder="Long Description"
                            value={newCategory.longDescription}
                            onChange={(e) => setNewCategory({ ...newCategory, longDescription: e.target.value })}
                            required
                        />
                        {/* <input
                            type="file"
                            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.files[0] })}
                        /> */}
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
                        <textarea
                            placeholder="Long Description"
                            value={editCategoryData.longDescription}
                            onChange={(e) => setEditCategoryData({ ...editCategoryData, longDescription: e.target.value })}
                            required
                        />
                        {/* <input
                            type="file"
                            onChange={(e) => setEditCategoryData({ ...editCategoryData, image: e.target.files[0] })}
                        /> */}
                        <button type="submit">Update Category</button>
                        <button type="button" onClick={() => setEditCategory(null)}>Cancel</button>
                    </form>
                </div>
            )}

            {/* Categories Table */}
            {categories.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Short Description</th>
                            <th>Long Description</th>
                            {/* <th>Image</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.short_description}</td>
                                <td>{category.long_description}</td>
                                {/* <td>
                                    {category.category_image && (
                                        <Image
                                            src={`${BASE_URL}/storage/${category.category_image}`}
                                            alt={category.name}
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </td> */}
                                <td>
                                    <button onClick={() => {
                                        setEditCategory(category);
                                        setEditCategoryData({
                                            id: category.id,
                                            name: category.name,
                                            shortDescription: category.short_description,
                                            longDescription: category.long_description,
                                            // image: null
                                        });
                                    }}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteCategory(category.id)}>
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
