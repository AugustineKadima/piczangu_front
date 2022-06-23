import React from "react";
import SearchUser from "./search_user";
import { NavLink } from "react-router-dom";

export default function UserProfileContent(){
    return (
        <div>
            <div className="photographer_details_container">
                <div className="photo_upload_container">

                    <img type="image" className="upload_photo_holder" alt="photographer_img"/>
                </div>

                <div className="photographer_info_container">
                    <h3>My Profile</h3>

                    <p  ><strong>Name: </strong> my name </p>
                    <p  id="para"><strong>Email: </strong> my email </p>
                    <p  id="para"><strong>User Name: </strong> my user name </p>
                    <p  id="para"><strong>Phone: </strong> my name </p>






                  
                    <NavLink to="/user/profile/edit">
                        <button id="btn_edit_user_profile">Edit</button> 
                    </NavLink>

                </div>

            </div>
        </div>
    )
}