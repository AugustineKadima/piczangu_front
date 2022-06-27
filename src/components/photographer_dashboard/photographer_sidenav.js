import React from "react";
import { NavLink } from "react-router-dom";

export default function PhotographerSideNav(){
    return (
        <div>
        <div className="sidenav_user_container">
            <div>
                
          
                <div className="logo_container_top_nav logo_footer logo_dashboard">
                    <NavLink to="/">
                            <img  id="logo_img" alt="logo" src="../images/logo3.png"></img>
                    </NavLink>
                </div>

                <div className="sidenav_select">
                    <NavLink to="/photographer/home"><div className="side_nav_option active">Home</div> </NavLink>
                    <NavLink to="/photographer/dashboard"><div className="side_nav_option active">dashboard</div> </NavLink>
                    <NavLink to="/photographer/events"><div className="side_nav_option">Events</div></NavLink>
                    <NavLink to="/photographer/earnings"><div className="side_nav_option active">Earnings</div> </NavLink>
                    <NavLink to="/photographer/withdraw"> <div className="side_nav_option">Widthraw</div></NavLink>

                </div>
            </div>

            

            <div  className="logout">
                <p>Logout</p>
            </div>
        </div>
    </div>
    )
}