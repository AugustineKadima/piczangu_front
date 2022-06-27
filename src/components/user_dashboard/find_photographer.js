import React from "react";
import SideNavUser from "../side_nav_user"; 
import FindPhotographerContent from "./find_photographer_content";
import SearchUser from "./search_user";
import PhotographerCardUser from "./photographer_card_user";

export default function FindPhotographer(){
    return (
        <div>
            
            {/* <div className="find_photographer_container">
                <SideNavUser />
                
                <FindPhotographerContent />

            </div> */}


            <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchUser />
                        <div className="photographer_list_recyclerview">
                        {/* <FindPhotographerContent /> */}
                        <PhotographerCardUser />

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}