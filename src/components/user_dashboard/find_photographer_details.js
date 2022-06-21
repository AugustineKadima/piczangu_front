import React from "react";
import SearchUser from "./search_user";
import SideNavUser from "../side_nav_user";
import PhotographerDetailsCard from "./photographer_details_card";

export default function FindPhotographerDetails(){
    return (
        <div>
            {/* <SideNavUser />
            <SearchUser /> */}

            <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                <div className="find_photographer_content_container">
                    <SearchUser />
                    <div className="photographer_list_recyclerview">
                    <PhotographerDetailsCard />

                    </div>

                </div>
            </div>
                {/* <FindPhotographerContent /> */}

            </div>

        </div>
    )
}