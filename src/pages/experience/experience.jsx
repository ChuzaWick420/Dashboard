import React from "react";

import "./experience.css";

function Experience() {

    let TimelineSection = (()=>{
        return (
            <>
                <div className="bullet"></div>
                <div className="timeline_progress_bar"></div>
            </>
        );
    });

    let TimeLineHistory = ((props)=>{
        return (
            <div className="timeline_history_bar">
                <div className="timeline_extension_bar"></div>
                <p className="timeline_history_time">{props.time}</p>
            </div>
        );
    });

    let TimeLine = (()=>{
        return (
            <div className="timeline_container">
                <div className="timeline">
                   <TimelineSection />
                   <TimelineSection />
                   <TimelineSection />
                   <div className="bullet"></div> 
                </div>
                <div className="timeline_history">
                    <TimeLineHistory time="2020" />
                </div>
            </div>
        );
    });

    return (
        <div className="experience_container">
            <div className="category_container">
                <h1>Company Name</h1>
                <TimeLine />
            </div>
        </div>
    );
}

export default Experience;
