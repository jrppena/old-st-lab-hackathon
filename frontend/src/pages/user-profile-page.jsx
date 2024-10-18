import React from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCakeCandles, faMobile, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex flex-col items-center">

                {/* Avatar and Name */}
                <div className="flex flex-col md:flex-row-reverse items-center md:space-x-4 pt-20">
                    <div className="text-4xl pb-5 md:pb-0 pl-5">
                        John Doe
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full md:w-32 lg:w-48">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>

                {/* User Info with Icons */}
                <div className="w-full flex items-center justify-center p-5">
                    <div className="flex items-center border-b border-black pr-5 w-80">
                        <FontAwesomeIcon icon={faUser} className='pr-3' />
                        <div className="text-sm md:text-2xl lg:text-2xl">John Doe</div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center p-5">
                    <div className="flex items-center border-b border-black pr-5 w-80">
                        <FontAwesomeIcon icon={faCakeCandles} className='pr-3' />
                        <div className="text-sm md:text-xl lg:text-2xl">Birthday</div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center p-5">
                    <div className="flex items-center border-b border-black pr-5 w-80">
                        <FontAwesomeIcon icon={faMobile} className='pr-3' />
                        <div className="text-sm md:text-xl lg:text-2xl">0912 345 6789</div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center p-5">
                    <div className="flex items-center border-b border-black pr-5 w-80">
                        <FontAwesomeIcon icon={faEnvelope} className='pr-3' />
                        <div className="text-sm md:text-xl lg:text-2xl">Email Address</div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center p-5">
                    <div className="flex items-center border-b border-black pr-5 w-80">
                        <FontAwesomeIcon icon={faEye} className='pr-3' />
                        <div className="text-sm md:text-xl lg:text-2xl">Password</div>
                    </div>
                </div>

                <button className="btn btn-active btn-neutral mt-5">Edit Profile</button>
            </div>
        </div>
    );
};

export default UserProfile;
