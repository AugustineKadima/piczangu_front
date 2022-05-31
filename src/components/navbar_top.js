import React from "react"

export default function Navbar(){
    return (
        <div className="top_nav">
            <div className="navWrapper">
                <div className="logo_container_top_nav">
                    <img  id="logo_img" alt="logo" src="../images/logo1.png">

                    </img>
                </div>

                <div className="navs_container_topNav">
                    <a href="#">Find photographer</a>
                    <a href="#">About</a>
                    <a href="#">FAQs</a>

                    <button id="signUp">Sign Up</button>
                    <button id="login">Login</button>


                </div>
            </div>
           
        </div>
    )
}