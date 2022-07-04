import React ,{useEffect} from "react";
import PhotographerDashboard from "./photographer_dashboard";
import PhotographerLogin from "../../full_pages/photographer_login";
import { useLocation } from "react-router-dom";


export default function PhotographerMainPage(){
    let isLogged = false

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
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