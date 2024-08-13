import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <>
        <div className= {s.helloWorld}>
            <p>Hello, my name is Vlad</p>
            <p>I am </p>
            <p>Hello, my name is Vlad</p>
            <p>Hello, my name is Vlad</p>
            <p>Hello, my name is Vlad</p>

        <div className={s.img}>
            <img src="https://twam.ru/wp-content/uploads/2024/02/anime-avy-4.webp" alt="" />
        </div>
        </div>
        </>
    )
}
export {Profile}

