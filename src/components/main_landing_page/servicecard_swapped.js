import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export default function ServiceCardSwapped(){

    let buyTxt =`
    As a client, it can be a hustle to access your photos especially after an event is over. With Piczangu however, you do not have to worry about that anymore. Simply make sure you have your 6 digit code as provided by your photographer, that will give you direct access to your photos that you can access from any digital device. The hustle of having to wait for ages in order to get those Instagram worthy photos ends today!
    `
    return (
        <div>
             <div className="serviceContainer">
               
                <div className="swappedContentLeftService">
                    <h3>Start buying today</h3>
                    <p>{buyTxt}</p>
                    <button>Get Started &nbsp;<BiRightArrowAlt/></button>
                </div>

                <div className="swappedContentRightService">
                    <div className="serviceTint">
                        <h3>Buy photos</h3>
                    </div>
                </div>
            </div> 
        </div>
    )
}