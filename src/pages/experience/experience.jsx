import React, { useEffect, useState } from "react";

import "./experience.css";

function Experience() {

    const [projectsList, setProjectsList] = useState(null);
    const [experienceList, setExperienceList] = useState(null);

    useEffect(()=>{
        let project_list = [
            "https://github.com/ChuzaWick420/2D-Platformer-Game",
            "https://github.com/ChuzaWick420/Flappy-Bird-Recreation"
        ];

        let xp_list = [
            "Learnt how to make a 2d platformer game, implemented hitboxes, levels, character movement and gravity.",
            "Created a flappy bird clone. There is a series of pipes which move right to left and player presses spacebar to dodge em."
        ];

        let project_links = [];

        for (let project of project_list) {
            project_links.push(
                <li key={project_list.indexOf(project)}>
                    <a href={project} target="_blank">
                        <div className="list_item_container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            <p>{project.substring(19)}</p>
                        </div>
                    </a>
                </li>
            );
        }

        let experience_list = [];

        for (let xp of xp_list) {
            experience_list.push(
                <li key={xp_list.indexOf(xp)}>
                    <div className="list_item_container">
                        <div className="bullet"></div>
                        <p>{xp}</p>
                    </div>
                </li>
            );
        }

        setProjectsList(project_links);
        setExperienceList(experience_list);

    }, []);

    let TimeLineCard = (props)=>{
        return (
            <div className="timeline_card_container">
                <div className="timeline_progress"></div>
                <div className="timeline_card">
                    <h3>{props.header}</h3>
                    <ul className="projects">
                        {projectsList}
                    </ul>
                    <ul className="experience_points">
                        {experienceList}
                    </ul>
                </div>
            </div>
        );
    };

    let TimeLineHistory = (props)=>{
        return (
            <div className="timeline_history">
                <div className="bullet"></div>
                <div className="timeline_extension"></div>
                <p>{props.date}</p>
            </div>
        );
    };

    let TimeLine = ()=>{
        return (
            <div className="timeline">
                <TimeLineHistory date={"2020"} />
                <TimeLineCard header={"Front End dev"} content={"Hello"} />
            </div>
        );
    };

    let TimeLineContainer = ()=>{
        return (
            <div className="timeline_container">
                <TimeLine />
                <div className="bullet"></div>
            </div>
        );
    };

    return (
        <div className="experience_container">
            <div className="category_container">
                <h1 className="important_text">Company Name</h1>
                <TimeLineContainer />
            </div>
        </div>
    );
}

export default Experience;
