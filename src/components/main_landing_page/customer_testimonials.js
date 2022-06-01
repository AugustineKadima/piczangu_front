import React from "react";
import TestimonialCard from "./testimonial_card";


export default function CustomerTestimonials(){
    return (
        <div>
            <div className="testimonialsContainer">
                <div className="testimonyWrapper">
                    <h2>Customer Testimonials</h2>
                    <TestimonialCard />
                </div>
            </div>
        </div>
    )
}