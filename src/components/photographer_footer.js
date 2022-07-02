import React from "react";
import { BsInstagram, BsTelephone} from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md'

import { FiFacebook, FiTwitter, FiLinkedin} from 'react-icons/fi';
import { NavLink } from "react-router-dom";



export default function PhotographerFooter(){
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
                                <a>About Us</a>
                                <a>Community</a>
                                <a>Media</a>
                            </div>

                            <div className="footer_item">
                                <h3>Contact</h3>
                                <NavLink to={{pathname:"https://maps.app.goo.gl/EMDp9T36shydEVEe6"}} target="_blank"><GoLocation/> <p>Ndemi Road</p> </NavLink>
                                <a><BsTelephone/>  <p>0114168891</p>  </a>
                                <a><MdOutlineEmail/> <p>info@piczangu.com</p> </a>
                            </div>


                            {/* <div className="footer_item">
                                <h3>Photographer</h3>
                                <NavLink to="/photographer_sign_up">Sign Up</NavLink>
                                <NavLink to="/photographer_login">Login</NavLink>
                            </div> */}

                            <div className="footer_item">
                                <h3>Help</h3>
                                <a href="#">FAQs</a>
                            </div>

                            <div className="footer_item">
                                <h3>Legal</h3>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                            </div>

                        </div>

                        <div className="social_icons_footer">
                           
                           <NavLink to=""><p id="facebook"> <FiFacebook/></p></NavLink>
                           <NavLink to=""><p id="instagram"><BsInstagram/></p></NavLink>
                           <NavLink to=""><p id="twitter"><FiTwitter/></p></NavLink>
                           <NavLink to=""><p id="linkedin"><FiLinkedin/></p></NavLink>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}