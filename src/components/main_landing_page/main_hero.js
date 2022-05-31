import React from "react";

export default function Hero(){
    return(
        <div>
            <div className="heroContainer">
                <div className="opaqueContainer">
                    <div className="searchContainer">
                        <h2>Keep your memories close</h2>
                        <div className="searchWrapper">
                            <input type="text" placeholder="Please enter the code provided by the photographer"/>
                            <div className="searchButton">
                                <img id="searchIcon" src="./images/search_icon.png" alt="search button"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}