import React from "react";
import { NavLink } from "react-router-dom"
import { BiLogOutCircle } from "react-icons/bi"


export default function SideNavUser(){
    return (
        <div>
            <div className="sidenav_user_container">

                <div className="side_nav_elements_container">
                    <div>
                        
                
                            <NavLink to="/">
                                    <img  id="logo_img" alt="logo" src="../images/logo3.png"></img>
                            </NavLink>

                        <div className="sidenav_select">
                            <NavLink to="/"><div className="side_nav_option active">Home</div> </NavLink>
                            <NavLink to="/user/events"><div className="side_nav_option">Events</div></NavLink>
                            <NavLink to="/photographers"> <div className="side_nav_option">Find Photographer</div></NavLink>

                        </div>
                    </div>

                    

                    <div  className="logout">
                    <p><BiLogOutCircle/><span></span> Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}