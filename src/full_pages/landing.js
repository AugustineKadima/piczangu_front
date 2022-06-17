import React from "react";
import Navbar from "../components/navbar_top";
import Hero from "../components/main_landing_page/main_hero";
import ContentPage from "../components/main_landing_page/content_page";
import CustomerTestimonials from "../components/main_landing_page/customer_testimonials";
import Faqs from "../components/main_landing_page/faqs_landing";
import Footer from "../components/footer";
import UserSteps from "../components/user_login/user_steps";

export default function Landing({signUpAndLoginUser}){

    return(
        <div>
            <Navbar signUpAndLoginUser ={signUpAndLoginUser} />
            <Hero />
            <UserSteps />
            <ContentPage />
            <CustomerTestimonials />
            <Footer />
        </div>
    )
}