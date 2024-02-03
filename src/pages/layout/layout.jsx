import React from "react";

import "./layout.css";
import { Outlet } from "react-router-dom";

function Layout() {
    let Options = ((props)=>{
        return (
            <div className="nav_button">
                <img src="/placeholder.png" />
                <h1>{props.content}</h1>
            </div>
        );
    });

    return (
        <>
            <div className="layout_container">
                <div className="img_mid_container">
                    <img src="/Artorias.png" />
                </div>
                <Options content="Overview" />
                <Options content="Experience" />
                <Options content="Projects" />
                <Options content="Case Studies" />
            </div>
            <Outlet /> 
        </>
    );
}

export default Layout;
