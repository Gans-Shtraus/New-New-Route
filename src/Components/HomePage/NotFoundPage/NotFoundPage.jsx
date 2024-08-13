import React from "react";
import s from './NotFoundPage.module.css'
const NotFoundPage = () => {
    return (
        <>
        <div className= {s.main}> 
            Не знаем как ты здесь оказалсЯ, но вот путь домой

            <a href="/">Home</a>
        </div>
        </>
    )
}

export {NotFoundPage};