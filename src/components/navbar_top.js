import React , { useState }from "react"
import { NavLink } from "react-router-dom"

export default function Navbar({signUpAndLoginUser}){ 

    return (
        <div className="top_nav">
            <div className="navWrapper">
                <div className="logo_container_top_nav">
                    <NavLink to="/"> <img  id="logo_img" alt="logo" src="../images/logo1.png"></img></NavLink>
                   
                </div>

                <div className="navs_container_topNav">
                    <NavLink to="/photographers">Find photographer</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help?</NavLink>

                   <NavLink to="/user_sign_up"><button id="signUp">Sign Up</button></NavLink> 
                   <NavLink to="/user_log_in"><button id="login" >Login</button></NavLink>  


                </div>
            </div>
           
        </div>
    )
}