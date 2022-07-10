import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import PhotographerTopBar from "./photographer_top_bar";

export default function PhotographerEarnings(){
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

                    <div className="dashboard_top_summary earnings_summary">
                        <div>
                            <h3>0</h3>
                            <p>Sales Amount</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>Orders</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>Downloads</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>Customers</p>
                        </div>
                    </div>

                    <div className="photographer_list_recyclerview">

                        <div className="transaction_more_holder">
                            <h3 id="daily_downloads_header">Transactions</h3>
                            <button>More</button>
                        </div>
                       


                        <div className="graph_holder_photographer_dashboard table_holder">
                            <div className="graph_wrapper_photographer">

                                <table>
                                    <tr>
                                        <th>Transaction Number</th>
                                        <th>Date & Time</th>
                                        <th>Phone Number</th>
                                        <th>Earnings</th>
                                    </tr>

                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </table>

                            </div>
                        </div>


                    </div>

                

                </div>
            </div>
        </div>
    )
}