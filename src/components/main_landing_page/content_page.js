import React from "react";
import ServiceCardSwapped from "./servicecard_swapped";
import ServiceCardTwo from "./servicecardtwo";


export default function ContentPage(){
    return (
        <div className="contentOuter">

            <div className="contentWrapperLanding">
                <div className="serviceTitleWrapper">
                    <h2 id="servicesHeader">Our Services</h2>
                </div>
                <ServiceCardTwo />

                <ServiceCardSwapped />

            </div>
            
        </div>
    )
}