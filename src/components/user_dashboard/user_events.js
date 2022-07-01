import React from "react";
import SideNavUser from "../side_nav_user";
import SearchUser from "./search_user";
import { BsShareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function EventsHome(){
    
    let list = false;

    const eventList = () =>{
        if(list){
            return( 
            <NavLink to="/user/events/details">
                <div className="events_list_user">
                    <p>EventCodeffdw</p>
                    <p><BsShareFill/></p>
                </div>
            </NavLink> 

)
        }else{
            return(
                <div className="no_events_wrapper">
                    <div className="no_events_content" >
                        <h3>You do not have any events</h3>
                        <button>Find Event</button>
                    </div>
                </div>
                

            )
        }
    }
    return (
        <div>

            <div className="find_photographer_container">
                <SideNavUser />
                <div className="find_photographer_wrapper">
                    <div className="find_photographer_content_container">
                        <SearchUser />
                        <div className="photographer_list_recyclerview">
                        {/* <PhotographerDetailsCard /> */}
                            <div className="events_user_wrapper">

                            {eventList()}
                             

                           
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}