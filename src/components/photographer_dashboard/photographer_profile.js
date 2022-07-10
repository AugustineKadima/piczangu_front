import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import SearchPhotographer from "./search_photographer";
import { NavLink } from "react-router-dom";

export default function PhotographerProfile(){

    let photographerTypes = ["Weddings", "Portraits", "Street", "Real Estate"]
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

                            <div className="photographer_details_container photograher_profile_content">
                                <h3>Complete Setting Up Your Profile</h3>
                                <div className="photographer_profile_contaier_1">
                                    <div className="photo_upload_container">

                                        <img type="image" className="upload_photo_holder" alt="photographer_img"/>
                                    </div>
                                    <div className="photographer_info_container">
                                        <p  ><strong>Name: </strong> my name </p>
                                        <p  id="para"><strong>Email: </strong> my email </p>
                                        <p  id="para"><strong>User Name: </strong> my user name </p>
                                        <p  id="para"><strong>Phone: </strong> my name </p>  

                                        <h3>Photographer Type</h3> 
                                        <div className="photographer_type_container">
                                            <ul>
                                                {photographerTypes.map((photographertype) =>{
                                                    return <li key={photographertype}>{photographertype}</li>
                                                })}
                                            </ul>
                                        </div>        

                                        <div className="signup_label_input photographer_add_website_container">
                                            <div>
                                                <label>Add Website</label>
                                                <input type="text"></input>
                                            </div>
                                            <button>Save</button>
                                        </div>                     
                                        <NavLink to="/photographer/profile/edit">
                                            <button id="btn_edit_user_profile">Edit</button> 
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