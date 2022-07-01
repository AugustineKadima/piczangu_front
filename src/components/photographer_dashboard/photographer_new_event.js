import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";
import { NavLink } from "react-router-dom";
import { BsShareFill, BsFillCloudDownloadFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md"



export default function PhotographerNewEvent(){
    return (
        <div>
            <PhotographerSideNav />

            <div className="find_photographer_container">
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchPhotographer />

                        <div className="top_event_nav">
                            <NavLink to="/photographer/events"><h4>Events</h4></NavLink>
                            <h4 id="event_para">New Event</h4>

                        </div>
                        <div className="photographer_list_recyclerview">
                        
                            <div className="events_user_wrapper wrapper_events wrapper_events_photographer">

                                <h3>Create New Event</h3>
                                <div className="signup_label_input withdrawal_input photographer_event_name_input">
                                    <label>Event Name</label>
                                    <input type="text"></input>
                                </div>

                                <div className="portfolio_view_section">
                                    <div className="section_photos photographer_upload_photos_to_event" >
                                        <input type="file" className="upload_photos"  multiple/>
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