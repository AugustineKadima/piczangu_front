import React from "react";
import AdminSideNav from "./admin_side_nav";
import PhotographerTopBar from "../photographer_dashboard/photographer_top_bar";

export default function AdminDashBoard(){
    return (
        <div>
            <AdminSideNav />

            <div className="find_photographer_wrapper">
                
                <div className="find_photographer_content_container">

                    <PhotographerTopBar />

                    <div className="photographer_dashboard_filter">
                        <h2>Performance Summary</h2>
                        <label>Filter</label>
                        <select type="select">
                            <option>Daily</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    <div className="dashboard_top_summary">
                        <div>
                            <h3>0</h3>
                            <p>Income Made</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>Photos Sold</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>New Users</p>
                        </div>
                    </div>

                    <div className="photographer_list_recyclerview">

                        <h3 id="daily_downloads_header">Daily Downloads</h3>

                        <div className="graph_holder_photographer_dashboard">
                            <div className="graph_wrapper_photographer"></div>
                        </div>

                        <div className="events_user_wrapper">


                       
                        </div>

                    </div>

                    

                </div>
            </div>
            
        </div>
    )
}