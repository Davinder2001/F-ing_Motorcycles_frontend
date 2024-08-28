import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/categories`);
        // console.log('Fetched Categories:', response.data); // Debugging line
        return response.data.data; // Adjust based on actual API response structure
    } catch (error) {
        console.error('Failed to fetch categories:', error.response?.data || error.message);
        throw new Error('Failed to fetch categories.');
    }
};

export const createCategory = async (token, category) => {
    try {
        const formData = new FormData();
        formData.append('name', category.name);
        formData.append('short_description', category.shortDescription);
        formData.append('long_description', category.longDescription);

        if (category.category_image) {
            formData.append('category_image', category.category_image);
        }

        await axios.post(`${API_URL}/api/categories`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Category created successfully'); // Debugging line
    } catch (error) {
        console.error('Failed to create category:', error.response?.data || error.message);
        throw new Error('Failed to create category.');
    }
};

export const updateCategory = async (token, categoryId, category) => {
    try {
        const queryParams = new URLSearchParams({
            name: category.name,
            short_description: category.shortDescription,
            long_description: category.longDescription,
        });

        if (category.category_image) {
            queryParams.append('category_image', category.category_image);
        }

        const response = await axios.put(`${API_URL}/api/categories/${categoryId}?${queryParams.toString()}`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('Category updated successfully'); // Debugging line
        return response.data;
    } catch (error) {
        console.error('Failed to update category:', error.response?.data || error.message);
        throw new Error('Failed to update category.');
    }
};

export const deleteCategory = async (token, categoryId) => {
    try {
        await axios.delete(`${API_URL}/api/categories/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Category deleted successfully'); // Debugging line
    } catch (error) {
        console.error('Failed to delete category:', error.response?.data || error.message);
        throw new Error('Failed to delete category.');
    }
};