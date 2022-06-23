import React from "react";
import SideNavUser from "../side_nav_user";
import UserProfileContent from "./user_profile_content";
import SearchUser from "./search_user";


export default function UserProfile(){
    return (
        <div>
             <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchUser />
                        <div className="photographer_list_recyclerview">
                        {/* <PhotographerDetailsCard /> */}
                        <UserProfileContent />

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}