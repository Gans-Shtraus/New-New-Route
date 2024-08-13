import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <>
        <div className= {s.helloWorld}>
            <p>Hello, my name is Vlad</p>
            <p>Me 24 old </p>
            <p>I am Frontend-Developer</p>
            <p>who is good boy?</p>
            <p>Yep it s me</p>

        <div className={s.img}>
            <img src="https://twam.ru/wp-content/uploads/2024/02/anime-avy-4.webp" alt="" />
        </div>
        </div>
        </>
    )
}
export {Profile}

