'use client'
import React, { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const TermsOfUse = () => {

  let api = EXPORT_ALL_APIS();
  let[result,setResult]=useState([])
  useEffect(()=>{

    let loadtermAndUse=async()=>{
      let resp = await api.fetchTermsOfUsePage();
      setResult(resp);
    }
    loadtermAndUse()
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
        <p>No terms of use available.</p>
      )}
    </div>
  );
};

export default TermsOfUse;
