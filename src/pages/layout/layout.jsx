import React, { useEffect, useState } from "react";

import "./layout.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    
    const [targetWidth, setTargetWidth] = useState(window.innerWidth);
    const [mobileNavActive, setMobileNavActive] = useState("mobile_nav");   

    let Options = ((props)=>{
        let path = null;

        switch (props.path) {
            case "overview":
                path = "overview";
                break;
            case "experience":
                path = "experience";
                break;
            case "projects":
                path = "projects"
                break;
            case "case_studies":
                path = "case_studies";
                break;
            default:
                path = "404";
                break;
        }
        return (
            <Link to={`../${path}`} className="nav_button_link">
                <div className="nav_button">
                    <img src="/placeholder.png" />
                    <h1>{props.content}</h1>
                </div>
            </Link>
        );
    });

    //break points for large phone, tablet, laptop
    const breakPoints = [425, 768, 1024];

    function resizer() {
            if (window.innerWidth < breakPoints[1])
                setTargetWidth(breakPoints[0]);
            else if (window.innerWidth < breakPoints[2])
                setTargetWidth(breakPoints[1]);
            else
                setTargetWidth(breakPoints[2]);
    }

    useEffect(()=>{
        resizer();
        window.addEventListener("resize", ()=>{
            resizer();
        });
    }, []);

    let Comp = ()=>{
        switch (targetWidth) {
        
            case breakPoints[0]:
                return (
                    <>
                        <h1>PlaceHolder</h1>
                        <div className="burger" onClick={()=>{
                            if (mobileNavActive == "mobile_nav" || mobileNavActive == "mobile_nav mobile_nav_deactive")
                                setMobileNavActive("mobile_nav mobile_nav_active");
                            else
                                setMobileNavActive("mobile_nav mobile_nav_deactive");
                        }}>
                            <div className="burger_line_1"></div>
                            <div className="burger_line_2"></div>
                            <div className="burger_line_3"></div>
                        </div>
                    </>
                );
            
            default:
                return (
                    <>
                        <Options content="Overview" path="overview"/>
                        <Options content="Experience" path="experience"/>
                        <Options content="Projects" path="projects"/>
                        <Options content="Case Studies" path="case_studies"/>
                    </>
                );
        }
    }

    let Mobile_Nav = ()=>{
        switch (targetWidth) {
       
            case breakPoints[0]:
                return (
                    <div className={mobileNavActive}>
                        <Options content="Overview" path="overview"/>
                        <Options content="Experience" path="experience"/>
                        <Options content="Projects" path="projects"/>
                        <Options content="Case Studies" path="case_studies"/>
                    </div>
                );
            
            default:
                return <></>;
        }
    };

    return (
        <div className="layout_container">
            <div className="side_panel">
                <div className="img_mid_container">
                    <img src="/Artorias.png" />
                </div>
            <Comp />
            </div>
            <Outlet /> 
            <Mobile_Nav />
        </div>
    );
}

export default Layout;
