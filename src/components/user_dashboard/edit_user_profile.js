import React from "react";
import SideNavUser from "../side_nav_user";
import SearchUser from "./search_user";
import { BiArrowBack } from "react-icons/bi";


export default function EditUserProfile(){
    return (
        <div>
             <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchUser />
                        <div className="photographer_list_recyclerview edit_profile_wrapper_user">
                        {/* <PhotographerDetailsCard /> */}
                            <div className="photographer_details_container edit_sign_up">
                            <form>

                                    <div className="signup_text_and_logo">
                                        <h2>Edit Profile</h2>
                                        <p id="backbtn"><BiArrowBack />   Back</p>
                                
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