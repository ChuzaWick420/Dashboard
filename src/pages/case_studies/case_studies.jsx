import React, { useEffect, useState } from "react";

import "./case_studies.css";

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
                {section}
            </div>
        </div>
    );
};

function Case_Studies() {


    return (
        <div className="case_studies_container">
            <ProjectContainer proj="Project_1" content={[
                [
                    "Heading_1",
                    "study_details_paragraph"
                ],
                [
                    "Heading_2",
                    "study_details_paragraph"
                ]
            ]} />
        </div>
    );
}

export default Case_Studies;
