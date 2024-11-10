import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
export default function Layout(){

    return(
        <div
        // style={{backgroundColor:'#cccccc'}}
         >
            <Header/>
            <Outlet/>
        </div>
    );
}