import React from "react";
import AdminSideNav from "./admin_side_nav";
import SearchPhotographer from "../photographer_dashboard/search_photographer";
import { NavLink } from "react-router-dom";
import { BsFillCloudDownloadFill, BsShareFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";


export default function AdminEventDetails(){
    return (
        <div>
  <div className="find_photographer_container">
            <AdminSideNav />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchPhotographer />

                        <div className="top_event_nav">
                            <NavLink to="/photographer/events"><h4>All Events</h4></NavLink>
                            <h4 id="event_para">Event Photos</h4>

                        </div>
                        <div className="photographer_list_recyclerview">
                        {/* <PhotographerDetailsCard /> */}
                        
                            <div className="events_user_wrapper wrapper_events">
                             
                                <div className="download_share_event_user">
                                    <p><BsFillCloudDownloadFill /> &nbsp;   Download</p>
                                    <div>
                                        <p id="add_photos"><MdAddAPhoto /></p>
                                        <p id="del"><MdDelete/></p>
                                        <p><BsShareFill /></p>
                                    </div>                                
                                </div>



                                <div className="portfolio_view_section">
                                <div className="section_photos">

                                    <NavLink to="/photographer/events/photos/photo">
                                        <div className="portfolio_photo_holder">
                                            <img  src="#" alt="p"/>
                                        </div>
                                    </NavLink>
                                    

                                </div>

                            </div>

                           
                            </div>

                        </div>

                    </div>
                </div>

            </div>
</div>
    )
}