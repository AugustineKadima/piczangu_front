import React from "react";
import { BiRightArrowAlt } from "react-icons/bi"


export default function ServiceCardTwo(){

    let photographerTxt = `
    Here at Piczangu, we are not just in the business of buying and selling photos. Even as we ensure that the needs of both the photographer and the client are met, we also help to bridge the gap between these two important parties. How do we do this? 

    If you have an upcoming event and are in need of a photographer, then be sure to check out the talent portfolios from our community of photographers, and because we know you will like what you see, find the perfect photographer for that important event. 
    
    CTA: But don’t take our word for it, check portfolios here. 
    
    `
    return (
        <div>
            <div className="serviceContainer">
                <div className="contentLeftService serviceTwo">
                    <div className="serviceTint">
                        <h3>Find Photographer</h3>
                    </div>
                </div>
                <div className="contentRightService">
                    <h3>Find a photographer</h3>
                    <p>{photographerTxt} </p>
                    <button>Sign up here now &nbsp;<BiRightArrowAlt/></button>

                </div>
            </div> 
     


        </div>
    )
}