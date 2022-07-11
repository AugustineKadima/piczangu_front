import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi"
import config from "../../config.json"

export default function AdminSideNav(){
    return (
        <div>
             <div className="sidenav_user_container">

<div className="side_nav_elements_container">

    <div>
            <NavLink to="/">
                    <img  id="logo_img" alt="logo" src={config.image_url + "/logo3.png"}></img>
            </NavLink>

        <div className="sidenav_select">
            <NavLink to="/admin/dashboard"><div className="side_nav_option active">Dashboard</div> </NavLink>
            <NavLink to="/admin/watermarks"><div className="side_nav_option active">Watermarks</div> </NavLink>
            <NavLink to="/admin/homepage_photos"><div className="side_nav_option">Homepage Photos</div></NavLink>
            <NavLink to="/admin/earnings"><div className="side_nav_option active">Earnings</div> </NavLink>
            <NavLink to="/admin/transfer_costs"> <div className="side_nav_option">Transfer Costs</div></NavLink>
            <NavLink to="/admin/events"><div className="side_nav_option">Events</div></NavLink>
            <NavLink to="/admin/accounts"> <div className="side_nav_option">Accounts</div></NavLink>
            <NavLink to="/admin/tracking"> <div className="side_nav_option">Tracking</div></NavLink>
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