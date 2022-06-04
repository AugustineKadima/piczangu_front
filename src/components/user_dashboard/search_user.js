import React from "react";

export default function SearchUser(){
    return (
        <div>
            <div className="search_container_user">
                <div className="searchWrapper search_input_user">
                    <input type="text" placeholder="Search photographer" className="search_input_user"/>
                    <div className="searchButton searchButtonUser">
                        <img id="searchIcon" src="./images/search_icon.png" alt="search button"/>
                    </div>
                </div>

                <div className="user_icon_wrapper">
                    <div className="user_icon_image_container">
                        
                    </div>
                    <p>User name</p>
                </div>
            </div>
        </div>
    )
}