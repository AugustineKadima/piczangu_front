import React from "react";
import { NavLink } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BiArrowBack } from "react-icons/bi"
import { MdOutlineEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

export default function PhotographerDetailsCard(){
    return (
        <div>
            <div className="photographer_details_container">
                <div className="photo_upload_container">

                    <img type="image" className="upload_photo_holder" alt="photographer_img"/>
                    <p>Portfolio: <NavLink to="">Click to view</NavLink></p>
                </div>

                <div className="photographer_info_container">
                    <h3>Photographer Name</h3>
                    <h4><GoLocation />&nbsp;Location</h4>

                    <p>I am a landscape photographer who likes to use portrait hdfdhfdhfdf dfdafd fdsfa f fd ff safasdfdgf gfgfgg sdfdfggdg portrait hdfdhfdhfdf dfdafd fdsfa f fd ff safasdfdgf gfgfgg sdfdfggdg

                    </p>

                    <div className="photographer_ratings_user">


                    </div>

                    <h3 id="rates">Rates</h3>
                    <ul>
                        <li>Studio:</li>
                        <li>Outdoor:</li>
                        <li>Retouching:</li>
                    </ul>

                    <h3 id="rates">Contacts</h3>
                    <ul>
                        <li><MdOutlineEmail/>&nbsp;&nbsp;Email</li>  
                        <li><BsTelephone/>&nbsp;&nbsp;Phone</li>
                    </ul>

                    <button><BiArrowBack /> Back</button>

                </div>

            </div>
        </div>
    )
}