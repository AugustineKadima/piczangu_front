import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi"
import config from "../../config.json"

export default function PhotographerSideNav(){

    return (
        <div>
        <div className="sidenav_user_container">

            <div className="side_nav_elements_container">

                <div>
                        <NavLink to="/">
                                <img  id="logo_img" alt="logo" src={config.image_url + "/logo3.png"}></img>
                        </NavLink>

                    <div className="sidenav_select">
                        <NavLink to="/photographer/home"><div className="side_nav_option active">Home</div> </NavLink>
                        <NavLink to="/photographer/dashboard"><div className="side_nav_option active">dashboard</div> </NavLink>
                        <NavLink to="/photographer/events"><div className="side_nav_option">Events</div></NavLink>
                        <NavLink to="/photographer/earnings"><div className="side_nav_option active">Earnings</div> </NavLink>
                        <NavLink to="/photographer/withdraw"> <div className="side_nav_option">Withdraw</div></NavLink>

                    </div>
                </div>

            

                <div  className="logout logout_2">
                    <p><BiLogOutCircle/><span></span> Logout</p>
                </div>

            </div>
        </div>
    </div>
    )
}