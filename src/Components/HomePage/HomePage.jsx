import React from "react";

import s from './HomePage.module.css'


let count = 0;

const HomePage = () => {
    return (
        <>

        <div className= {s.HomePage}>

            <button id={'button'} onClick={ ()=> {
                count++;
                console.log(count)
            }} >
take
            </button>

        </div>
        </>
    )
}
export {HomePage}