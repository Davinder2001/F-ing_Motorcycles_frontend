``
import axios, { formToJSON } from "axios"

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
        
    const fetchContactPage = async () => {
        let resp = await fetch(`${API_URL}/api/ContactPage`)
        let data = await resp.json()
        return data
    }    

    const getUserDashboard = async (token) => {
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
   
    
    const fetchHeroSections = async () => {
        let resp = await fetch(`${API_URL}/api/heroSection`)
        let data = await resp.json()
        return data
    }

  

























    /////////////////////////////////////// Crud Api's //////////////////////////////*html*/


      const createContactPage = async (contactPage) => {
        const response = await fetch(`${API_URL}/api/ContactPage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: contactPage.name,  // Include name
            email: contactPage.email,  // Include email
            number: contactPage.number  // Include number
          }),
        });
      
        const result = await response.json();
        alert('User saved successfully');
      
        return result; // Return the result instead of data (data was undefined)
      };
      
      const updateContactPage = async (contactPage, selectedUserId) => {
        const response = await fetch(`${API_URL}/api/ContactPage/${selectedUserId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: contactPage.name,  // Include name
            email: contactPage.email,  // Include email
            number: contactPage.number  // Include number
          }),
        });
      
        const result = await response.json();
        alert('User updated successfully');
      
        return result;
      };
      
      const deleteContactPage = async (id) => {
        const response = await fetch(`${API_URL}/api/ContactPage/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.ok) {
          alert('Content deleted successfully');
        } else {
          alert('Error deleting content');
        }
      
        return response.ok;
      };






    // Category CRUD 
    const createCategory = async (token, category) => {
        try {
            const response = await fetch(`${API_URL}/api/categories`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Changed to 'application/json'
                },
                body: JSON.stringify({
                    name: category.name,
                    short_description: category.shortDescription,
                    long_description: category.longDescription
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create category.');
            }
    
            const result = await response.json();
            alert('Category created successfully');
    
            return result; // Return the result instead of data (data was undefined)
        } catch (error) {
            console.error(error);
            alert('Failed to create category.');
        }
    };
    
    const updateCategory = async (token, categoryId, category) => {
        try {
            const response = await fetch(`${API_URL}/api/categories/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Set to 'application/json'
                },
                body: JSON.stringify({
                    name: category.name,
                    short_description: category.shortDescription,
                    long_description: category.longDescription,
                    category_image: category.category_image // Include if present
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update category.');
            }
    
            const result = await response.json();
            alert('Category updated successfully');
    
            return result;
        } catch (error) {
            console.error('Failed to update category:', error.message);
            alert('Failed to update category.');
        }
    };
    

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

    const createContent = async (token, newContent) => {
        try {
            const formData = new FormData();
    
            // Append all text data
            formData.append('heading', newContent.heading);
            formData.append('heading_nxt', newContent.heading_nxt);
            formData.append('description', newContent.description);
            formData.append('heading_2', newContent.heading_2);
            formData.append('Sub_heading_2', newContent.Sub_heading_2);
            formData.append('description_2', newContent.description_2);
            formData.append('s_description_1', newContent.s_description_1);
            formData.append('s_description_2', newContent.s_description_2);
            formData.append('s_description_3', newContent.s_description_3);
            formData.append('third_sec_heading', newContent.third_sec_heading);
            formData.append('disc_1_sec_3', newContent.disc_1_sec_3);
            formData.append('disc_2_sec_3', newContent.disc_2_sec_3);
            formData.append('disc_3_sec_3', newContent.disc_3_sec_3);
            formData.append('disc_4_sec_3', newContent.disc_4_sec_3);
            formData.append('disc_5_sec_3', newContent.disc_5_sec_3);
    
            // Append image files (if provided)
            if (newContent.image_1_sec_3) {
                formData.append('image_1_sec_3', newContent.image_1_sec_3);
            }
            if (newContent.image_2_sec_3) {
                formData.append('image_2_sec_3', newContent.image_2_sec_3);
            }
            if (newContent.image_3_sec_3) {
                formData.append('image_3_sec_3', newContent.image_3_sec_3);
            }
            if (newContent.image_4_sec_3) {
                formData.append('image_4_sec_3', newContent.image_4_sec_3);
            }
            if (newContent.image_5_sec_3) {
                formData.append('image_5_sec_3', newContent.image_5_sec_3);
            }
    console.log('DATA', formData)
            const response = await fetch(`${API_URL}/api/homedata`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Note: Do NOT set 'Content-Type' with FormData
                },
                body: formData
            });
    
            if (!response.ok) {
                throw new Error('Failed to create content.');
            }
    
            const result = await response.json();
            alert('Slide updated successfully');
            return result;
    
        } catch (error) {
            console.error('Failed to update slide:', error.message);
            alert('Failed to update slide.');
        }
    };
    
    
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

    const deleteContent = async (token, id) => {
        try {
            await axios.delete(`${API_URL}/api/homedata/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            throw new Error('Failed to delete content.');
        }
    };
    




  
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

  const updateInvestorContent = async (token, id, content) => {
    try {



        // Create a new FormData instance
        const formData = new FormData();
        // Append all fields to FormData
        formData.append('field1', content.field1);
        formData.append('field2', content.field2);
        formData.append('field3', content.field3);
        formData.append('field4', content.field4);
        formData.append('field5', content.field5);
        formData.append('field6', content.field6);
        formData.append('field7', content.field7);
        formData.append('field8', content.field8);
        formData.append('field9', content.field9);
    
        // Append images if available
        if (content.image) {
            formData.append('image', content.image);
        }
        
        if (content.image2) {
            formData.append('image_2', content.image2);
        }

        const DATA = JSON.stringify(content)
        

console.log('dddddddddd',DATA)

        // Send the PUT request with formData and ID in the URL
        const response = await fetch(`${API_URL}/api/investorPage/${id}`, {
            method: 'PUT', // Use 'POST' if creating a new resource
            body: DATA,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data' is not needed with FormData in fetch
            },
        });

        const result = await response.json();
        console.log('Update successful', result);
        return result;
    } catch (error) {
        console.error('Failed to update investor content.', error);
        throw new Error('Failed to update investor content.');
    }
};














    

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

    const createFooter = async (token, footerData) => {
        try {
            const response = await fetch(`${API_URL}/api/footer`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Set to 'application/json'
                },
                body: JSON.stringify({
                    column_1_field_1: footerData.column_1_field_1,
                    column_1_field_2: footerData.column_1_field_2,
                    column_1_field_3: footerData.column_1_field_3,
                    column_1_field_4: footerData.column_1_field_4,
                    column_1_heading_1: footerData.column_1_heading_1,
                    column_2_field_1: footerData.column_2_field_1,
                    column_2_field_2: footerData.column_2_field_2,
                    column_2_field_3: footerData.column_2_field_3,
                    column_2_heading_1: footerData.column_2_heading_1,
                    column_3_field_1: footerData.column_3_field_1,
                    column_3_field_2: footerData.column_3_field_2,
                    column_3_field_3: footerData.column_3_field_3,
                    column_3_heading_1: footerData.column_3_heading_1
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create footer.');
            }
    
            const result = await response.json();
            alert('Footer created successfully');
            return result;
    
        } catch (error) {
            console.error('Failed to create footer:', error.message);
            alert('Failed to create footer.');
        }
    };
    
    
    const updateFooter = async (token, id, footerData) => {
       
        
        try {
            const response = await fetch(`${API_URL}/api/footer/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Set to 'application/json'
                },
                body: JSON.stringify({
                    column_1_field_1: footerData.column_1_field_1,
                    column_1_field_2: footerData.column_1_field_2,
                    column_1_field_3: footerData.column_1_field_3,
                    column_1_field_4: footerData.column_1_field_4,
                    column_1_heading_1: footerData.column_1_heading_1,
                    column_2_field_1: footerData.column_2_field_1,
                    column_2_field_2: footerData.column_2_field_2,
                    column_2_field_3: footerData.column_2_field_3,
                    column_2_heading_1: footerData.column_2_heading_1,
                    column_3_field_1: footerData.column_3_field_1,
                    column_3_field_2: footerData.column_3_field_2,
                    column_3_field_3: footerData.column_3_field_3,
                    column_3_heading_1: footerData.column_3_heading_1
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update footer.');
            }
    
            const result = await response.json();
            alert('Footer updated successfully');
            return result;
    
        } catch (error) {
            console.error('Failed to update footer:', error.message);
            alert('Failed to update footer.');
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

    const createHeroSection = async (token, formData) => {
        try {
            const response = await fetch(`${API_URL}/api/heroSection`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'application/json', // Set to 'application/json'
                },
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to create heroSection.');
            }
    
            const result = await response.json();
            alert('Slide created successfully');
            return result;
    
        } catch (error) {
            console.error('Failed to create Slide:', error.message);
            alert('Failed to create Slide.');
        }
    };

    const updateeHeroSection = async (token, editId, editContent) => {
       
        try {
            console.log('sasasa', editContent)
            const response = await fetch(`${API_URL}/api/heroSection/${editId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', // Set to 'application/json'
                },
                body: JSON.stringify({
                    image:editContent.image,
                    text:editContent.text
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update slide.');
            }
    
            const result = await response.json();
            alert('Slide updated successfully');
            return result;
    
        } catch (error) {
            console.error('Failed to update slide:', error.message);
            alert('Failed to update slidr.');
        }
    };
    
    const deleteHeroSection = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/api/heroSection/${id}`);
            return response.data;
             alert('Slide updated successfully');
        } catch (error) {
            console.error(`Failed to delete Slide with ID ${id}:`, error.response?.data || error.message);
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
        fetchContactPage,
        getUserDashboard,
        fetchHeroSections,


        // CRUD Apis in order
        createContactPage,
        updateContactPage,
        deleteContactPage,
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
        deleteFooter,
        createHeroSection,
        updateeHeroSection,
        deleteHeroSection

    }
}
