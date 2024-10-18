import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-20 relative flex items-center justify-between px-2 sm:px-4 md:sm-6 lg:md-20"> {/* Adjust padding for different screen sizes */}
        {/* Hamburger Menu (Visible only on Small Screens) */}
        <div className="sm:hidden flex items-center">
            <button className="btn btn-primary">
                {/* Hamburger Icon */}
                &#9776; {/* Simple hamburger icon */}
            </button>
        </div>

        {/* Logo (on the left for md and larger, on the right for small screens) */}
        <div className="flex items-center sm:ml-auto md:ml-0 pr-4 md:pr-6 lg:pr-10"> {/* Adjust right padding for md and lg */}
            <div className="w-16 h-16 bg-gray-700 rounded-full shadow border-2 border-white flex justify-center items-center">
                <div className="avatar">
                    <div className="w-12 lg:w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>

        {/* Navigation Tabs (Only visible on md and larger screens) */}
        <div className="hidden md:flex space-x-2 md:space-x-4 lg:space-x-6 justify-center flex-grow mx-10 md:mx-20 lg:mx-40"> {/* Adjust margin for different screen sizes */}
            <div className="tabs tabs-bordered">
                <a className="tab tab-bordered tab-active">Home</a>
                <a className="tab tab-bordered">Product</a>
                <a className="tab tab-bordered">Store</a>
                <a className="tab tab-bordered">Contact</a>
                <a className="tab tab-bordered">About</a>
            </div>
        </div>

        {/* Responsive Button (Visible on medium and larger screens, hidden on small screens) */}
        <div className="hidden sm:flex items-center ml-2 md:ml-4 lg:ml-40"> {/* Adjust left margin for different screen sizes */}
            <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg">Responsive</button>
        </div>
    </div>
  );
};

export default Header;