import React from "react";
import SideNavUser from "../side_nav_user";
import SearchUser from "./search_user";
import { BsShareFill, BsFillCloudDownloadFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md"

export default function EventDetailsUser(){
    return (
        <div>

            <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchUser />

                        <div className="top_event_nav">
                            <NavLink to="/user/events"><h4>All Events</h4></NavLink>
                            <h4 id="event_para">Event Detaits</h4>

                        </div>
                        <div className="photographer_list_recyclerview">
                        {/* <PhotographerDetailsCard /> */}
                        
                            <div className="events_user_wrapper wrapper_events">
                             
                                <div className="download_share_event_user">
                                    <p><BsFillCloudDownloadFill /> &nbsp;   Download</p>
                                    <div>
                                        <p id="del"><MdDelete/></p>
                                        <p><BsShareFill /></p>
                                    </div>                                </div>



                                <div className="portfolio_view_section">
                                <div className="section_photos">

                                    <NavLink to="/user/events/details/photo">
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