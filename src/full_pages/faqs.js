import React from "react";
import Navbar from "../components/navbar_top";
import FaqsContent from "../components/faqs/faqs_content";
import Footer from "../components/footer";


export default function Faqs(){
    return (
        <div>
            <Navbar />
            <FaqsContent />
            <Footer />
        </div>
    )
}