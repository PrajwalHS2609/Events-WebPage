import React from "react";
import style from "./first.module.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"/>

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.typing}><p className={style.text}>WELCOME TO <span>EVENT</span> .</p></div>
    </div>
  );
};

export default Welcome;
