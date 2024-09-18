import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const EXPORT_ALL_APIS = () => {
  /////////////////////// Fetch Apis  /////////////////////////

  const loadHeaderImage = async () => {
    try {
      let resp = await fetch(`${API_URL}/api/headerlogo`);
      let data = await resp.json();
      return data;
    } catch (error) {
    }
  };

   

  const fetchContent = async () => {
    let resp = await fetch(`${API_URL}/api/homedata`);
    let data = await resp.json();
    return data;
  };

  const fetchCategories = async () => {
    let resp = await fetch(`${API_URL}/api/categories`);
    let data = await resp.json();
    return data;
  };
  const fetchInvestor = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/investorPage`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch investor.");
      }

      const result = await response.json();
      return result; // Return the fetched investor data
    } catch (error) {
      console.error("Failed to fetch investor:", error.message);
      alert("Failed to fetch investor.");
    }
  };

  const fetchFooter = async () => {
    try {
      let resp = await fetch(`${API_URL}/api/footer`);
      let data = await resp.json();
      return data;
    } catch (error) {}
  };
  // const fetchProducts = async () => {
  //     let resp = await fetch(`${API_URL}/api/footer`)
  //     let data = await resp.json()
  //     return data
  // }
  const fetchprofile = async () => {
    let resp = await fetch(`${API_URL}/api/profile`);
    let data = await resp.json();
    return data;
  };

  const fetchContactPage = async () => {
    let resp = await fetch(`${API_URL}/api/ContactPage`);
    let data = await resp.json();
    return data;
  };

  const getUserDashboard = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/api/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user dashboard.");
    }
  };

  const fetchHeroSections = async () => {
    let resp = await fetch(`${API_URL}/api/heroSection`);
    let data = await resp.json();
    return data;
  };

  const fetchPrivacyPolicyPage = async () => {
    let resp = await fetch(`${API_URL}/api/privacy_policies`);
    let data = await resp.json();
    return data;
  };

  const fetchTermsOfUsePage = async () => {
    try {
      const resp = await fetch(`${API_URL}/api/terms_of_use`);
      if (!resp.ok) {
        throw new Error("Failed to fetch Terms of Use");
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error("Error fetching Terms of Use:", error.message);
    }
  };

  const fetchTermsAndConditionsPage = async () => {
    try {
      const resp = await fetch(`${API_URL}/api/terms_and_conditions`);
      if (!resp.ok) {
        throw new Error("Failed to fetch Terms and Conditions");
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error("Error fetching Terms and Conditions:", error.message);
    }
  };

  const fetchAboutUsPage = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about_us`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch About Us content:", error.message);
      alert("Failed to fetch About Us content.");
    }
  };

  const fetchFounders = async () => {
    try {
      const response = await fetch(`${API_URL}/api/founders`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch About Us content:", error.message);
      alert("Failed to fetch About Us content.");
    }
  };

  const fetchenquiryForm = async () => {
    try {
      const response = await fetch(`${API_URL}/api/submit-enquiry`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch Form content:", error.message);
      alert("Failed to fetch form content.");
    }
  };

  const fetchProductPage = async () => {
    try {
      const response = await fetch(`${API_URL}/api/productPage`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch content:", error.message);
      alert("Failed to fetch product page content.");
    }
  };

    const fetchContactSeoPage = async () => {
      try {
        const response = await fetch(`${API_URL}/api/contactPageSeo`);

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Failed to fetch content:", error.message);
        alert("Failed to fetch contact page content.");
      }
    };

    /////////////////////////////////////// Crud Api's //////////////////////////////*html*/

    const loginUser = async (email, password) => {
      try {
        const response = await axios.post(`${API_URL}/api/login`, {
          email,
          password,
        });

        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
            "Login failed. Please check your credentials and try again."
        );
      }
    };

    const logoutUser = async (token) => {
      try {
        console.log("token recived from api", token);
        const response = await axios.get(`${API_URL}/api/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Logout failed. Please try again."
        );
      }
    };

    const createContactPage = async (contactPage) => {
      const response = await fetch(`${API_URL}/api/ContactPage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactPage.name, // Include name
          email: contactPage.email, // Include email
          number: contactPage.number, // Include number
        }),
      });

      const result = await response.json();
      alert("User saved successfully");

      return result; // Return the result instead of data (data was undefined)
    };

    const updateContactPage = async (contactPage, selectedUserId) => {
      const response = await fetch(
        `${API_URL}/api/ContactPage/${selectedUserId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactPage.name, // Include name
            email: contactPage.email, // Include email
            number: contactPage.number, // Include number
          }),
        }
      );

      const result = await response.json();
      alert("User updated successfully");

      return result;
    };

    const deleteContactPage = async (id) => {
      const response = await fetch(`${API_URL}/api/ContactPage/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Content deleted successfully");
      } else {
        alert("Error deleting content");
      }

      return response.ok;
    };

    // Category CRUD
    const createCategory = async (token, category) => {
      try {
        const formData = new FormData();
        formData.append("name", category.name);
        formData.append("short_description", category.short_description);
        formData.append("long_description", category.long_description);

        if (category.category_image) {
          formData.append("category_image", category.category_image); // Attach image if available
        }

        const response = await fetch(`${API_URL}/api/categories`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Use FormData for file upload
        });

        if (!response.ok) {
          throw new Error("Failed to create category.");
        }

        const result = await response.json();
        alert("Category created successfully");

        return result; // Return the result for further processing
      } catch (error) {
        console.error("Failed to create category:", error.message);
        alert("Failed to create category.");
      }
    };

    const updateCategory = async (token, categoryId, category) => {
      try {
        const formData = new FormData();
        formData.append("name", category.name);
        formData.append("short_description", category.short_description);
        formData.append("long_description", category.long_description);

        if (category.category_image) {
          formData.append("category_image", category.category_image); // Attach image if available
        }
        formData.append("_method", "PUT");

        const response = await fetch(
          `${API_URL}/api/categories/${categoryId}`,
          {
            method: "post",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData, // Use FormData for updating category with or without image
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update category.");
        }

        const result = await response.json();
        alert("Category updated successfully");

        return result; // Return the updated category data
      } catch (error) {
        console.error("Failed to update category:", error.message);
        alert("Failed to update category.");
      }
    };

    const deleteCategory = async (token, categoryId) => {
      try {
        await axios.delete(`${API_URL}/api/categories/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Category deleted successfully");
      } catch (error) {
        console.error("Failed to delete category:", error.message);
        alert("Failed to delete category.");
      }
    };

    // Content for Home Page

    const createContent = async (token, newContent) => {
      try {
        const formData = new FormData();

        // Append all text data
        formData.append("heading", newContent.heading);
        formData.append("heading_nxt", newContent.heading_nxt);
        formData.append("description", newContent.description);
        formData.append("heading_2", newContent.heading_2);
        formData.append("Sub_heading_2", newContent.Sub_heading_2);
        formData.append("description_2", newContent.description_2);
        formData.append("s_description_1", newContent.s_description_1);
        formData.append("s_description_2", newContent.s_description_2);
        formData.append("s_description_3", newContent.s_description_3);
        formData.append("third_sec_heading", newContent.third_sec_heading);
        formData.append("disc_1_sec_3", newContent.disc_1_sec_3);
        formData.append("disc_2_sec_3", newContent.disc_2_sec_3);
        formData.append("disc_3_sec_3", newContent.disc_3_sec_3);
        formData.append("disc_4_sec_3", newContent.disc_4_sec_3);
        formData.append("disc_5_sec_3", newContent.disc_5_sec_3);

        // Append SEO fields
        formData.append("seo_title", newContent.seo_title);
        formData.append("seo_description", newContent.seo_description);
        formData.append("seo_host_url", newContent.seo_host_url);

        // Append image files (if provided)
        if (newContent.image) {
          formData.append("image", newContent.image);
        }
        if (newContent.image_2) {
          formData.append("image_2", newContent.image_2);
        }
        if (newContent.image_1_sec_3) {
          formData.append("image_1_sec_3", newContent.image_1_sec_3);
        }
        if (newContent.image_2_sec_3) {
          formData.append("image_2_sec_3", newContent.image_2_sec_3);
        }
        if (newContent.image_3_sec_3) {
          formData.append("image_3_sec_3", newContent.image_3_sec_3);
        }
        if (newContent.image_4_sec_3) {
          formData.append("image_4_sec_3", newContent.image_4_sec_3);
        }
        if (newContent.image_5_sec_3) {
          formData.append("image_5_sec_3", newContent.image_5_sec_3);
        }

        const response = await fetch(`${API_URL}/api/homedata`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Note: Do NOT set 'Content-Type' with FormData
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to create content.");
        }

        const result = await response.json();
        alert("Content created successfully");
        return result;
      } catch (error) {
        console.error("Failed to create content:", error.message);
        alert("Failed to create content.");
      }
    };

    const updateContent = async (token, contentId, content) => {
      try {
        const formData = new FormData();

        // Append all text data
        formData.append("heading", content.heading);
        formData.append("heading_nxt", content.heading_nxt);
        formData.append("description", content.description);
        formData.append("heading_2", content.heading_2);
        formData.append("Sub_heading_2", content.Sub_heading_2);
        formData.append("description_2", content.description_2);
        formData.append("s_description_1", content.s_description_1);
        formData.append("s_description_2", content.s_description_2);
        formData.append("s_description_3", content.s_description_3);
        formData.append("third_sec_heading", content.third_sec_heading);
        formData.append("disc_1_sec_3", content.disc_1_sec_3);
        formData.append("disc_2_sec_3", content.disc_2_sec_3);
        formData.append("disc_3_sec_3", content.disc_3_sec_3);
        formData.append("disc_4_sec_3", content.disc_4_sec_3);
        formData.append("disc_5_sec_3", content.disc_5_sec_3);

        // Append SEO fields
        formData.append("seo_title", content.seo_title);
        formData.append("seo_description", content.seo_description);
        formData.append("seo_host_url", content.seo_host_url);

        // Append image files (if provided and valid)
        const appendImageIfValid = (key, image) => {
          if (
            image &&
            image instanceof File &&
            image.type.startsWith("image/")
          ) {
            formData.append(key, image);
          }
        };

        appendImageIfValid("image", content.image);
        appendImageIfValid("image_2", content.image_2);
        appendImageIfValid("image_1_sec_3", content.image_1_sec_3);
        appendImageIfValid("image_2_sec_3", content.image_2_sec_3);
        appendImageIfValid("image_3_sec_3", content.image_3_sec_3);
        appendImageIfValid("image_4_sec_3", content.image_4_sec_3);
        appendImageIfValid("image_5_sec_3", content.image_5_sec_3);

        formData.append("_method", "PUT");

        const response = await fetch(`${API_URL}/api/homedata/${contentId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // Do not set 'Content-Type' when using FormData
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to update content.");
        }

        return await response.json();
      } catch (error) {
        console.error("Failed to update content:", error.message);
        throw error;
      }
    };

    const deleteContent = async (token, id) => {
      try {
        await axios.delete(`${API_URL}/api/homedata/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        throw new Error("Failed to delete content.");
      }
    };

    // Create investor API
    const createInvestorContent = async (token, investor) => {
      try {
        const formData = new FormData();
        formData.append("field1", investor.field1);
        formData.append("field2", investor.field2);
        formData.append("field3", investor.field3);
        formData.append("field4", investor.field4);
        formData.append("field5", investor.field5);
        formData.append("field6", investor.field6);
        formData.append("field7", investor.field7);
        formData.append("field8", investor.field8);
        formData.append("field9", investor.field9);
        formData.append("field10", investor.field10);

        if (investor.image) {
          formData.append("image", investor.image); // Attach image if available
        }

        const response = await fetch(`${API_URL}/api/investorPage`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Use FormData for file upload
        });

        if (!response.ok) {
          throw new Error("Failed to create investor.");
        }

        const result = await response.json();
        alert("Investor created successfully");

        return result; // Return the result for further processing
      } catch (error) {
        console.error("Failed to create investor:", error.message);
        alert("Failed to create investor.");
      }
    };

    const updateInvestorContent = async (token, id, data) => {
      try {
        const formData = new FormData();

        // Append non-image fields
        formData.append("field1", data.field1);
        formData.append("field2", data.field2);
        formData.append("field3", data.field3);
        formData.append("field4", data.field4);
        formData.append("field5", data.field5);
        formData.append("field6", data.field6);
        formData.append("field7", data.field7);
        formData.append("field8", data.field8);
        formData.append("field9", data.field9);
        formData.append("field10", data.field10);

        // Append image only if it's a file and it's an image
        if (data.image && data.image instanceof File) {
          if (data.image.type.startsWith("image/")) {
            formData.append("image", data.image); // Attach image if it's a valid image
          }
        }

        formData.append("_method", "PUT"); // Use PUT method via FormData

        const response = await fetch(`${API_URL}/api/investorPage/${id}`, {
          method: "POST", // Send as POST with `_method` as 'PUT'
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Use FormData for updating investor with or without image
        });

        if (!response.ok) {
          throw new Error("Failed to update investor.");
        }

        const result = await response.json();
        alert("Investor updated successfully");

        return result; // Return the updated investor data
      } catch (error) {
        console.error("Failed to update investor:", error.message);
        alert("Failed to update investor.");
      }
    };

    // Delete investor API
    const deleteInvestorContent = async (token, investorId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/investorPage/${investorId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete investor.");
        }

        alert("Investor deleted successfully");
      } catch (error) {
        console.error("Failed to delete investor:", error.message);
        alert("Failed to delete investor.");
      }
    };

    // Fetch investor API

    // Header API
    const uploadHeaderImage = async (image) => {
      try {
        const formData = new FormData();
        formData.append("image", image);

        const response = await axios.post(
          `${API_URL}/api/headerlogo`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return response.data;
      } catch (error) {
        console.error("Error uploading header image:", error);
        return null;
      }
    };

    // Delete the header image
    const deleteHeaderImage = async () => {
      try {
        const response = await axios.delete(`${API_URL}/api/headerlogo`);
        return response.data;
      } catch (error) {
        console.error("Error deleting header image:", error);
        return null;
      }
    };

    // Footer CRUD Api

    const createFooter = async (token, footerData) => {
      try {
        const response = await fetch(`${API_URL}/api/footer`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Set to 'application/json'
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
            column_3_heading_1: footerData.column_3_heading_1,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create footer.");
        }

        const result = await response.json();
        alert("Footer created successfully");
        return result;
      } catch (error) {
        console.error("Failed to create footer:", error.message);
        alert("Failed to create footer.");
      }
    };

    const updateFooter = async (token, id, footerData) => {
      try {
        const response = await fetch(`${API_URL}/api/footer/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Set to 'application/json'
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
            column_3_heading_1: footerData.column_3_heading_1,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update footer.");
        }

        const result = await response.json();
        alert("Footer updated successfully");
        return result;
      } catch (error) {
        console.error("Failed to update footer:", error.message);
        alert("Failed to update footer.");
      }
    };

    // Delete a footer
    const deleteFooter = async (id) => {
      try {
        const response = await axios.delete(`${API_URL}/api/footer/${id}`);
        return response.data;
      } catch (error) {
        console.error(
          `Failed to delete footer with ID ${id}:`,
          error.response?.data || error.message
        );
        throw new Error("Failed to delete footer.");
      }
    };

    const createHeroSection = async (token, formData) => {
      try {
        const response = await fetch(`${API_URL}/api/heroSection`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json', // Set to 'application/json'
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to create heroSection.");
        }

        const result = await response.json();
        alert("Slide created successfully");
        return result;
      } catch (error) {
        console.error("Failed to create Slide:", error.message);
        alert("Failed to create Slide.");
      }
    };

    const updateeHeroSection = async (token, editId, editContent) => {
      console.log("editContent", editContent);

      try {
        // Create a FormData object and append data to it
        const data = new FormData();
        data.append("image", editContent.image);
        data.append("text", editContent.text);
        data.append("_method", "PUT");

        const response = await fetch(`${API_URL}/api/heroSection/${editId}`, {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            // No need to set Content-Type when using FormData; the browser sets it automatically
          },
          body: data, // Send the FormData object as the body
        });

        if (!response.ok) {
          throw new Error("Failed to update slide.");
        }

        const result = await response.json();
        alert("Slide updated successfully");
        return result;
      } catch (error) {
        console.error("Failed to update slide:", error.message);
        alert("Failed to update slide.");
      }
    };

    const deleteHeroSection = async (id) => {
      try {
        const response = await axios.delete(`${API_URL}/api/heroSection/${id}`);
        return response.data;
        alert("Slide updated successfully");
      } catch (error) {
        console.error(
          `Failed to delete Slide with ID ${id}:`,
          error.response?.data || error.message
        );
        throw new Error("Failed to delete footer.");
      }
    };

    const createPrivacyPolicy = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/privacy_policies`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Set to 'application/json'
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create privacy policy.");
        }

        const result = await response.json();
        alert("Created successfully");
        return result;
      } catch (error) {
        console.error("Failed to create:", error.message);
        alert("Failed to create.");
      }
    };

    const updatePrivacyPolicy = async (token, data, policyId) => {
      console.log(data, policyId);
      try {
        const response = await fetch(
          `${API_URL}/api/privacy_policies/${policyId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: data.title,
              description: data.description,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update privacy policy.");
        }

        const result = await response.json();
        alert("Privacy policy updated successfully");
        return result;
      } catch (error) {
        console.error("Failed to update privacy policy:", error.message);
        alert("Failed to update privacy policy.");
      }
    };

    const deletePrivacyPolicy = async (token, policyId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/privacy_policies/${policyId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`, // If you're using a token
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the response is OK (status code in the range 200-299)
        if (!response.ok) {
          throw new Error("Failed to delete privacy policy.");
        }

        // Notify the user that the deletion was successful
        alert("Privacy policy deleted successfully");

        // Optionally return the response if needed elsewhere
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete privacy policy with ID ${id}:`,
          error.message
        );
        alert("Failed to delete privacy policy.");
        throw new Error("Failed to delete privacy policy.");
      }
    };

    const createTermsOfUse = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/terms_of_use`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create Terms of Use.");
        }

        const result = await response.json();
        alert("Created Terms of Use successfully");
        return result;
      } catch (error) {
        console.error("Failed to create Terms of Use:", error.message);
        alert("Failed to create Terms of Use.");
      }
    };

    const updateTermsOfUse = async (token, data, termsId) => {
      try {
        const response = await fetch(`${API_URL}/api/terms_of_use/${termsId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update Terms of Use.");
        }

        const result = await response.json();
        alert("Updated Terms of Use successfully");
        return result;
      } catch (error) {
        console.error("Failed to update Terms of Use:", error.message);
        alert("Failed to update Terms of Use.");
      }
    };

    const deleteTermsOfUse = async (token, termsId) => {
      try {
        const response = await fetch(`${API_URL}/api/terms_of_use/${termsId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete Terms of Use.");
        }

        alert("Deleted Terms of Use successfully");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete Terms of Use with ID ${termsId}:`,
          error.message
        );
        alert("Failed to delete Terms of Use.");
      }
    };

    const createTermsAndConditions = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/terms_and_conditions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create Terms and Conditions.");
        }

        const result = await response.json();
        alert("Created Terms and Conditions successfully");
        return result;
      } catch (error) {
        console.error("Failed to create Terms and Conditions:", error.message);
        alert("Failed to create Terms and Conditions.");
      }
    };

    const updateTermsAndConditions = async (token, data, termsId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/terms_and_conditions/${termsId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: data.title,
              description: data.description,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update Terms and Conditions.");
        }

        const result = await response.json();
        alert("Updated Terms and Conditions successfully");
        return result;
      } catch (error) {
        console.error("Failed to update Terms and Conditions:", error.message);
        alert("Failed to update Terms and Conditions.");
      }
    };

    const deleteTermsAndConditions = async (token, termsId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/terms_and_conditions/${termsId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete Terms and Conditions.");
        }

        alert("Deleted Terms and Conditions successfully");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete Terms and Conditions with ID ${termsId}:`,
          error.message
        );
        alert("Failed to delete Terms and Conditions.");
      }
    };

    const createAboutUs = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/about_us`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            seoTitle: data.seoTitle,
            seoDescription: data.seoDescription,
            seoHostUrl: data.seoHostUrl,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create About Us content.");
        }

        const result = await response.json();
        alert("Created About Us content successfully");
        return result;
      } catch (error) {
        console.error("Failed to create About Us content:", error.message);
        alert("Failed to create About Us content.");
      }
    };

    // Update existing About Us content
    const updateAboutUs = async (token, data, aboutUsId) => {
      try {
        const response = await fetch(`${API_URL}/api/about_us/${aboutUsId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            seoTitle: data.seoTitle,
            seoDescription: data.seoDescription,
            seoHostUrl: data.seoHostUrl,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update About Us content.");
        }

        const result = await response.json();
        alert("Updated About Us content successfully");
        return result;
      } catch (error) {
        console.error("Failed to update About Us content:", error.message);
        alert("Failed to update About Us content.");
      }
    };

    // Delete existing About Us content
    const deleteAboutUs = async (token, aboutUsId) => {
      try {
        const response = await fetch(`${API_URL}/api/about_us/${aboutUsId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete About Us content.");
        }

        alert("Deleted About Us content successfully");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete About Us content with ID ${aboutUsId}:`,
          error.message
        );
        alert("Failed to delete About Us content.");
      }
    };

    const createFounder = async (token, founder) => {
      try {
        const formData = new FormData();
        formData.append("name", founder.name);
        formData.append("description", founder.description);

        if (founder.image) {
          formData.append("image", founder.image); // Attach image if available
        }

        const response = await fetch(`${API_URL}/api/founders`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Use FormData for file upload
        });

        if (!response.ok) {
          throw new Error("Failed to create founder.");
        }

        const result = await response.json();
        alert("Founder created successfully");

        return result; // Return the result for further processing
      } catch (error) {
        console.error("Failed to create founder:", error.message);
        alert("Failed to create founder.");
      }
    };

    const updateFounder = async (token, data, founderId) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);

        if (data.image) {
          formData.append("image", data.image); // Attach image if available
        }
        formData.append("_method", "PUT");

        const response = await fetch(`${API_URL}/api/founders/${founderId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Use FormData for updating founder with or without image
        });

        if (!response.ok) {
          throw new Error("Failed to update founder.");
        }

        const result = await response.json();
        alert("Founder updated successfully");

        return result; // Return the updated founder data
      } catch (error) {
        console.error("Failed to update founder:", error.message);
        alert("Failed to update founder.");
      }
    };

    const deleteFounder = async (token, founderId) => {
      try {
        await fetch(`${API_URL}/api/founders/${founderId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Founder deleted successfully");
      } catch (error) {
        console.error("Failed to delete founder:", error.message);
        alert("Failed to delete founder.");
      }
    };

    const createFormEnquery = async (token, formData) => {
      try {
        const response = await fetch(`${API_URL}/api/submit-enquiry`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });



        return response; // Ensure this returns the response object
      } catch (error) {
        console.error("API Error:", error);
        throw error; // Re-throw error to be caught in handleSubmit
      }
    };

    const createContactSeoData = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/contactPageSeo`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            seo_title: data.seoTitle,
            seo_description: data.seoDescription,
            seo_keywords: data.seoKeywords,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create Contact SEO data.");
        }

        const result = await response.json();
        alert("Created Contact SEO data successfully");
        return result;
      } catch (error) {
        console.error("Failed to create Contact SEO data:", error.message);
        alert("Failed to create Contact SEO data.");
      }
    };

    const updateContactSeoData = async (token, data, contactSeoId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/contactPageSeo/${contactSeoId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              seo_title: data.seoTitle,
              seo_description: data.seoDescription,
              seo_keywords: data.seoKeywords,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update Contact SEO data.");
        }

        const result = await response.json();
        alert("Updated Contact SEO data successfully");
        return result;
      } catch (error) {
        console.error("Failed to update Contact SEO data:", error.message);
        alert("Failed to update Contact SEO data.");
      }
    };
    const deleteContactSeoData = async (token, contactSeoId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/contactPageSeo/${contactSeoId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete Contact SEO data.");
        }

        alert("Deleted Contact SEO data successfully");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete Contact SEO data with ID ${contactSeoId}:`,
          error.message
        );
        alert("Failed to delete Contact SEO data.");
      }
    };

    // Create Product SEO data
    const createProductPage = async (token, data) => {
      try {
        const response = await fetch(`${API_URL}/api/productPage`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            seo_title: data.seoTitle,
            seo_description: data.seoDescription,
            seo_keywords: data.seoKeywords,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create Product SEO data.");
        }

        const result = await response.json();
        alert("Created Product SEO data successfully");
        return result;
      } catch (error) {
        console.error("Failed to create Product SEO data:", error.message);
        alert("Failed to create Product SEO data.");
      }
    };

    // Update Product SEO data
    const updateProductPage = async (token, data, productSeoId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/productPage/${productSeoId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              seo_title: data.seoTitle,
              seo_description: data.seoDescription,
              seo_keywords: data.seoKeywords,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update Product SEO data.");
        }

        const result = await response.json();
        alert("Updated Product SEO data successfully");
        return result;
      } catch (error) {
        console.error("Failed to update Product SEO data:", error.message);
        alert("Failed to update Product SEO data.");
      }
    };

    // Delete Product SEO data
    const deleteProductPage = async (token, productSeoId) => {
      try {
        const response = await fetch(
          `${API_URL}/api/productPage/${productSeoId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete Product SEO data.");
        }

        alert("Deleted Product SEO data successfully");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(
          `Failed to delete Product SEO data with ID ${productSeoId}:`,
          error.message
        );
        alert("Failed to delete Product SEO data.");
      }
    };

    return {
      // Fetch Apis in order
      loadHeaderImage,
      fetchContent,
      fetchCategories,
      fetchInvestor,
      fetchFooter,
      // fetchProducts,
      fetchprofile,
      fetchContactPage,
      getUserDashboard,
      fetchHeroSections,
      fetchPrivacyPolicyPage,
      fetchTermsOfUsePage,
      fetchTermsAndConditionsPage,
      fetchAboutUsPage,
      fetchFounders,
      fetchenquiryForm,
      fetchProductPage,
      fetchContactSeoPage,

      // CRUD Apis in order
      loginUser,
      logoutUser,
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
      deleteHeroSection,
      createPrivacyPolicy,
      updatePrivacyPolicy,
      deletePrivacyPolicy,
      createTermsOfUse,
      updateTermsOfUse,
      deleteTermsOfUse,
      createTermsAndConditions,
      updateTermsAndConditions,
      deleteTermsAndConditions,
      createAboutUs,
      updateAboutUs,
      deleteAboutUs,
      createFounder,
      updateFounder,
      deleteFounder,
      createFormEnquery,
      createContactSeoData,
      updateContactSeoData,
      deleteContactSeoData,
      createProductPage,
      updateProductPage,
      deleteProductPage,
    };
  };
  
