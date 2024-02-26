import React, { useContext, useEffect, useState } from "react";

import "./projects.css";
import { windowSize } from "../layout/layout";

function Projects() {
    
    let windowWidth = useContext(windowSize);
    const [targetWidth, setTargetWidth] = useState(null);
    const [activeClass, setActiveClass] = useState("mobile_nav_container");
    const [navActive, setNavActive] = useState(
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>
    );
    
    let Navigation = ()=>{
        switch (targetWidth) {
            case 425:
                return (
                    <></>
                );
            
            default:
                return (
                    <div className="nav_table">
                        <NavCategory Heading={"Web"} />
                        <NavCategory Heading={"Games"} />
                    </div>
                );

        }
    };

    let MobileNavPopup = () => {
        switch (targetWidth) {
            case 425:
                return (
                    <div className={activeClass}>
                        <NavCategory Heading={"Web"} />
                        <NavCategory Heading={"Games"} />
                    </div> 
                );

            default:
                return <></>;
        }
    };

    let MobileNav = ()=>{
        
        switch (targetWidth) {
            case 425:
                return (
                        <div className="projects_mobile_nav">
                            <div className="bar">
                                <h3 className="important_text">Project_name</h3>
                                <div className="projects_burger" onClick={()=>{
                                    //update the state of the button
                                    if(activeClass == "mobile_nav_container" || activeClass == "mobile_nav_container mobile_nav_container_deactive") {
                                        setNavActive(<>
                                            <div className="line_1"></div>
                                            <div className="line_2"></div>
                                        </>);
                                        setActiveClass("mobile_nav_container mobile_nav_container_active");
                                    }

                                    else {
                                        setNavActive(
                                            <span className="material-symbols-outlined">
                                                arrow_back_ios
                                            </span>
                                        );
                                        setActiveClass("mobile_nav_container mobile_nav_container_deactive")
                                    }
                                }}>
                                    {navActive}
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

    useEffect(()=>{
        setTargetWidth(windowWidth);
        //overwrite what Navigation returns
    }, [windowWidth])

    let ContentSection = ()=>{
        return (
            <div className="projects_content_section">
                <h4>Description Heading</h4>
                <p>content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content </p>
            </div>
        );
    };

    let ProjectCard = ()=>{
        return (
            <div className="project_card">
                <div>
                    <div className="project_header">
                        <div className="project_details">
                            <h3 className="important_text">Project_name</h3>
                            <h4>Customer: @this-guy</h4>
                            <h4>Started at: 1-1-2024</h4>
                        </div>
                        <div className="project_img">
                            <img src="/placeholder.png" />
                        </div>
                    </div>
                    <div className="project_content">
                        <ContentSection />
                        <ContentSection />
                        <ContentSection />
                    </div>
                </div>
            </div>
        );
    };

    let NavProjectOption = (props)=>{
        return (
            <div className="nav_option">
                <p>{props.Project}</p>
            </div>
        );
    };

    let NavCategory = (props)=>{
        return (
            <div className="nav_category">
                <div className="nav_category_heading">
                    <p>{props.Heading}</p>
                </div>
                <NavProjectOption Project={"Project_1"} />
                <NavProjectOption Project={"Project_2"} />
                <NavProjectOption Project={"Project_3"} />
                <NavProjectOption Project={"Project_4"} />
                <NavProjectOption Project={"Project_5"} />
            </div>
        );
    }

    return (
        <div className="projects_container">
            <MobileNav />
            <MobileNavPopup />
            <div className="projects_list">
                <div className="category_container">
                    <h1 className="important_text">Web</h1>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="category_container">
                    <h1 className="important_text">Games</h1>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <Navigation />
        </div>
    );
}

export default Projects;
