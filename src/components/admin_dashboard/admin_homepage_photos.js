import React from "react";
import { MdDelete } from "react-icons/md";
import PhotographerTopBar from "../photographer_dashboard/photographer_top_bar";
import AdminSideNav from "./admin_side_nav";

export default function HomepagePhotos(){

    return (
        <div>
            <AdminSideNav />

            <div className="find_photographer_container">
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <PhotographerTopBar />

                     
                        <div className="photographer_list_recyclerview">
                        
                            <div className="events_user_wrapper wrapper_events wrapper_events_photographer">

                                <h3>Homepage Photos</h3>

                                <div className="portfolio_view_section">
                                    <div className="section_photos photographer_upload_photos_to_event" >
                                        <input type="file" className="upload_photos"  multiple/>
                                    </div>

                                </div>

                                <div className="portfolio_view_section">
                                <div className="photographer_portfolio_section_container">
                                    <h4>Select Photo</h4>
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


                                <button>Add</button>

                            </div>

                        </div>

                        

                    </div>
                </div>

            </div>


        </div>
    )

}