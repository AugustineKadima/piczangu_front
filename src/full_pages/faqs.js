import React from "react";
import Navbar from "../components/navbar_top";
import FaqsContent from "../components/faqs/faqs_content";
import Footer from "../components/footer";
import FaqsHelp from "../components/main_landing_page/faqs_landing";


export default function Faqs(){
    return (
        <div>
            <Navbar />
            <FaqsHelp />
            <FaqsContent />
            <Footer />
        </div>
    )
}