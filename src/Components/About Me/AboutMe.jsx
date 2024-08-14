import React from "react";
import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={s.main}>
        <div className={s.hello}>
          <p>Hi, my name is Vlad</p>
          <p>I am begginer Frontend-developer!</p>
          <p>Check out my portfolio</p>
        </div>
        <div className={s.interests}>
          <p className={s.hobby}>Some of my hobbies</p>
          <p className={s.music}>Music</p>
          <p className={s.js}>Traveling</p>
          <p className={s.sportClub}>Sports & Active Chill</p>
        </div>

        <div className={s.mySoftSkills}>
          <p className= {s.someSkills}>Some of my skills</p>
          <div className={s.buttons}>
            <button className={s.button}>React/Redux</button>
            <button className={s.button}>GIT</button>
            <button className={s.button}>HTML/CSS</button>
            <button className={s.button}>JS</button>


          </div>
        </div>
      </div>
    </>
  );
};

export { AboutMe };
