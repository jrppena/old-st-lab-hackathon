import React from "react";
import Header from "../components/header";

const FaqPage = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            
            <div className="flex flex-col items-center justify-around">
                {/* Title */}
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold mt-10">Frequently asked questions</div>
                {/* Section */}
            </div>
        </div>
    );
};


export default FaqPage;