// ProductManagement.js

'use client';

import { useState, useEffect } from 'react';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '@/Api/ProductApi/api';
import Image from 'next/image';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ProductManagement = ({ categories }) => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', category_id: '', image: null });
    const [editProduct, setEditProduct] = useState(null);
    const [showProductForm, setShowProductForm] = useState(false);

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data || []))
            .catch(error => console.error(error));
    }, []);

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('price', newProduct.price);
        formData.append('description', newProduct.description);
        formData.append('category_id', newProduct.category_id);
        if (newProduct.image) {
            formData.append('image', newProduct.image);
        }

        try {
            await createProduct(token, formData);
            fetchProducts().then((data) => setProducts(data || []));
            setNewProduct({ name: '', price: '', description: '', category_id: '', image: null });
            setShowProductForm(false); // Hide form after creation
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleDeleteProduct = async (productId) => {
        const token = localStorage.getItem('token');
        try {
            await deleteProduct(token, productId);
            fetchProducts().then((data) => setProducts(data || []));
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        formData.append('name', editProduct.name);
        formData.append('price', editProduct.price);
        formData.append('description', editProduct.description);
        formData.append('category_id', editProduct.category_id);
        if (editProduct.image) {
            formData.append('image', editProduct.image);
        }

        try {
            await updateProduct(token, editProduct.id, formData);
            fetchProducts().then((data) => setProducts(data || []));
            setEditProduct(null);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Product Management</h2>

            {products.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                {/* <td>{category_id}</td> */}
                                <td>
                                    {product.image && <Image src={`${BASE_URL}/public/images/products/${product.image}`} alt={product.name} width={100} />}
                                </td>
                                <td>
                                    <button onClick={() => { setEditProduct(product); setShowProductForm(true); }}>Edit</button>
                                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products available</p>
            )}
            <button onClick={() => { setShowProductForm(!showProductForm); setEditProduct(null); }}>
                {showProductForm ? 'Cancel' : 'Add New Product'}
            </button>

            {showProductForm && (
                <form onSubmit={editProduct ? handleUpdateProduct : handleCreateProduct}>
                    <h3>{editProduct ? 'Edit' : 'Create'} Product</h3>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={editProduct ? editProduct.name : newProduct.name}
                        onChange={(e) => editProduct ? setEditProduct({ ...editProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        value={editProduct ? editProduct.price : newProduct.price}
                        onChange={(e) => editProduct ? setEditProduct({ ...editProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Product Description"
                        value={editProduct ? editProduct.description : newProduct.description}
                        onChange={(e) => editProduct ? setEditProduct({ ...editProduct, description: e.target.value }) : setNewProduct({ ...newProduct, description: e.target.value })}
                        required
                    />
                    <select
                        value={editProduct ? editProduct.category_id : newProduct.category_id}
                        onChange={(e) => editProduct ? setEditProduct({ ...editProduct, category_id: e.target.value }) : setNewProduct({ ...newProduct, category_id: e.target.value })}
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => editProduct ? setEditProduct({ ...editProduct, image: e.target.files[0] }) : setNewProduct({ ...newProduct, image: e.target.files[0] })}
                    />
                    <button type="submit">{editProduct ? 'Update' : 'Create'} Product</button>
                </form>
            )}
        </div>
    );
};

export default ProductManagement;
