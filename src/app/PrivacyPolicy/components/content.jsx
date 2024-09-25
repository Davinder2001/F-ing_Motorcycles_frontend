'use client'
import React, { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const Content = () => {
  let api=EXPORT_ALL_APIS();
  let [result,setResult]=useState([])

  useEffect(()=>{
    let loadPrivecypolicy=async()=>{
      let resp =await api.fetchPrivacyPolicyPage();
      setResult(resp)
    }
    loadPrivecypolicy()
  },[])

  return (
    <div>
      {result?.data && result.data.length > 0 ? (
        result.data.map((policy) => (
          <div key={policy.id} style={{ marginBottom: '20px' }}>
            <h3>{policy.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: policy.description }} />
          </div>
        ))
      ) : (
        <p>No privacy policies available.</p>
      )}
    </div>
  );
};

export default Content;
