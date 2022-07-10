import React from "react";
import { NavLink } from "react-router-dom";

export default function PhotographerTopBar(){
    return (
        <div>
            <div className="search_container_user photographer_top_bar">
                       
                    <div className="user_icon_wrapper">
                        <NavLink to="/photographer/profile">
                            <div className="user_icon_image_container">
                                
                            </div>
                        </NavLink>
                        <p>User name</p>
                    </div>

            </div>
        </div>
    )
}