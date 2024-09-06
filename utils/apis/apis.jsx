import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const EXPORT_ALL_APIS = () => {

    /////////////////////// Fetch Apis  ///////////////////////// 


    const loadHeaderImage = async () => {
        let resp = await fetch(`${API_URL}/api/headerlogo`)
        let data = resp.json()
        return data
    }

    const fetchContent = async () => {
        let resp = await fetch(`${API_URL}/api/homedata`)
        let data = resp.json()
        return data
    }


    const fetchCategories = async () => {
        let resp = await fetch(`${API_URL}/api/categories`)
        let data = await resp.json()
        return data
    }
    const fetchInvestor = async () => {
        let resp = await fetch(`${API_URL}/api/investorPage`)
        let data = resp.json()
        return data
    }

    const fetchFooter = async () => {
        let resp = await fetch(`${API_URL}/api/footer`)
        let data = resp.json()
        return data
    }
    const fetchProducts = async () => {
        let resp = await fetch(`${API_URL}/api/footer`)
        let data = resp.json()
        return data
    }  
      const fetchprofile = async () => {
        let resp = await fetch(`${API_URL}/api/profile`)
        let data = await resp.json()
        return data
    }

























    /////////////////////////////////////// Crud Api's //////////////////////////////*html*/

    // Category CRUD 
    const createCategory = async (token, category) => {
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
        } catch (error) {
            throw new Error('Failed to create category.');
        }
    }

    const updateCategory = async (token, categoryId, category) => {
        try {
            // Create query parameters
            const queryParams = new URLSearchParams({
                name: category.name,
                short_description: category.shortDescription,
                long_description: category.longDescription,
            });

            if (category.category_image) {
                queryParams.append('category_image', category.category_image); // Not suitable for files
            }

            // Send PUT request with query parameters appended to URL
            const response = await axios.put(`${API_URL}/api/categories/${categoryId}?${queryParams.toString()}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json', // Incorrect for file uploads
                },
            });

            return response.data;
        } catch (error) {
            console.error('Failed to update category:', error.response?.data || error.message);
            throw new Error('Failed to update category.');
        }
    }

    const deleteCategory = async (token, categoryId) => {
        try {
            await axios.delete(`${API_URL}/api/categories/${categoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            throw new Error('Failed to delete category.');
        }
    }




    // Content for Home Page

    const createContent = async (token, content) => {
        try {
            const formData = new FormData();
            formData.append('heading', content.heading);
            formData.append('heading_nxt', content.headingNxt);
            formData.append('description', content.description);
            formData.append('Sub_heading_2', content.subHeading2);
            formData.append('heading_2', content.heading2);
            formData.append('description_2', content.description2);
            formData.append('button_1', content.button2);
            formData.append('button_2', content.button2);

            if (content.image) {
                formData.append('image', content.image);
            }

            if (content.image2) {
                formData.append('image_2', content.image2);
            }

            await axios.post(`${API_URL}/api/homedata`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            throw new Error('Failed to create content.');
        }
    }

    const updateContent = async (token, content) => {
        try {
            const formData = new FormData();
            formData.append('heading', content.heading);
            formData.append('heading_nxt', content.headingNxt);
            formData.append('description', content.description);
            formData.append('Sub_heading_2', content.subHeading2);
            formData.append('heading_2', content.heading2);
            formData.append('description_2', content.description2);
            formData.append('button_1', content.button2);
            formData.append('button_2', content.button2);

            if (content.image) {
                formData.append('image', content.image);
            }

            if (content.image2) {
                formData.append('image_2', content.image2);
            }

            await axios.put(`${API_URL}/api/homedata`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            throw new Error('Failed to update content.');
        }
    }

    const deleteContent = async (token) => {
        try {
            await axios.delete(`${API_URL}/api/homedata`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            throw new Error('Failed to delete content.');
        }
    }




    // Investor Content CRUD

    const createInvestorContent = async (token, content) => {
        try {
            const formData = new FormData();
            formData.append('field1', content.field1);
            formData.append('field2', content.field2);
            formData.append('field3', content.field3);
            formData.append('field4', content.field4);
            formData.append('field5', content.field5);
            formData.append('field6', content.field6);
            formData.append('field7', content.field7);
            formData.append('field8', content.field8);
            formData.append('field9', content.field9);

            if (content.image) {
                formData.append('image', content.image);
            }

            if (content.image2) {
                formData.append('image_2', content.image2);
            }

            await axios.post(`${API_URL}/api/investorPage`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            throw new Error('Failed to create investor content.');
        }
    }

    const updateInvestorContent = async (token, content) => {
        try {
            const formData = new FormData();
            formData.append('field1', content.field1);
            formData.append('field2', content.field2);
            formData.append('field3', content.field3);
            formData.append('field4', content.field4);
            formData.append('field5', content.field5);
            formData.append('field6', content.field6);
            formData.append('field7', content.field7);
            formData.append('field8', content.field8);
            formData.append('field9', content.field9);

            if (content.image) {
                formData.append('image', content.image);
            }

            if (content.image2) {
                formData.append('image_2', content.image2);
            }

            await axios.put(`${API_URL}/api/investorPage`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            throw new Error('Failed to update investor content.');
        }
    }

    const deleteInvestorContent = async (token) => {
        try {
            await axios.delete(`${API_URL}/api/investorPage`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            throw new Error('Failed to delete investor content.');
        }
    }

    // Header API
    const uploadHeaderImage = async (image) => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post(`${API_URL}/api/headerlogo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;
        } catch (error) {
            console.error("Error uploading header image:", error);
            return null;
        }
    }

    // Delete the header image
    const deleteHeaderImage = async () => {
        try {
            const response = await axios.delete(`${API_URL}/api/headerlogo`);
            return response.data;
        } catch (error) {
            console.error("Error deleting header image:", error);
            return null;
        }
    }


    // Footer CRUD Api

    const createFooter = async (footerData) => {
        try {
            const response = await axios.post(`${API_URL}/api/footer`, footerData);
            return response.data;
        } catch (error) {
            console.error('Failed to create footer:', error.response?.data || error.message);
            throw new Error('Failed to create footer.');
        }
    };
    
    // Update an existing footer
     const updateFooter = async (id, footerData) => {
        try {
            const response = await axios.put(`${API_URL}/api/footer/${id}`, footerData);
            return response.data;
        } catch (error) {
            console.error(`Failed to update footer with ID ${id}:`, error.response?.data || error.message);
            throw new Error('Failed to update footer.');
        }
    };
    
    // Delete a footer
     const deleteFooter = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/api/footer/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Failed to delete footer with ID ${id}:`, error.response?.data || error.message);
            throw new Error('Failed to delete footer.');
        }
    };











    return {
        // Fetch Apis in order
        loadHeaderImage,
        fetchContent,
        fetchCategories,
        fetchInvestor,
        fetchFooter,
        fetchProducts,
        fetchprofile,

        // CRUD Apis in order
        createCategory,
        updateCategory,
        deleteCategory,
        createContent,
        updateContent,
        deleteContent,
        createInvestorContent,
        updateInvestorContent,
        deleteInvestorContent,
        uploadHeaderImage,
        deleteHeaderImage,
        createFooter,
        updateFooter,
        deleteFooter

    }
}
