import React from "react";

import s from "./Header.module.css"

const Header = () => {
    return (
        <>
         <div className={s.appHeader}>
          <header >
           <p>Welcome to the club</p>
          </header>
        </div>
        </>
    )
}

export {Header}