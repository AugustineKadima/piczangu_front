import React from "react";

export default function Footer(){
    return (
        <div className="footer_wrapper">
            <div className="footer_container">
                    <div className="logo_container_top_nav logo_footer">
                        <img  id="logo_img" alt="logo" src="../images/logo3.png">

                        </img>
                    </div>

                    <div className="footer_content">
                        
                        <div className="footer_item">
                            <h3>Our Company</h3>
                            <a>About Us</a>
                            <a>Community</a>
                            <a>Media</a>
                        </div>

                        <div className="footer_item">
                            <h3>Contact</h3>
                            <a>Physica Location</a>
                            <a>Phone</a>
                            <a>Email</a>
                        </div>

                        <div className="footer_item">
                            <h3>Social Links</h3>
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                        </div>

                        <div className="footer_item">
                            <h3>Photographer</h3>
                            <a href="#">Sign Up</a>
                            <a href="#">Login</a>
                        </div>

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
               
            </div>
        </div>
    )
}