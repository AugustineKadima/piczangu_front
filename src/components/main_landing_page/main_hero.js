import React from "react";
import UserSteps from "../user_login/user_steps";

export default function Hero(){
    return(
        <div>
            <div className="heroContainer">
                <div className="opaqueContainer">
                    <div className="home_content_holder">
                    <div className="searchContainer">
                        <h2>Access your photos from the recent event you attended</h2>
                        <div className="searchWrapper">
                            <input type="text" placeholder="Please enter the code provided by the photographer"/>
                            <div className="searchButton">
                                <img id="searchIcon" src="./images/search_icon.png" alt="search button"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <UserSteps />
                </div>
            </div>

        </div>
    )
}