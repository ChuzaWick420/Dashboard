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

    let TimeLineHistroyCard = (()=>{
        return (
            <div className="history_card_container">
                <TimeLineHistory time="2020" />
                <div className="history_card">
                    <h3>Full Stack Dev</h3>
                    <p>
                        I was able to improve performance of a certain product, 
                        I was able to learn a lot of stuff and was able to help 
                        my fellows
                    </p>
                </div>
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
                    <TimeLineHistroyCard />
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
