import React, {useEffect} from "react";
import UserLoginHero from "../components/user_login/user_login_hero";
import UserSteps from "../components/user_login/user_steps";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

export default function UserLogin(){

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <UserLoginHero />
            <UserSteps />
            <Footer />

        </div>
    )
}