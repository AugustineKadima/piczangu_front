import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";
import { NavLink } from "react-router-dom";

export default function PhotographerProfile(){
    return (
        <div>
             <div className="find_photographer_container">
                <PhotographerSideNav />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchPhotographer />

                        <div className="top_event_nav">
                            <NavLink to="/photographer/profile"><h4 className="profile_para current_photographer_profile">Profile</h4></NavLink>
                            <NavLink to="/photographer/portfolio"><h4 className="profile_para">Portfolio</h4></NavLink>


                        </div>
                        <div className="photographer_list_recyclerview">
                        {/* <UserProfileContent /> */}

                            <div className="photographer_details_container">
                                <h3>Complete Setting up your website</h3>
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

                    </div>
                </div>

            </div>
        </div>
    )
}