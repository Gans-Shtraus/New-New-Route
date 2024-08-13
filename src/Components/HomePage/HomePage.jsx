import React from "react";

import s from './HomePage.module.css'
import { Header } from "./Header/Header";
import { NavBar } from "./NavBar/NavBar";
import { Content } from "./Content/Content";

const HomePage = () => {
    return (
        <>
        <div className= {s.HomePage}>

<Content/>
        </div>
        </>
    )
}
export {HomePage}