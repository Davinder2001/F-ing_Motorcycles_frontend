import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/api/products`);
    console.log('Get products', response)
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data.data;
    } catch (error) {
        throw new Error('Failed to fetch products.');
    }
};

export const createProduct = async (token, product) => {
    try {
        await axios.post(`${API_URL}/api/products`, product, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        throw new Error('Failed to create product.');
    }
};

export const updateProduct = async (token, productId, product) => {
    try {
        await axios.put(`${API_URL}/api/products/${productId}`, product, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        throw new Error('Failed to update product.');
    }
};

export const deleteProduct = async (token, productId) => {
    try {
        await axios.delete(`${API_URL}/api/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        throw new Error('Failed to delete product.');
    }
};
