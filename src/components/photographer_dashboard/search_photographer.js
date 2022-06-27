import React from "react";
import { NavLink } from "react-router-dom";

export default function SearchPhotographer(){
    return (
        <div>
            <div className="search_container_user">
                <div className="searchWrapper search_input_user">
                    <input type="text" placeholder="Search photographer" className="search_input_user"/>
                    <div className="searchButton searchButtonUser">
                        <img id="searchIcon" src="../images/search_icon.png" alt="search button"/>
                    </div>
                </div>

                

                    <div className="user_icon_wrapper">
                        <NavLink to="/user/profile">
                            <div className="user_icon_image_container">
                                
                            </div>
                        </NavLink>
                        <p>User name</p>
                    </div>

              
            </div>
        </div>
    )
}