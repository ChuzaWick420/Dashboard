import React, { useContext, useEffect, useState } from "react";

import "./case_studies.css";
import { windowSize } from "../layout/layout";

import data from "../../json/case_studies.json";

function ProjectContainer (props) {

    const [section, setSection] = useState([]);

    useEffect(()=>{

        setSection(
            props.study.sections.map((section, index)=>{
                return (
                    <div className="study_section" id={section.id} key={index}>
                        <h4>{section.heading}</h4>
                        {section.paragraphs.map((para, index)=>{
                            return <p key={index}>{para}</p>
                        })}
                    </div>
                );
            })
        );

    }, []);

    return (
        <div id={props.study.id} className="category_container">
            <h1 className="important_text">{props.study.name}</h1>
            <div className="study_details">
                <div>
                    {section}
                </div>
            </div>
        </div>
    );
};

function MobileNav (props) {
    let windowWidth = useContext(windowSize);

    const [activeIcon, setActiveIcon] = useState(
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>
    );

    const [isActive, setActive] = useState(false);

    useEffect(()=>{
        if (isActive == true) {
            setActiveIcon(
                <>
                    <div className="burger_line_1"></div>
                    <div className="burger_line_2"></div>
                </>
            );

            props.nav_controller.handler("study_nav study_nav_active");
        }
        else {
            setActiveIcon(
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            );

            if (props.nav_controller.state != "study_nav")
                props.nav_controller.handler("study_nav study_nav_deactive");
        }
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

const Project = (props) => {

    const [sections, setSections] = useState([]);

    useEffect(()=>{
        
        setSections(
            props.sections.map((section, index)=>{
                return (
                    <a href={`#${section.id}`} key={index} >
                        <p key={index} className="study_project_section">{section.heading}</p>
                    </a>
                );
            })
        );

    }, []);

    return (
        <div className="study_project">
            <a href={`#${props.study_id}`}>
                <p className="study_project_heading">{props.heading}</p>
            </a>
            {sections}
        </div>
    );

}

function Case_Studies() {

    const [navClass, setNavClass] = useState("study_nav");

    function StudyNav (props) {

        const[projects, setProjects] = useState([]);

        useEffect(()=>{

            setProjects(
                props.study_data.map((study, index)=>{
                    return (
                        <Project key={index} heading={study.name} sections={study.sections} study_id={study.id} />
                    );
                })
            );

        }, []);
    
        return (
            <div className={props.active_state}>
                {projects}
            </div>
        );

    }

    const projectNames = data["studies_meta"].map((study)=>{
        return Object.keys(study)[0];
    });

    return (
        <div className="case_studies_container">
 
            <MobileNav 
                nav_controller={{
                    "state": navClass,
                    "handler": setNavClass
            }} />

            <div className="study_list">
                {data["studies_meta"].map((study, index)=>{
                    return <ProjectContainer key={index} study={study} />
                })}
            </div>

            <StudyNav project_names={projectNames} study_data={data["studies_meta"]} active_state={navClass} />
        </div>
    );
}

export default Case_Studies;
