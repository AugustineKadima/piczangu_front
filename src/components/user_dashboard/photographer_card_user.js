import React from "react";
import { GoLocation } from 'react-icons/go';
import { NavLink } from "react-router-dom";

export default function PhotographerCardUser(){
    return (
        <div>
            <NavLink id="photographer_details_link" to="/photographers/details">
            <div className="photographer_card_item">
                <div className="user_image_wrapper_card_item">

                </div>
                <div className="user_content_card_item">
                    <h2>Luqman Photography</h2>
                    <div className="location_wrapper">
                
                         <h4><GoLocation /> Location</h4>
                    </div>
                    <p>I am a photographer based in Nairobi. I shoot weddings, events and personal portraits. I am a photographer based in Nairobi. I shoot weddings, events and personal portraits. I am a photographer based in Nairobi. I shoot weddings, events and personal portraits.  Book me today</p>

                    <div className="ratings_container"></div>
                </div>
            </div>
            </NavLink>
   
        </div>
    )
}