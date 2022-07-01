import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import { NavLink } from "react-router-dom";
import { BsShareFill } from "react-icons/bs";
import SearchPhotographer from "./search_photographer";

export default function PhotographerEvents(){

    let events_created = false

    const photorgaphyEvents = () =>{
        if(events_created){
            return( 
            
                <div className="events_list_user">
                    {/* <p>EventCodeffdw</p>
                    <p><BsShareFill/></p> */}
                </div>
            )
        }else{
            return(
                <div className="no_events_wrapper">
                    <div className="no_events_content" >
                        <h3>You do not have any active events</h3>
                        <NavLink to="/photographer/events/new"><button>Create Event</button> </NavLink> 
                    </div>
                </div>
                

            )
        }
    }

    return (
        <div>
            <PhotographerSideNav />

            <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchPhotographer />
                        <div className="photographer_list_recyclerview">
                        {/* <PhotographerDetailsCard /> */}
                            <div className="events_user_wrapper">

                            {photorgaphyEvents()}
                             

                           
                            </div>

                        </div>

                    </div>
                </div>


        </div>
    )
}