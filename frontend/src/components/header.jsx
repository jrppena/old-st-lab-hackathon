import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-20 relative flex items-center justify-between px-4 lg:px-10">
        {/* Logo or Avatar */}
        <div className="flex items-center mr-4 md:mr-10 lg:mr-80"> {/* Dynamic margin-right for different screen sizes */}
            <div className="w-16 h-16 bg-gray-700 rounded-full shadow border-2 border-white flex justify-center items-center">
                <div className="avatar">
                    <div className="w-12 lg:w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex space-x-2 md:space-x-4 lg:space-x-6 mr-4 md:mr-10 lg:mr-80"> {/* Dynamic space between tabs and margin-right */}
            <div className="tabs tabs-bordered">
                <a className="tab tab-bordered tab-active">Home</a>
                <a className="tab tab-bordered">Product</a>
                <a className="tab tab-bordered">Store</a>
                <a className="tab tab-bordered">Contact</a>
                <a className="tab tab-bordered">About</a>
            </div>
        </div>

        {/* Responsive Button */}
        <div className="flex items-center ml-2 md:ml-4 lg:ml-6"> {/* Dynamic margin-left for different screen sizes */}
            <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg">Responsive</button>
        </div>

        {/* Mobile Menu (visible on smaller screens) */}
        <div className="md:hidden ml-2"> {/* Smaller margin-left for smaller screens */}
            <button className="btn btn-primary">Menu</button>
        </div>
    </div>
  );
};

export default Header;