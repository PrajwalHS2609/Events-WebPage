import React from "react";
import style from "./competition.module.css";
import { Link } from "react-router-dom";

const Competition_logo = () => {
  return (
    <div className={style.content}>
      <div className={style.item}>
        <Link to={"/"} id={style.a}>ShowAll</Link>
      </div>
      <div className={style.item}>
        <Link to={"/literary"} id={style.a}>Literary</Link>
      </div>
      <div className={style.item}>
        <Link to={"/art"} id={style.a}>Art & Media</Link>
      </div>
      <div className={style.item}>
        <Link to={"/esport"} id={style.a}>E-Sports</Link>
      </div>
      <div className={style.item}>
        <Link to={"/tech"} id={style.a}>Tech</Link>
      </div>
      <div className={style.item}>
        <Link to={"/misc"} id={style.a}>Misc</Link>
      </div>
      <div className={style.item}>
        <Link to={"/cultural"} id={style.a}>Cultural</Link>
      </div>
    </div>
  );
};

export default Competition_logo;
