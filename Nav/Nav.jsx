import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import style from "./nav.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutFirst from "../About/AboutFirst";
import EventTitle from "../Events/EventTitle";
import CompetitionHeading from "../Competition/CompetitionHeading";
import RegFirst from './../Register/RegFirst';

const Nav = () => {
  return (
    <div className={style.nav_main}>
      <Logo />
      <BrowserRouter>
      <Menu />
        <Routes>
        <Route path="/#event" element={<EventTitle/>}/>
        <Route path="/#compete" element={<CompetitionHeading/>}/>
        <Route path="/#about" element={<AboutFirst/>}/>
          <Route path="/#register" element={<RegFirst/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
