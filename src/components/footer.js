import React from "react";
import { BsInstagram, BsTelephone} from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md'

import { FiFacebook, FiTwitter, FiLinkedin} from 'react-icons/fi';
import { NavLink } from "react-router-dom";



export default function Footer(){

    function navigateToFB(){
        window.open("https://www.facebook.com/PiczanguApp","_blank")
        return null
    }

    function navigateToInsta(){
        window.open("https://www.instagram.com/piczangu/","_blank")
        return null
    }

    function navigateToTwitter(){
        window.open("https://twitter.com/piczangu","_blank")
        return null
    }

    function navigateToLinkedIn(){
        window.open("https://www.linkedin.com/company/68817489/admin/","_blank")
        return null
    }

    function navigateToPiczanguLocation(){
        window.open("https://maps.app.goo.gl/EMDp9T36shydEVEe6","_blank")
        return null
    }

    function navigateToTelegram(){
        window.open("https://t.me/+M9vHxJlR-V4xMjZk","_blank")
        return null
    }
    return (
        <div className="footer_wrapper">
            <div className="footer_container">
                    <div className="logo_container_top_nav logo_footer">
                        <img  id="logo_img" alt="logo" src="../images/logo3.png">

                        </img>
                    </div>

                    <div className="footer_right">
                        <div className="footer_content">
                            
                            <div className="footer_item">
                                <h3>Our Company</h3>
                                <NavLink to="/about">About Us</NavLink>
                                <a onClick={navigateToTelegram}>Community</a>
                                <a>Media</a>
                            </div>

                            <div className="footer_item">
                                <h3>Contact</h3>
                                <NavLink to="" target="_blank"><GoLocation/> <p onClick={navigateToPiczanguLocation}>Ndemi Road</p> </NavLink>
                                <a><BsTelephone/>  <p>0114168891</p>  </a>
                                <a><MdOutlineEmail/> <p>info@piczangu.com</p> </a>
                            </div>


                            <div className="footer_item">
                                <h3>Photographer</h3>
                                <NavLink to="/photographer_sign_up">Sign Up</NavLink>
                                <NavLink to="/photographer_login">Login</NavLink>
                            </div>

                            <div className="footer_item">
                                <h3>Help</h3>
                                <NavLink to="/help">FAQs</NavLink>
                            </div>

                            <div className="footer_item">
                                <h3>Legal</h3>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                            </div>

                        </div>

                        <div className="social_icons_footer">
                           
                           <NavLink to="" target="_blank"><p id="facebook" onClick={navigateToFB}> <FiFacebook/></p></NavLink>
                           <NavLink to="" target="_blank"><p id="instagram" onClick={navigateToInsta}><BsInstagram/></p></NavLink>
                           <NavLink to="" target="_blank"><p id="twitter" onClick={navigateToTwitter}><FiTwitter/></p></NavLink>
                           <NavLink to="" target="_blank"><p id="linkedin" onClick={navigateToLinkedIn}><FiLinkedin/></p></NavLink>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}