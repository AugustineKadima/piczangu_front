import React from "react";
import ServiceCard from "./servicecard";

export default function ContentPage(){
    return (
        <div className="contentOuter">

            <div className="contentWrapperLanding">
                <div className="serviceTitleWrapper">
                    <h2 id="servicesHeader">Our Services</h2>
                </div>
                <ServiceCard />

            </div>
            
        </div>
    )
}