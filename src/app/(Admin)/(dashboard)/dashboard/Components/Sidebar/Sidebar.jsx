'use client';

import React, { useState } from 'react';
import LogoutBtn from '@/app/(Admin)/(dashboard)/dashboard/Components/Logout/LogoutBtn';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='sidebar'>

            <div className='tab-buttons'>
                <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
                    Dashboard
                </button>   
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
                <div className={`dropdown ${showDropdown ? 'active' : ''}`}>
                    <button onClick={toggleDropdown} className={activeTab === 'page' ? 'active' : ''}>
                        Page Management
                    </button>
                    {showDropdown && (
                        <div className='dropdown-menu'>
                            <button onClick={() => setActiveTab('homePage')} className={activeTab === 'homePage' ? 'active' : ''}>
                                Home Page
                            </button>
                            <button onClick={() => setActiveTab('productPage')} className={activeTab === 'productPage' ? 'active' : ''}>
                                Product Page
                            </button>
                            <button onClick={() => setActiveTab('investorPage')} className={activeTab === 'investorPage' ? 'active' : ''}>
                                Investor’s Page
                            </button>
                            <button onClick={() => setActiveTab('aboutPage')} className={activeTab === 'aboutPage' ? 'active' : ''}>
                                About Page
                            </button>
                            <button onClick={() => setActiveTab('contactPage')} className={activeTab === 'contactPage' ? 'active' : ''}>
                                Contact Page
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <LogoutBtn />
        </div>
    );
};

export default Sidebar;
