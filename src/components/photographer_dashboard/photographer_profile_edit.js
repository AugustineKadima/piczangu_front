import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";
import { NavLink } from "react-router-dom";


export default function PhotographerProfileEdit(){
    return (
        <div>

<div className="find_photographer_container">
                <PhotographerSideNav />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchPhotographer />
                        <div className="top_event_nav">
                            <NavLink to="/photographer/profile"><h4  className="profile_para">Profile</h4></NavLink>
                            <NavLink to="#"><h4 className="profile_para current_photographer_profile">Edit Profile</h4></NavLink>
                        </div>
                        <div className="photographer_list_recyclerview edit_profile_wrapper_user">
                        {/* <PhotographerDetailsCard /> */}
                            <div className="photographer_details_container edit_sign_up">
                            <form>

                                    <div className="signup_text_and_logo">
                                        <h2>Edit Profile</h2>
                                
                                    </div>

                                    <div className="signup_label_input">
                                        <label>First Name</label>
                                        <input type="text"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Last Name</label>
                                        <input type="text"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Email</label>
                                        <input type="email"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Phone Number</label>
                                        <input type="number"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Location</label>
                                        <input type="text"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Password</label>
                                        <input type="password"></input>
                                    </div>

                                    <div className="signup_label_input">
                                        <label>Confirm Password</label>
                                        <input type="password"></input>
                                    </div>

                                    <div className="signup_label_input">
                                    <button>Save</button>
                                    </div>
                                    </form>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}