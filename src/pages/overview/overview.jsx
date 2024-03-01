import React, { useEffect, useState } from "react";

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

    const TimeLine = (props) => {

        const [embed, setEmbed] = useState(<></>);

        const ClientCard = (props)=>{
            return (
                <div className="client_timeline_card">
                    <q><span>{props.text}</span></q>
                    <div className="separator"></div>
                    <div className="img_container">
                        <img src={props.img}></img>
                    </div>
                </div>
            );
        };

        const AchievementCard = (props) => {
            return (
                <div className="achievement_timeline_card">
                    <p>
                        {props.text}
                    </p>
                </div>
            );
        }

        const TimeLineSection = (props)=>{
            return (
                <div className="timeline">
                    <div className="timeline_history">
                        <div className="bullet"></div>
                        <div className="timeline_extension"></div>
                        <p>{props.date}</p>
                    </div>
                    <div className="timeline_card_container">
                        <div className="timeline_progress"></div>
                        {embed}
                    </div>
                </div>
            );
        }

        useEffect(()=>{
            
            switch(props.type) {
                case "client":
                    setEmbed(
                        <ClientCard text={props.content} img={props.img} />
                    );
                    break;

                case "achievement":
                    setEmbed(
                        <AchievementCard text={props.content} />
                    );
                    break;
            }

        }, []);

        switch (props.type) {
            case "client":
                return (
                    <TimeLineSection date={props.time} />
                );

            case "achievement":
                return (
                    <TimeLineSection date={props.time} />
                );
        }
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
            <div className="container">
                <h1>Clients</h1>
                <div className="timeline_container">
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="container">
                <h1>Achievements</h1>
                <div className="timeline_container">
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <div className="bullet"></div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
