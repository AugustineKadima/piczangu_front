import React from "react";

export default function TeamCard(){

    let joshuaTxt = `With a background in BTech. Microprocessor Technology & Instrumentation, our CEO is a solutions oriented leader who has a passion for technology, more so, how to use technology as a means to provide solutions.  

    Joshua is also strongly committed to impacting people’s lives even as he spearheads the company. One of the solutions that continues to transform the lives of his fellow photographers and clients, is the mission of Piczangu; making the photo sharing process a whole lot easier and making sure our photographers can earn a decent living from their work. 
    
    As a photographer himself, Joshua and his team are keen on seeing Piczangu grow to newer markets beyond Kenya and ensure that its impact is felt on international grounds. Far from that, our CEO spends most of his time learning, continuously investing in himself and his time to his community and friends. 
    `
    return (
        <div>
             <div className="serviceContainer teamcard">
                <div className="contentLeftService teamcardImg">
                    <img src="./images/joshua_about.jpg"></img>
                </div>
                <div className="contentRightService contentRightAbout">
                    <h3>Joshua Nyantika</h3>
                    <h4>Co-Founder & CEO</h4>
                    <p>
                        {joshuaTxt}
                    </p>

                </div>
            </div> 
        </div>
    )
}