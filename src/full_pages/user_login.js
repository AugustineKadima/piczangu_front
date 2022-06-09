import React from "react";
import UserLoginHero from "../components/user_login/user_login_hero";
import UserSteps from "../components/user_login/user_steps";
import Footer from "../components/footer";

export default function UserLogin(){
    return (
        <div>
            <UserLoginHero />
            <UserSteps />
            <Footer />

        </div>
    )
}