import React from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faUser, faChair } from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            
            <div className="flex flex-col items-center justify-around">
                {/* Title */}
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold mt-10 text-center">
                    Frequently asked<br />questions
                </div>

                {/* Section 1*/}
                <div className="w-full max-w-sm md:max-w-3xl lg:md:max-w-3xl">
                    {/* Section Name */}
                    <div className="text-xl md:text-2xl lg:text-2xl font-semibold mt-10 text-center">
                        About AppName
                    </div>
                    {/* Section Content (Accordion) */}
                    <div className="mt-5">
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                                What does AppName do?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus massa libero, vel dapibus dolor consequat vel. Vestibulum quis orci a lectus tempus semper. Pellentesque suscipit maximus magna, ut viverra orci gravida id. Etiam blandit ornare lorem eu eleifend. Sed sollicitudin, ipsum ut eleifend posuere, risus dui consectetur risus, id dapibus urna ligula fringilla arcu. Nunc non condimentum tortor, hendrerit bibendum orci. Pellentesque posuere posuere lorem, ac tincidunt ligula sodales sit amet.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                Who is behind AppName?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faChair} className="mr-2" />
                                What is a chair?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full max-w-sm md:max-w-3xl lg:md:max-w-3xl">
                    {/* Section Name */}
                    <div className="text-xl md:text-2xl lg:text-2xl font-semibold mt-10 text-center">
                        Some other interesting stuff
                    </div>
                    {/* Section Content (Accordion) */}
                    <div className="mt-5">
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                                What does AppName do?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                Who is behind AppName?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                            </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faChair} className="mr-2" />
                                What is a chair?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faChair} className="mr-2" />
                                What is a chair?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faChair} className="mr-2" />
                                What is a chair?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                <FontAwesomeIcon icon={faChair} className="mr-2" />
                                What is a chair?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section 3 */}
            </div>
        </div>
    );
};


export default FaqPage;