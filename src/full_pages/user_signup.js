import React from "react";

export default function UserSignUp(){
    return (
        <div>
            <div className="signup_wrapper">
                <div className="user_sign_up_container">
                <div className="signup_text_and_logo">
                    <h2>Sign Up</h2>
                    <img  id="logo_img_2" alt="logo" src="../images/logo1.png"></img>
                </div>

                <div className="signup_label_input">
                    <label>First Name</label>
                    <input type="text"></input>
                </div>

                <div className="signup_label_input">
                    <label>Last Name</label>
                    <input type="text"></input>
                </div>

                <div className="signup_label_input">
                    <label>Email</label>
                    <input type="email"></input>
                </div>

                <div className="signup_label_input">
                    <label>Phone Number</label>
                    <input type="number"></input>
                </div>

                <div className="signup_label_input">
                    <label>Password</label>
                    <input type="password"></input>
                </div>

                <div className="signup_label_input">
                    <label>Confirm Password</label>
                    <input type="password"></input>
                </div>

                <h6>By creating this account you are agreeing to Piczangu <a href="#"> terms and services</a>.</h6>
                <button>Sign Up</button>

                </div>
            </div>
            
        </div>
    )
}