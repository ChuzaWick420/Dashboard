import React from "react";

import "./projects.css";

function Projects() {

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

    return (
        <div className="projects_container">
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
            <div className="nav_table">
                <div className="nav_category">
                    <div className="nav_category_heading">
                        <p>Web</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_1</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_2</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_3</p>
                    </div>
                </div>
                <div className="nav_category">
                    <div className="nav_category_heading">
                        <p>Games</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_1</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_2</p>
                    </div>
                    <div className="nav_option">
                        <p>Project_3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
