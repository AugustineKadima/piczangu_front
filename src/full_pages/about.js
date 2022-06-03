import React from "react";
import Navbar from "../components/navbar_top";
import AboutHero from "../components/about/about_hero";
import AboutContent from "../components/about/about_content";
import Footer from "../components/footer";


export default function About(){
    return (
        <div>
            <Navbar />
            <AboutHero />
            <AboutContent />
            <Footer />
            

        </div>
    )
}