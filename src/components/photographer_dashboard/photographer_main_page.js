import React from "react";
import PhotographerDashboard from "./photographer_dashboard";
import PhotographerLogin from "../../full_pages/photographer_login";


export default function PhotographerMainPage(){
    let isLogged = false
    
    function logPhotographer(){
        if(isLogged){
            return <PhotographerDashboard />
        }else{
            return <PhotographerLogin />
        }
    }
    return (
        <div>
            <PhotographerLogin />
        </div>
    )
}