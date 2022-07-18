import React, {useEffect} from "react";
import Navbar from "../components/navbar_top";
import FaqsContent from "../components/faqs/faqs_content";
import Footer from "../components/footer";
import FaqsHelp from "../components/main_landing_page/faqs_landing";
import { useLocation } from "react-router-dom";


export default function Faqs(){

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Navbar />
            <FaqsHelp />
            <FaqsContent />
            <Footer />
        </div>
    )
}