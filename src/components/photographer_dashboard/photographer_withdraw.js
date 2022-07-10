import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import { NavLink } from "react-router-dom";
import PhotographerTopBar from "./photographer_top_bar";


export default function PhotographerWithdraw(){
    return (
        <div>
            <PhotographerSideNav />


            <div className="find_photographer_wrapper">
                
                <div className="find_photographer_content_container">

                    <PhotographerTopBar />

                
                    <div className="photographer_withdraw_top">
                        <div className="withdraw_wrapper">
                            <h2>KSh. 0</h2>
                            <h6>Unpaid Earnings</h6>
                            <p>*Kindly note: You are able to withdraw only when you have at least Kshs. 500 in Unpaid earnings.</p>
                            <NavLink to="/photographer/withdraw/details" ><button>Withdraw</button></NavLink>
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
                                        <th>Status</th>
                                        <th>Earnings</th>
                                    </tr>

                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>Completed</td>
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