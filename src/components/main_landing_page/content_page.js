import React from "react";
import ServiceCard from "./servicecard";
import ServiceCardSwapped from "./servicecard_swapped";

export default function ContentPage(){
    return (
        <div className="contentOuter">

            <div className="contentWrapperLanding">
                <div className="serviceTitleWrapper">
                    <h2 id="servicesHeader">Our Services</h2>
                </div>
                <ServiceCard />
                <ServiceCardSwapped />

            </div>
            
        </div>
    )
}