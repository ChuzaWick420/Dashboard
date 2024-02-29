import React from "react";

import "./overview.css";

function Overview() {

    const Contact = (props) => {
        return (
            <div className="contact_container">
                <a href={props.link} target="_blank">
                    <img src={props.imgSrc} />
                    <p>{props.displayText}</p>
                </a>
            </div>
        );
    };

    return (
        <div className="overview_container">
            <div className="container">
                <div className="head">
                    <h1>
                        Hello, I am person and I do
                        full stack with my lil fingers. I
                        also make cool games though.
                        Ignore the fact that I suck at
                        theme.
                    </h1>
                    <div className="img_container">
                        <img src="/Artorias.png" />
                    </div>
                </div>
                <div className="contacts">
                    <Contact imgSrc="/placeholder.png" displayText="youtube.com/me" link="https://www.youtube.com/" />
                    <Contact imgSrc="/placeholder.png" displayText="github.com/me" link="https://github.com/ChuzaWick420" />
                    <Contact imgSrc="/placeholder.png" displayText="linkedin.com/me" link="https://www.linkedin.com/" />
                    <Contact imgSrc="/placeholder.png" displayText="discord.com/me" link="https://discord.com/" />
                    <Contact imgSrc="/placeholder.png" displayText="facebook.com/me" link="https://www.facebook.com/" />
                    <Contact imgSrc="/placeholder.png" displayText="instagram.com/me" link="https://www.instagram.com/" />
                </div>
            </div>
        </div>
    );
}

export default Overview;
