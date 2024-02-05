import React, { useEffect, useState } from "react";

import "./layout.css";
import { Outlet } from "react-router-dom";

function Layout() {
    
    const [targetWidth, setTargetWidth] = useState(window.innerWidth);
 
    let Options = ((props)=>{
        return (
            <div className="nav_button">
                <img src="/placeholder.png" />
                <h1>{props.content}</h1>
            </div>
        );
    });

    //break points for large phone, tablet, laptop
    const breakPoints = [425, 768, 1024];

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            for (let i = 1; i < breakPoints.length; i++) {
                let average = (breakPoints[i] + breakPoints[i - 1]) / 2;

                if (window.innerWidth < average) {
                    setTargetWidth(breakPoints[i - 1]);
                    break;
                }
                else {
                    setTargetWidth(breakPoints[i]);

                    if(window.innerWidth < breakPoints[i])
                        break;
                }
            }
            
        });
    }, []);

    let Comp = ()=>{
        switch (targetWidth) {
        
            case breakPoints[0]:
                return (
                    <>
                        <h1>PlaceHolder</h1>
                        <div className="burger">
                            <div className="burger_line_1"></div>
                            <div className="burger_line_2"></div>
                            <div className="burger_line_3"></div>
                        </div>
                    </>
                );
            
            default:
                return (
                    <>
                        <Options content="Overview" />
                        <Options content="Experience" />
                        <Options content="Projects" />
                        <Options content="Case Studies" />
                    </>
                );
        }
    }

    return (
        <div className="layout_container">
            <div className="side_panel">
                <div className="img_mid_container">
                    <img src="/Artorias.png" />
                </div>
            <Comp />
            </div>
            {/* <Outlet />  */}
            <div className="dev_container">test</div>
        </div>
    );
}

export default Layout;
