import axios from 'axios';

// Get base URLs from environment variables
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const imgBaseUrl = process.env.NEXT_PUBLIC_IMG_URL;

// Get the header image
export const getHeaderImage = async () => {
    try {
        const response = await axios.get(`${baseUrl}/headerlogo`);
        return response.data;
    } catch (error) {
        console.error("Error fetching header image:", error);
        return null;
    }
};

// Upload a new header image
export const uploadHeaderImage = async (image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post(`${baseUrl}/headerlogo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading header image:", error);
        return null;
    }
};

// Update the header image
export const updateHeaderImage = async (image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.put(`${baseUrl}/headerlogo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating header image:", error);
        return null;
    }
};

// Delete the header image
export const deleteHeaderImage = async () => {
    try {
        const response = await axios.delete(`${baseUrl}/headerlogo`);
        return response.data;
    } catch (error) {
        console.error("Error deleting header image:", error);
        return null;
    }
};

        
        

