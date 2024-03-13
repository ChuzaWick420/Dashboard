import React, { createContext, useContext, useEffect, useState } from "react";

import "./projects.css";
import { windowSize } from "../layout/layout";
import data from "../../json/projects_data.json";

let activeProjectContext = createContext();

function NavProjectOption (props) {
    let activeProject = useContext(activeProjectContext);
    const [highlighted, setHighlighted] = useState("");
    
    useEffect(()=>{
        if (props.proj_id == activeProject.state)
            setHighlighted("important_text");
        
        return ()=>{
            setHighlighted("");
        };

    }, [activeProject.state]);
    
    return (
        <div className="nav_option" onClick={()=>{
            //perform linear search and compare the ids to figure out index value
            activeProject.handler(props.proj_id);
        }}>
            <a href={`#${props.proj_id}`}>
                <p className={highlighted}>{props.proj_name}</p>
            </a>
        </div>
    );
};

function NavCategory(props) {
   
    const [projects, setProjects] = useState([]);   

    useEffect(()=>{
        let projects_list = [];

        props.meta_data.map((obj)=>{
            let current_key = Object.keys(obj)[0];

            if (current_key == props.Heading) {
                for (let project of obj[current_key]){
                    projects_list.push(
                        <NavProjectOption key={obj[current_key].indexOf(project)} proj_name={project.name} proj_id={project.id} />
                    );
                }
            }
        });

        setProjects(projects_list);

    }, []);

    return (
        
        <div className="nav_category">
            
            <div className="nav_category_heading">
                <p>{props.Heading}</p>
            </div>

            {projects}
        
        </div>
    );
};

function Navigation(props) {

    let windowWidth = useContext(windowSize);

    const [activeProject, setActiveProject] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        let categories_list = [];

        for (let section of props.sections) {
            categories_list.push(
                <NavCategory key={props.sections.indexOf(section)} Heading={section} meta_data={props.meta_data}/>
            );
        }

        setCategories(categories_list);

    }, []);

    switch (windowWidth) {
        case 425:
        case 768:
            return (
                <></>
            );
        
        default:
            return (
                <activeProjectContext.Provider value={{
                    "state": activeProject,
                    "handler": setActiveProject,
                    "data": props.meta_data 
                }}>
                    <div className="nav_table">
                        {categories}
                    </div>
                </activeProjectContext.Provider>
            );

    }
};

function MobileNav(props) {
    
    let windowWidth = useContext(windowSize);
    
    switch (windowWidth) {

        case 768:
        case 425:
            return (
                    <div className="projects_mobile_nav">
                        <div className="bar">
                            <h3 className="important_text">Project_name</h3>
                            <div className="projects_burger" onClick={()=>{
                                //update the state of the button
                                if(props.popupStatus == "mobile_nav_container" || props.popupStatus == "mobile_nav_container mobile_nav_container_deactive") {
                                    props.iconUpdater(<>
                                        <div className="line_1"></div>
                                        <div className="line_2"></div>
                                    </>);
                                    props.popupTrigger("mobile_nav_container mobile_nav_container_active");
                                }

                                else {
                                    props.iconUpdater(
                                        <span className="material-symbols-outlined">
                                            arrow_back_ios
                                        </span>
                                    );
                                    props.popupTrigger("mobile_nav_container mobile_nav_container_deactive")
                                }
                            }}>
                                {props.icon}
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
};

function ContentSection(props) {
    return (
        <div className="projects_content_section">
            <h4>{props.header}</h4>
            <p>{props.para}</p>
        </div>
    );
};

function ProjectCard(props) {

    const [content, setContent] = useState([]);

    useEffect(()=>{
        let content_list = [];

        for (let paragraph of props.content) {
            content_list.push(
                <ContentSection key={props.content.indexOf(paragraph)} header={paragraph[0]} para={paragraph[1]} />
            );
        }

        setContent(content_list);
    }, []);

    return (
        <div className="project_card" id={props.proj_id}>
            <div>
                <div className="project_header">
                    <div className="project_details">
                        <h3 className="important_text">{props.name}</h3>
                        <h4>Customer: {props.customer}</h4>
                        <h4>Started at: {props.date}</h4>
                    </div>
                    <div className="project_img">
                        <img src="/placeholder.png" />
                    </div>
                </div>
                <div className="project_content">
                    {content}
                </div>
            </div>
        </div>
    );
};

function Projects() {
    
    const [activeClass, setActiveClass] = useState("mobile_nav_container");
    const [navActive, setNavActive] = useState(
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>
    );
    
    let projects_meta = data["projects"];

    let categories = projects_meta.map((obj)=>{
        return Object.keys(obj)[0];
    });

    let MobileNavPopup = (props) => {

        let windowWidth = useContext(windowSize);
    
        const [activeProject, setActiveProject] = useState(null);
        const [categories, setCategories] = useState([]);

        useEffect(()=>{
            let categories = [];

            for (let category of props.sections) {
                categories.push(
                    <NavCategory key={props.sections.indexOf(category)} Heading={category} meta_data={props.meta_data}/>
                );
            }

            setCategories(categories);
        }, []);

        switch (windowWidth) {
            case 768:
            case 425:
                return (
                    <activeProjectContext.Provider value={{
                        "state": activeProject,
                        "handler": setActiveProject,
                        "data": props.meta_data 
                    }}>
                        <div className={props.popupStatus}>
                            {categories}
                        </div> 
                    </activeProjectContext.Provider>
                );

            default:
                return <></>;
        }
    };

    return (
        <div className="projects_container">

            <MobileNav icon={navActive} popupStatus={activeClass} iconUpdater={setNavActive} popupTrigger={setActiveClass} />
            <MobileNavPopup popupStatus={activeClass} sections={categories} meta_data={projects_meta} />

            <div className="projects_list">

                {categories.map((cat, cat_index)=>{
                    return (
                        <div key={cat_index} className="category_container">
                            <h1 className="important_text">{cat}</h1>
                            {projects_meta[cat_index][cat].map((proj, proj_index)=>{
                                return (
                                    <ProjectCard key={proj_index} proj_id={proj.id} name={proj.name} customer={proj.customer} date={proj.date} img_url={proj.img_url} content={proj.content} />
                                );
                            })}
                        </div>
                    );
                })}

            </div>

            <Navigation sections={categories} meta_data={projects_meta} />
        </div>
    );
}

export default Projects;
