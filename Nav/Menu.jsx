import React from "react";
import style from "./nav.module.css";
import {HashLink as Link} from "react-router-hash-link"
const Menu = () => {
  return (
    <div className={style.Menu_main}>
      <div className={style.first}>
        <div className={style.item} id={style.item1}>
        <Link to="/#event">Event</Link>

        </div>
        <div className={style.drop}></div>
      </div>
      <div className={style.first}>
        <div className={style.item} id={style.item1}>
        <Link to="/#compete">Compete</Link>

        </div>
        <div className={style.drop}></div>
      </div>
      <div className={style.first}>
        <div className={style.item} id={style.item1}>
<Link to="/#about">About</Link>
        </div>
        <div className={style.drop}></div>
      </div>
      <div className={style.item} id={style.reg}>
        <div className={style.l_arrow}>>></div>     
        <div className={style.innerReg}>
          <Link to="/#register">
          Register  <span id={style.reg_span}>Now</span></Link>
        </div>
        <div className={style.r_arrow}>>></div>
      </div>
    </div>
  );
};

export default Menu;
