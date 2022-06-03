import React from "react";

export default function FaqForm(){
    return (
        <div>
            <div className="faq_form_container">
                <h2>Ask a question</h2>
                <div>
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Question</label>
                    <input  className="question" type="text"></input>
                </div>

                <button>Submit</button>
            </div>
        </div>
    )
}