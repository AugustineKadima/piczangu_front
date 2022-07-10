import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import PhotographerTopBar from "./photographer_top_bar";



export default function PhotographerDashboard(){
    return (
        <div>
            <PhotographerSideNav />

            <div className="find_photographer_wrapper">
                
                    <div className="find_photographer_content_container">

                        <PhotographerTopBar />

                        <div className="photographer_dashboard_filter">
                            <h2>Summary</h2>
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
                                <p>Active Events</p>
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

                        <div className="photographer_list_recyclerview storage_container_photographer_dashboard">

                            <h3 id="daily_downloads_header">Storage</h3>
                            <div className="dashboard_top_summary space_usage_photographer_dashboard">
                                <div>
                                    <h3>0</h3>
                                    <p>Used Space</p>
                                </div>
                                <div>
                                    <h3>0</h3>
                                    <p>Available Space</p>
                                </div>
                               
                            </div>

                            <button>Buy More Space</button>

                        </div>

                    </div>
                </div>
        </div>
    )
}