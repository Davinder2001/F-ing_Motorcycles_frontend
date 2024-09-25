'use client'
import React, { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const TermsAndConditions = () => {
  let api=EXPORT_ALL_APIS()
  let[result,setResult]=useState([])
  useEffect(()=>{
    let loadtermCondition=async()=>{
      let resp = await api.fetchTermsAndConditionsPage();
      setResult(resp);
    }
    loadtermCondition()

  },[])
  return (
    <div>
      {result?.data && result.data.length > 0 ? (
        result.data.map((term) => (
          <div key={term.id} style={{ marginBottom: '20px' }}>
            <h3>{term.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: term.description }} />
          </div>
        ))
      ) : (
        <p>No terms and conditions available.</p>
      )}
    </div>
  );
};

export default TermsAndConditions;
