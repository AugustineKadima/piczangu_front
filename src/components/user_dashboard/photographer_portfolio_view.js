import React from "react";
import SideNavUser from "../side_nav_user";
import SearchUser from "./search_user";
import { BiArrowBack } from "react-icons/bi";

export default function PhotographerPortfolioView(){
    return (
        <div>

            <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                <div className="find_photographer_content_container">
                    <SearchUser />
                    <div className="photographer_list_recyclerview">
                    {/* <PhotographerDetailsCard /> */}
                        <div className="portfolio_holder">
                            
                            <div className="display_portfolio_top">
                                <div className="photographer_profile_and_name_wrapper_view">
                                    <div className="profile_holder_photographer_view">
                                        <img src="#" alt="p"/>
                                    
                                    </div>
                                    <h3>Photographer Name</h3>
                                </div>
                                <button>Contact</button>
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