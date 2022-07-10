import React, {useEffect} from "react";
import Navbar from "../components/navbar_top";
import AboutHero from "../components/about/about_hero";
import AboutContent from "../components/about/about_content";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";



export default function About(){

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Navbar />
            <AboutHero />
            <AboutContent />
            <Footer />
            

        </div>
    )
}