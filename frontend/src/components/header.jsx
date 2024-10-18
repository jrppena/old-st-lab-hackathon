import React, { useState } from 'react';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        
        {/* Navbar */}
        <div className="drawer-content flex flex-col p-2">
        <div className="navbar flex w-full h-20 items-center justify-center relative">
            
            {/* Hamburger Menu (Visible only on Small Screens) */}
            <div className="md:hidden lg:hidden absolute left-0">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </label>
            </div>

            {/* Logo */}
            <div className="md:block lg:block absolute md:left-0 right-0 mr-10 md:ml-10 lg:left-0 lg:ml-10"> 
            <div className="w-16 h-16 bg-gray-700 rounded-full shadow border-2 border-white flex justify-center items-center">
                <div className="avatar">
                <div className="w-12 lg:w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                </div>
                </div>
            </div>
            </div>

            {/* Navigation Tabs (Centered Vertically and Horizontally) */}
            <div className="hidden md:block lg:block justify-center items-center">
                <div className="tabs tabs-bordered tabs-lg">
                <a className={`tab tab-bordered ${activeTab === 'Home' ? 'tab-active' : ''}`} onClick={() => handleTabClick('Home')}>
                    Home
                </a>
                <a className={`tab tab-bordered ${activeTab === 'Product' ? 'tab-active' : ''}`} onClick={() => handleTabClick('Product')}>
                    Product
                </a>
                <a className={`tab tab-bordered ${activeTab === 'Store' ? 'tab-active' : ''}`} onClick={() => handleTabClick('Store')}>
                    Store
                </a>
                <a className={`tab tab-bordered ${activeTab === 'Contact' ? 'tab-active' : ''}`} onClick={() => handleTabClick('Contact')}>
                    Contact
                </a>
                <a className={`tab tab-bordered ${activeTab === 'About' ? 'tab-active' : ''}`} onClick={() => handleTabClick('About')}>
                    About
                </a>
                </div>
            </div>

            {/* Responsive Button */}
            <div className="hidden md:block lg:block absolute right-0  mr-10">
            <button className="btn btn-primary btn-sm md:btn-md lg:btn-md">Responsive</button>
            </div>
        </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-10">
                {/* Sidebar content */}
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>Store</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;
