import React from "react";
import { NavLink } from "react-router-dom"


export default function SideNavUser(){
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
                        <NavLink to="/"><div className="side_nav_option">Home</div> </NavLink>
                        <NavLink to="/user/events"><div className="side_nav_option">Events</div></NavLink>
                        <NavLink to="/photographers"> <div className="side_nav_option">Find Photographer</div></NavLink>

                    </div>
                </div>

                

                <div  className="logout">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}