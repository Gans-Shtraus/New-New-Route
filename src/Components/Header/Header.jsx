import React from "react";

import s from "./Header.module.css"

const Header = () => {
    return (
        <>
         <div className={s.appHeader}>
           <p className={s.glitch}>Welcome to the club</p>
        </div>
        </>
    )
}

export {Header}