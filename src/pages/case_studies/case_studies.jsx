import React, { useContext, useEffect, useState } from "react";

import "./case_studies.css";
import { windowSize } from "../layout/layout";

function ProjectContainer (props) {

    const [section, setSection] = useState([]);

    useEffect(()=>{
        let paragraphs = [];

        for (let paragraph of props.content) {
            paragraphs.push(
                <div className="study_section" key={props.content.indexOf(paragraph)}>
                    <h4>{paragraph[0]}</h4>
                    <p>{paragraph[1]}</p>
                </div>
            );
        }

        setSection(paragraphs);

    }, []);

    return (
        <div className="category_container">
            <h1 className="important_text">{props.proj}</h1>
            <div className="study_details">
                <div>
                    {section}
                </div>
            </div>
        </div>
    );
};

function StudyNav (props) {
    
    const[projects, setProjects] = useState([]);

    let windowWidth = useContext(windowSize);

    useEffect(()=>{
        let projects_list = [];

        for (let project of props.project_names) {
            projects_list.push(
                <Project key={props.project_names.indexOf(project)} heading={project} sections={props.meta_gen(props.project_names.indexOf(project))} />
            );
        }

        setProjects(projects_list);

    }, []);

    const Project = (props) => {
        
        const [sections, setSections] = useState([]);
        
        useEffect(()=>{
            let sections_list = [];

            for (let section of props.sections) {
                sections_list.push(
                    <p key={props.sections.indexOf(section)} className="study_project_section">{section}</p>
                );
            }

            setSections(sections_list);

        }, []);

        return (
            <div className="study_project">
                <p className="study_project_heading">{props.heading}</p>
                {sections}
            </div>
        );

    }
 
    switch(windowWidth) {
        case 425:
            return (
                <></>
            );

        default:
            return (
                <div className="study_nav">
                    {projects}
                </div>
            );
    }   

}

function MobileNav (props) {
    let windowWidth = useContext(windowSize);

    const [activeIcon, setActiveIcon] = useState(
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>
    );

    const [isActive, setActive] = useState(false);

    useEffect(()=>{
        if (isActive == true)
            setActiveIcon(
                <>
                    <div className="burger_line_1"></div>
                    <div className="burger_line_2"></div>
                </>
            );
        else
            setActiveIcon(
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            );
    }, [isActive]);

    switch (windowWidth) {
        case 425:
            return (
                <div className="study_mobile_nav">
                    <div className="bar">
                        <h3 className="important_text">Project</h3>
                        <div className="study_burger" onClick={()=>{
                            //toggle the states
                            setActive((pre)=>{
                                return !pre;
                            });
                        }}>
                            {activeIcon}
                        </div>
                    </div>
                    <div className="separator"></div>
                </div>
            );

        default:
            return (
                <></>
            );
    }
}

function Case_Studies() {

    const studies_meta = [
        {
            "Project_1": [
                "Heading_1_P1",
                "Heading_2_P1",
                "Heading_3_P1"
            ]
        },
        {
            "Project_2": [
                "Heading_1_P2",
                "Heading_2_P2",
                "Heading_3_P2"
            ]
        }
    ];

    const projectNames = studies_meta.map((obj)=>{
        return Object.keys(obj)[0];
    });

    function getProjectHeadings (proj_index) {
        return studies_meta[proj_index][projectNames[proj_index]];
    }

    return (
        <div className="case_studies_container">
 
            <MobileNav projects={projectNames} meta_gen={getProjectHeadings} />

            <div className="study_list">
                <ProjectContainer proj={projectNames[0]} content={[
                    [
                        getProjectHeadings(0)[0],
                        "Paragraph"                   
                    ],
                    [
                        getProjectHeadings(0)[1],
                        "Paragraph"
                    ],
                    [
                        getProjectHeadings(0)[2],
                        "Paragraph"
                    ]
                ]} />
                <ProjectContainer proj={projectNames[1]} content={[
                    [
                        getProjectHeadings(1)[0],
                        "study_details_paragraph "
                    ],
                    [
                        getProjectHeadings(1)[1],
                        "study_details_paragraph"
                    ],
                    [
                        getProjectHeadings(1)[2],
                        "study_details_paragraph"
                    ]
                ]} />
            </div>
            <StudyNav project_names={projectNames} meta_gen={getProjectHeadings} />
        </div>
    );
}

export default Case_Studies;
