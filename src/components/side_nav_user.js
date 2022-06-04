import React from "react";

export default function SideNavUser(){
    return (
        <div>
            <div className="sidenav_user_container">
                <div>
                    
              
                    <div className="logo_container_top_nav logo_footer logo_dashboard">
                        
                                <img  id="logo_img" alt="logo" src="../images/logo3.png"></img>
                    </div>

                    <div className="sidenav_select">
                        <div className="side_nav_option">Events</div>
                        <div className="side_nav_option">Find Photographer</div>
                    </div>
                </div>

                <div  className="logout">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}