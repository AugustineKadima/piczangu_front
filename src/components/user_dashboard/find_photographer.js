import React from "react";
import SideNavUser from "../side_nav_user"; 
import FindPhotographerContent from "./find_photographer_content";

export default function FindPhotographer(){
    return (
        <div>
            <div className="find_photographer_container">
                <SideNavUser />
                <FindPhotographerContent />

            </div>

        </div>
    )
}