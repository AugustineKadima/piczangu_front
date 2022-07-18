import React from "react";
import AdminSideNav from "./admin_side_nav";
import PhotographerEventsTopBar from "../photographer_dashboard/events_top_bar";
import { NavLink } from "react-router-dom";
import { BsShareFill } from "react-icons/bs"


export default function AdminEvents(){
    return (
        <div>
            <AdminSideNav />

            <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <PhotographerEventsTopBar />
                        <div className="photographer_list_recyclerview">
                            <div className="events_user_wrapper">

                            {/* {photorgaphyEvents()} */}
                            <NavLink to="/admin/event/photos" >
                                <div className="events_list_user">
                                    <p>EventCodeffdw</p>
                                    <p><BsShareFill/></p>
                                </div>
                            </NavLink>

                           
                            </div>

                        </div>

                    </div>
                </div>

        </div>
    )
}