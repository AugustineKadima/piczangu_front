import React from "react";
import TeamCard from "./team_card";
import TeamCardSwapped from "./teamcard_swapped";

export default function AboutContent(){
    return (
        <div>
            <div className="about_content_container">
                <h2 id="about_our_team">Our Team</h2>
                <TeamCard />
                <TeamCardSwapped />


            </div>

        </div>
    )
}