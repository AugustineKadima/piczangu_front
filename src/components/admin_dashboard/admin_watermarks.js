import React from "react";
import AdminSideNav from "./admin_side_nav";
import { MdDelete } from "react-icons/md";
import PhotographerTopBar from "../photographer_dashboard/photographer_top_bar";


export default function AdminWaterMarks(){
    return (
        <div>
            <AdminSideNav />

            <div className="find_photographer_container">
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <PhotographerTopBar />

                     
                        <div className="photographer_list_recyclerview">
                        
                            <div className="events_user_wrapper wrapper_events wrapper_events_photographer">

                                <h3>Watermarks</h3>

                                <div className="portfolio_view_section">
                                    <div className="section_photos photographer_upload_photos_to_event" >
                                        <input type="file" className="upload_photos"  multiple/>
                                    </div>

                                </div>

                                <div className="portfolio_view_section">
                                <div className="photographer_portfolio_section_container">
                                    <h4>Select Watermark</h4>
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


                                <button>Create</button>

                            </div>

                        </div>

                        

                    </div>
                </div>

            </div>


        </div>
    )
}