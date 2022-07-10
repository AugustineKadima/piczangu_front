import React from "react";
import PhotographerSideNav from "./photographer_sidenav";
import { NavLink } from "react-router-dom";
import PhotographerTopBar from "./photographer_top_bar";

export default function PhotographerWithdrawSetAmount(){
    return (
        <div>
            <PhotographerSideNav />

            <div className="find_photographer_wrapper">
                
                <div className="find_photographer_content_container">

                    <PhotographerTopBar />

                

                    <div className="photographer_list_recyclerview withdraw_container">

                        <div className="transaction_more_holder" >
                            <h3 id="withdrawal_DETAILS_H3">Withdrawal Details</h3>
                        </div>

                        <div className="signup_label_input withdrawal_input">
                            <label>Enter The Amount You Wish To Withdraw</label>
                            <input type="number"></input>
                        </div>

                        <div className="signup_label_input withdrawal_input withdrawal_details_input">
                           <div>
                                <label>Phone Number</label>
                                <input type="number"></input>
                           </div>

                           <button>Update</button>
                        </div>

                        <button id="confirm_withdraw">Withdraw</button>

                    



                    </div>

                

                </div>
            </div>

        </div>
    )
}