'use client'
import React, { useEffect, useState } from "react";
import TabComponent from "./productTabs";
import { EXPORT_ALL_APIS } from "../../../../utils/apis/apis";

function ProductPage() {
    let api = EXPORT_ALL_APIS();
  let [result, setResult] = useState([]);

  useEffect(() => {
    let loadProduct = async () => {
      let resp = await api.fetchCategories();
      setResult(resp);
    };
    loadProduct();
  }, [api]);

  return (
    <>
      <TabComponent result={result} />
    </>
  );
}

export default ProductPage;
