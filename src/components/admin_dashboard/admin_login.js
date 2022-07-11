import React from "react";
import { NavLink } from "react-router-dom";

export default function PiczanguAdminLogin(){

    function goToAdminDashBoard(){
        window.replace("/admin/dashboard")
        return null
    }
    return (
        <div>
             <div className="signup_wrapper admin_login_wrapper">
                <div className="user_sign_up_container admin_login_container">
                    <div className="signup_text_and_logo">
                        <h2>Login</h2>
                        <NavLink to="/">
                            <img  id="logo_img_2" alt="logo" src="../images/logo1.png"></img>
                        </NavLink>
                    </div>

             
                    <div className="signup_label_input">
                        <label>Email</label>
                        <input type="email"></input>
                    </div>

                    <div className="signup_label_input">
                        <label>Password</label>
                        <input type="password"></input>
                    </div>

                    <h6> <a href="#"> Forgot password?</a></h6>

                    <button onClick={goToAdminDashBoard}>Login</button>

                </div>
            </div>
        </div>
    )
}