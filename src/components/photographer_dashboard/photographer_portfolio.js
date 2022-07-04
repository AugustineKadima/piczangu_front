import React from "react";
import { BiArrowBack } from "react-icons/bi";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";

export default function PhotographerPortfolio(){
    return (
        <div>

            <div className="find_photographer_container">
                <PhotographerSideNav />
                <div className="find_photographer_wrapper">
                <div className="find_photographer_content_container">
                    <SearchPhotographer />
                    <div className="photographer_list_recyclerview">
                    {/* <PhotographerDetailsCard /> */}
                        <div className="portfolio_holder">
                            
                            <div className="display_portfolio_top">
                                {/* <div className="photographer_profile_and_name_wrapper_view">
                                    <div className="profile_holder_photographer_view">
                                        <img src="#" alt="p"/>
                                    
                                    </div>
                                    <h3>Photographer Name</h3>
                                </div> */}
                                <button>Edit</button>
                            </div>

                            <div className="portfolio_view_section">
                                <h4>Section Name</h4>
                                <div className="section_photos">

                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>
                                    <div className="portfolio_photo_holder">
                                        <img  src="#" alt="p"/>
                                    </div>

                                </div>

                            </div>

                            <button id="backbtn"><BiArrowBack /> Back</button>


                        </div>

                    </div>

                </div>
            </div>
                {/* <FindPhotographerContent /> */}

            </div>


        </div>
    )
}