import React , {useEffect} from "react";
import Navbar from "../components/navbar_top";
import Hero from "../components/main_landing_page/main_hero";
import ContentPage from "../components/main_landing_page/content_page";
import CustomerTestimonials from "../components/main_landing_page/customer_testimonials";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";


export default function Landing({signUpAndLoginUser}){

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div>
            <Navbar signUpAndLoginUser ={signUpAndLoginUser} />
            <Hero />
            <ContentPage />
            <CustomerTestimonials />
            <Footer />
        </div>
    )
}