import React from "react";
import { GoLocation } from 'react-icons/go';

export default function PhotographerCardUser(){
    return (
        <div>
            <div className="photographer_card_item">
                <div className="user_image_wrapper_card_item">

                </div>
                <div className="user_content_card_item">
                    <h2>Luqman Photography</h2>
                    <div className="location_wrapper">
                
                         <h4><GoLocation /> Location</h4>
                    </div>
                    <p>I am a photographer based in Nairobi. I shoot weddings, events and personal portraits. Book me today</p>

                    <div className="ratings_container"></div>
                </div>
            </div>
   
        </div>
    )
}