import React, { useContext, useEffect, useState } from "react";
import { windowSize } from "../layout/layout";

import "./overview.css";

function Overview() {

    const education_obj = [
        {
            "name": "School System",
            "level": "Matric",
            "score": 92,
            "year": 2020
        },
        {
            "name": "College For Boys",
            "level": "ICS",
            "score": 80,
            "year": 2021
        },
        {
            "name": "University of Pakistan",
            "level": "BS-Computer Science",
            "score": 94,
            "year": 2022
        }
    ]; 

    const EduDesktop = (props)=>{
 
        const [timelines, setTimelines] = useState(<></>);
        
        const TimeLineHistory = (props)=>{
            return (
                <div className="desktop_timeline_history">
                    <div className="timeline_date">
                        <div className="timeline_extension"></div>
                        <p>{props.date}</p>
                    </div>
                    <div className="edu_timeline_card">
                        <h4 className="important_text">{props.place}</h4>
                        <p>{props.level}</p>
                        <p><span className="important_text">{props.score}%</span> Score</p>
                    </div>
                </div>
            );
        };

        const TimeLineBone = ()=>{
            return (
                <div className="timeline_bone">
                    <div className="bullet"></div>
                    <div className="timeline_progress"></div>
                </div>
            );
        };

        useEffect(()=>{
            
            let cards_list = [];
            
            for (let obj of props.meta_data) {
                const index = props.meta_data.indexOf(obj);

                if (index % 2 == 0) {
                    cards_list.push(
                        <div className="desktop_timeline" key={index}>
                            <TimeLineHistory date={obj["year"]} place={obj["name"]} score={obj["score"]} level={obj["level"]}/>
                            <TimeLineBone />
                            <div className="timeline_void"></div>
                        </div>
                    );
                }

                else {
                    cards_list.push(
                        <div className="desktop_timeline" key={index}>
                            <div className="timeline_void"></div>
                            <TimeLineBone />
                            <TimeLineHistory date={obj["year"]} place={obj["name"]} score={obj["score"]} level={obj["level"]}/>
                        </div>
                    );
                }
            }

            setTimelines(cards_list);

        }, []);

 
        return (
            <div className="desktop_timeline_container">
                {timelines}
            </div>
        );
    };

    const [eduSkeleton, setEduSkeleton] = useState(
        <EduDesktop meta_data={education_obj} />
    );

    let windowWidth = useContext(windowSize);

    // useEffect(()=>{

    //     if (windowWidth != 1024) {
    //         setEduSkeleton(
    //         );
    //     }

    // }, [windowWidth]);

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
                <h1 className="important_text">Clients</h1>
                <div className="timeline_container">
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <TimeLine type="client" content={"text"} img={"/placeholder.png"} time="2020" />
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="container">
                <h1 className="important_text">Achievements</h1>
                <div className="timeline_container">
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <TimeLine type="achievement" content="Hello World" time="2020" />
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="container"> 
                <h1 className="important_text">Education</h1>
                {eduSkeleton}
            </div>
        </div>
    );
}

export default Overview;
