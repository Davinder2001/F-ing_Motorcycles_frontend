'use client';
import React, { useEffect, useState } from "react";
import TabComponent from "./productTabs";
import { EXPORT_ALL_APIS } from "../../../../utils/apis/apis";

function ProductPage() {
    let api = EXPORT_ALL_APIS();
    let [result, setResult] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                let resp = await api.fetchCategories();
                setResult(resp);
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError("Failed to fetch categories.");
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <TabComponent result={result} />
        </>
    );
}

export default ProductPage;
