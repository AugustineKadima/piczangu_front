import React from "react";

export default function TeamCardSwapped(){

    let kadimaTxt = `Samuel is a software developer with a Bsc. in Astronomy and Astrophysics. As an entrepreneur, our CTO is passionate about providing solutions through technology. Hel is also keen on ensuring that he and his team are fully equipped with the right skills and expertise that will enable them to provide products and services that transform people’s lives. 

    Here at Piczangu, Samuel is responsible for developing our site and managing the technical teams that are collaborating to ensure that Piczangu is functioning at its absolute best. During his free time, our CTO also triples up as a photographer. 
    
    We are honored to have you as part of the team, Samuel!  
    `
    return (
        <div>
            <div className="serviceContainer teamcard">
               
                <div className="contentRightService swappedContentLeftService contentRightSwappedAbout">
                    <h3>Samuel Kadima</h3>
                    <h4>Co-Founder & CTO</h4>
                    <p>{kadimaTxt}
                    </p>
                </div>
                
                <div className="contentLeftService teamcardImg">
                    <img id="kadima_img" src="./images/kadima_about.jpg"></img>
                </div>
        </div> 
        </div>
    )
}