import React from "react";
import { MdDelete } from "react-icons/md";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";
import { NavLink } from "react-router-dom";

export default function PhotographerPortfolio(){
    return (
        <div>

            <div className="find_photographer_container">
                <PhotographerSideNav />
                <div className="find_photographer_wrapper">
                <div className="find_photographer_content_container">
                    <SearchPhotographer />
                    <div className="top_event_nav">
                            <NavLink to="/photographer/profile"><h4 className="profile_para" >Profile</h4></NavLink>
                            <NavLink to="/photographer/portfolio"><h4 className="profile_para current_photographer_profile" >Portfolio</h4></NavLink>
                        </div>
                    <div className="photographer_list_recyclerview">
                        <div className="portfolio_holder">
                            
                            <div className="display_portfolio_top">
                             
                                <h3 id="photographer_portfolio_header">My Portfolio</h3>
                                <NavLink to="/photographer/portfolio/new"><button id="new_portffolio_btn">New</button></NavLink>
                            </div>

                            <div className="portfolio_view_section">
                                <div className="photographer_portfolio_section_container">
                                    <h4>Section Name</h4>
                                    <p><MdDelete/></p>
                                </div>
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


                        </div>

                    </div>

                </div>
            </div>
                {/* <FindPhotographerContent /> */}

            </div>


        </div>
    )
}