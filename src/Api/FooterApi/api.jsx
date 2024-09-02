import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;








// Fetch all footers
export const fetchFooters = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/footer`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch footers:', error.response?.data || error.message);
        throw new Error('Failed to fetch footers.');
    }
};

// Fetch a single footer by ID
export const fetchFooterById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/footer/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch footer with ID ${id}:`, error.response?.data || error.message);
        throw new Error('Failed to fetch footer.');
    }
};

// Create a new footer
export const createFooter = async (footerData) => {
    try {
        const response = await axios.post(`${API_URL}/api/footer`, footerData);
        return response.data;
    } catch (error) {
        console.error('Failed to create footer:', error.response?.data || error.message);
        throw new Error('Failed to create footer.');
    }
};

// Update an existing footer
export const updateFooter = async (id, footerData) => {
    try {
        const response = await axios.put(`${API_URL}/api/footer/${id}`, footerData);
        return response.data;
    } catch (error) {
        console.error(`Failed to update footer with ID ${id}:`, error.response?.data || error.message);
        throw new Error('Failed to update footer.');
    }
};

// Delete a footer
export const deleteFooter = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/footer/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete footer with ID ${id}:`, error.response?.data || error.message);
        throw new Error('Failed to delete footer.');
    }
};
