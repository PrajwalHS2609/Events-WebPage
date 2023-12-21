import React from "react";
import CompetitionLogo from "./Competition_logo";
import CompetitionCard from "./CompetitionCard";
import style from "./competition.module.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShowAll from './ShowAll';
import Literature from "./Literature";
import Art from './Art';
import ESports from "./ESports";
import Tech from "./Tech";
import Misc from "./Misc";
import Cultural from "./Cultural";
const CompetitionContainer = () => {
  return (
    <div className={style.container}>
      <BrowserRouter>
      <CompetitionLogo/>
      <Routes>
        <Route path="/" element={<ShowAll/>}/>
        <Route path="/literary" element={<Literature/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/esport" element={<ESports/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/misc" element={<Misc/>}/>
        <Route path="/cultural" element={<Cultural/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CompetitionContainer;
