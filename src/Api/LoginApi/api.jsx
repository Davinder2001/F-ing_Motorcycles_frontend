import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    }
};

export const getUserDashboard = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/api/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user dashboard.');
    }
};

export const logoutUser = async (token) => {

    try {
        
        console.log('token recived from api', token)
        const response = await axios.get(`${API_URL}/api/logout`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Logout failed. Please try again.');
    }
};
