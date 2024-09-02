'use client';

import React from 'react';
import LogoutBtn from '@/app/(Admin)/(dashboard)/dashboard/Components/Logout/LogoutBtn';

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <div className='sidebar'>
            <h4>Sidebar</h4>
            <div className='tab-buttons'>
                <button onClick={() => setActiveTab('category')} className={activeTab === 'category' ? 'active' : ''}>
                    Category Management
                </button>
                <button onClick={() => setActiveTab('product')} className={activeTab === 'product' ? 'active' : ''}>
                    Product Management
                </button>
                <button onClick={() => setActiveTab('header')} className={activeTab === 'header' ? 'active' : ''}>
                    Header Management
                </button>  
                <button onClick={() => setActiveTab('footer')} className={activeTab === 'footer' ? 'active' : ''}>
                    Footer Management
                </button>          
                <button onClick={() => setActiveTab('footer')} className={activeTab === 'footer' ? 'active' : ''}>
                    Page Management
                </button>
            </div>
            <LogoutBtn />
        </div>
    );
};

export default Sidebar;
