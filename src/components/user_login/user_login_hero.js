import React from "react";
import Footer from "../footer";
import { NavLink } from "react-router-dom";


export default function UserLoginHero(){
    return (
        <div>
            <div className="heroContainer loginHeroContainer">
                <div className="opaqueLogin">

                    <div className="login_form">

                        <div className="signup_text_and_logo">
                            <h2>Login</h2>
                            <NavLink to="/"><img  id="logo_img_2" alt="logo" src="../images/logo1.png"></img></NavLink>
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
                        <button>Login</button>

                    </div>
                </div>
                
            </div>

            <div className="cards_holder_login">
                <h2>Our Services</h2>
            <div className="serviceContainer">
                <div className="contentLeftService">
                    <div className="serviceTint">
                        <h3>Sell photos</h3>
                    </div>
                </div>
                <div className="contentRightService">
                    <h3>Start Selling Today</h3>
                    <p>Create an account and upload your products to sell in as little as five minutes. Sign up and start earning today.
                    </p>
                    <button>Create Account</button>

                </div>
            </div> 

            <div className="serviceContainer">
               
                <div className="swappedContentLeftService">
                    <h3>Buy From Our Unlimited Stock</h3>
                    <p>Find high quality photos taken by your favorite photographer. You can also browse and buy photos for your creative project.
                    </p>
                    <button>Get Started</button>
                </div>

                <div className="swappedContentRightService">
                    <div className="serviceTint">
                        <h3>Buy photos</h3>
                    </div>
                </div>
            </div> 

            <div className="serviceContainer">
                <div className="contentLeftService serviceTwo">
                    <div className="serviceTint">
                        <h3>Find Photographer</h3>
                    </div>
                </div>
                <div className="contentRightService">
                    <h3>Find Experienced Photographers</h3>
                    <p>We have an increasingly experienced group of photographers who can be trusted to deliver excellent photos 
                    </p>
                    <button>Book Photographer</button>

                </div>
            </div>

            </div>
            <Footer />
        </div>
    )
}