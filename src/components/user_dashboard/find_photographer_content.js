import React from "react";
import SearchUser from "./search_user";
import PhotographerCardUser from "./photographer_card_user";

export default function FindPhotographerContent(){
    return (
        <div>
            <div className="find_photographer_wrapper">
                <div className="find_photographer_content_container">
                    <SearchUser />
                    <div className="photographer_list_recyclerview">
                        <PhotographerCardUser />
                    </div>

                </div>
            </div>

        </div>
    )
}