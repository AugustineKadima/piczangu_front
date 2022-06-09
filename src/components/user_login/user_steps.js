import React from "react";

export default function UserSteps(){
    return (
        <div>
            <div className="user_steps_container">
                <div className="user_steps_wrapper">
                    <h2>Get your photos in easy steps</h2>
                    
                    <div className="all_steps">
                        <div className="single_step_container">
                            <div className="single_stape_opaque">
                                <div className="dummy_container">
                                    <div className="dummy_input"><p>Email</p></div>
                                    <div className="dummy_input"><p>Password</p></div>
                                </div>
                                <div className="step_one">
                                    <p>1. Login</p>
                                </div>
                            </div>
                        </div>

                        <div className="single_step_container single_step_container_2">
                            <div className="single_stape_opaque">
                                <div className="dummy_container">
                                    <div className="dummy_input"><p>768728</p></div>
                                </div>
                                <div className="step_one">
                                    <p>2. Insert Code</p>
                                </div>
                            </div>
                        </div>

                        <div className="single_step_container single_step_container_2">
                            <div className="single_stape_opaque">
                                <div className="dummy_container">
                                    <div className="dummy_input"><p>768728</p></div>
                                </div>
                                <div className="step_one">
                                    <p>3. Select Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}