import React, { createContext, useContext, useEffect, useState } from "react";

import "./layout.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const ActiveButton = createContext();

function Layout() {
    
    const [targetWidth, setTargetWidth] = useState(window.innerWidth);
    const [mobileNavActive, setMobileNavActive] = useState("mobile_nav");   
    const [navActive, setNavActive] = useState("burger");

    let Options = ((props)=>{

        const [isActive, setActive] = useState("");

        const activeID = useContext(ActiveButton);

        useEffect(()=>{

            if (activeID == props.index)
                setActive("nav_button_active");
            else
                setActive("");

        }, [activeID])

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
            <Link to={`../${path}`} className="nav_button_link" onClick={()=>{
                props.handler(props.index);
            }}>
                <div className="nav_button">
                    <img src="/placeholder.png" />
                    <h1 className={isActive}>{props.content}</h1>
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

    const contents = ["Overview", "Experience", "Projects", "Case Studies"];
    const paths = ["overview", "experience", "projects", "case_studies"];
    
    let Nav = ()=>{
        let Option = [];
        

        const loc = useLocation();
        const current_loc = loc.pathname.split("/")[1];
        
        const [isActiveID, setActiveID] = useState(paths.indexOf(current_loc));

        for (let i = 0; i < 4; i++) {
            Option.push(
                <Options key={i} content={contents[i]} path={paths[i]} index={i} handler={setActiveID}/>
            );
        }

        switch (targetWidth) {
        
            case breakPoints[0]:
                return (
                    <>
                        <h1 className="nav_button_active">PlaceHolder</h1>
                        <div className={navActive} onClick={()=>{
                            if (mobileNavActive == "mobile_nav" || mobileNavActive == "mobile_nav mobile_nav_deactive")
                                setMobileNavActive("mobile_nav mobile_nav_active");
                            else
                                setMobileNavActive("mobile_nav mobile_nav_deactive");

                            if (navActive == "burger")
                                setNavActive("burger burger_active");
                            else
                                setNavActive("burger");
                        }}>
                            <div className="burger_line_1"></div>
                            <div className="burger_line_2"></div>
                            <div className="burger_line_3"></div>
                        </div>
                    </>
                );
            
            default:
                return (
                    <ActiveButton.Provider value={isActiveID}>
                        {Option}
                    </ActiveButton.Provider>
                );
        }
    }

    let Mobile_Nav = ()=>{
        let Option = [];
        
        const loc = useLocation();
        const current_loc = loc.pathname.split("/")[1];
        
        const [isActiveID, setActiveID] = useState(paths.indexOf(current_loc));

        for (let i = 0; i < 4; i++) {
            Option.push(
                <Options key={i} content={contents[i]} path={paths[i]} index={i} handler={setActiveID}/>
            );
        }
        switch (targetWidth) {
       
            case breakPoints[0]:
                return (
                    <ActiveButton.Provider value={isActiveID}>
                        <div className={mobileNavActive}>
                            {Option}
                        </div>
                    </ActiveButton.Provider>
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
            <Nav />
            </div>

            <div className="separator"></div>

            <Outlet />

            {/* renders when on mobile view */}
            <Mobile_Nav />
        </div>
    );
}

export default Layout;
