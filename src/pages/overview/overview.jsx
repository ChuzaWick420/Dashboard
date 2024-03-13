import React, { useContext, useEffect, useState } from "react";
import { windowSize } from "../layout/layout";

import data from "../../json/projects_data.json";
import contacts from "../../json/contacts.json";
import clients from "../../json/clients.json";
import achievements from "../../json/achievements.json";

import "./overview.css";
import { HashLink } from "react-router-hash-link";

const ActiveProjectID = "proj_4";

function Overview() {

    const [currentProjectCard, setCurrentProjectCard] = useState(<></>);

    useEffect(()=>{

        //go through each category
        for (let category of data["projects"]) {
            for (let project of category[Object.keys(category)[0]]) {
                if (project.id == ActiveProjectID) {
                    setCurrentProjectCard(
                        <div className="project_card_preview">
                            <div className="project_header">
                                <div className="project_details">
                                    <h3 className="important_text">{project.name}</h3>
                                    <h4>Customer: {project.customer}</h4>
                                    <h4>Started at: {project.date}</h4>
                                </div>
                                <div className="project_img">
                                    <img src={project.img_url} />
                                </div>
                            </div>
                            <div className="project_preview">
                                <div className="project_content_section">
                                    <h4>{project.content[0][0]}</h4>
                                    <p>{project.content[0][1]}</p>
                                </div>
                                <div>
                                    <HashLink to={`/projects#${project.id}`}>
                                        <button className="read_more_btn">
                                            Read More
                                        </button>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        }

    }, []);

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
                <div className="bullet"></div>
            </div>
        );
    };

    const [eduSkeleton, setEduSkeleton] = useState(
        <EduDesktop meta_data={education_obj} />
    );

    let windowWidth = useContext(windowSize);

    useEffect(()=>{

        if (windowWidth >= 1024) {
            setEduSkeleton(
                <EduDesktop meta_data={education_obj} />
            );
        }

        else {
            setEduSkeleton(
                <div className="timeline_container">
                    {education_obj.map((obj, index)=>{
                        return (
                            <TimeLine key={index} type="education" content={obj} time={obj["year"]} />
                        );
                    })}
                    <div className="bullet"></div>
                </div>
            );
        }

    }, [windowWidth]);

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

        const EducationCard = (props)=>{
            return (
                <div className="edu_timeline_card">
                    <h4 className="important_text">{props.place}</h4>
                    <p>{props.level}</p>
                    <p><span className="important_text">{props.score}%</span> Score</p>
                </div>
            );        
        };

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
                case "education":
                    setEmbed(
                        <EducationCard place={props.content["name"]} level={props.content["level"]} score={props.content["score"]} />
                    );
            }

        }, []);

        return (
            <TimeLineSection date={props.time} />
        );
    };

    return (
        <div className="overview_container">
            <div className="container">
                <div className="head">
                    <h1>
                        Hello, I am Zaid and I am a Web Developer. I also like to tinger around with technologies and enjoy Mathematics.
                    </h1>
                    <div className="img_container">
                        <img src="/Artorias.png" />
                    </div>
                </div>
                <div className="contacts">
                    {contacts["contacts"].map((contact, index)=>{
                        return (
                            <Contact key={index} imgSrc={contact.img} displayText={contact.name} link={contact.img} />
                        );
                    })}
                </div>
            </div>
            <div className="container">
                <h1 className="important_text">Clients</h1>
                <div className="timeline_container">
                    {clients["clients"].map((client)=>{
                        return (
                            <TimeLine type="client" content={client.comments} img={client.img} time={client.time} />
                        );
                    })}
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="container">
                <h1 className="important_text">Achievements</h1>
                <div className="timeline_container">
                    {achievements["achievements"].map((achievement)=>{
                        return (
                            <TimeLine type="achievement" content={achievement.content} time={achievement.date} />
                        );
                    })}
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="container"> 
                <h1 className="important_text">Education</h1>
                {eduSkeleton}
            </div>
            <div className="container">
                <h1 className="important_text">Working on</h1>
                {currentProjectCard}
            </div>
        </div>
    );
}

export default Overview;
