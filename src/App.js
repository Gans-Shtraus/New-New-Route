import React from "react";
import s from "./App.module.css";
import { Route, Router, Routes } from "react-router-dom";
import { NotFoundPage } from "./Components/HomePage/NotFoundPage/NotFoundPage";
import { HomePage } from "./Components/HomePage/HomePage";
import { Profile } from "./Components/Profile/Profile";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Blog } from "./Components/Blog/Blog";
import { AboutMe } from "./Components/About Me/AboutMe";
import {Family} from "./Components/Family/Family";
import {Footer} from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className={s.App}>

        <Header/>
        <NavBar/>
          <Footer/>
        <Routes>
<Route path="/*" element = {<NotFoundPage/>}/>
<Route path="/" element = {<HomePage/>}/>
<Route path="/profile" element = {<Profile/>}/>
<Route path="/blog" element = {<Blog/>}/>
<Route path="/about" element = {<AboutMe/>}/>
<Route path="/family" element = {<Family/>}/>

       
        </Routes>
      </div>
    </>
  );
};
export { App };
