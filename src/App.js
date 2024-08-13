import React from "react";
import s from "./App.module.css";
import { Route, Router, Routes } from "react-router-dom";
import { NotFoundPage } from "./Components/HomePage/NotFoundPage/NotFoundPage";
import { HomePage } from "./Components/HomePage/HomePage";
import { Profile } from "./Components/Profile/Profile";
import { Header } from "./Components/HomePage/Header/Header";
import { NavBar } from "./Components/HomePage/NavBar/NavBar";
import { Blog } from "./Components/Blog/Blog";
import { AboutMe } from "./Components/About Me/AboutMe";

const App = () => {
  return (
    <>
      <div className={s.App}>

        <Header/>
        <NavBar/>
        <Routes>
<Route path="/*" element = {<NotFoundPage/>}/>
<Route path="/" element = {<HomePage/>}/>
<Route path="/profile" element = {<Profile/>}/>
<Route path="/blog" element = {<Blog/>}/>
<Route path="/about" element = {<AboutMe/>}/>
       
        </Routes>
      </div>
    </>
  );
};
export { App };
