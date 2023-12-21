import React from "react";
import style from "./competition.module.css";

import CompetitionHeading from "./CompetitionHeading";
import CompetitionContainer from "./CompetitionContainer";
const Competition = () => {
  return (
    <div className={style.competition_main}>
      <CompetitionHeading />
      <CompetitionContainer />

    </div>
  );
};
export default Competition;
