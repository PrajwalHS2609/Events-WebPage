import React from "react";
import style from "./competition.module.css";

const ESports = () => {
  return (
    <div className={style.showAll_main}>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img src="https://wallpapercave.com/wp/wp9713736.jpg" alt="" />
          <p>BGMI</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://venturebeat.com/wp-content/uploads/2020/05/Garena-Free-Fire.jpg?w=1200&strip=all"
            alt=""
          />
          <p>Fee Fire</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://game.cohet.vn/upload/data/images/android/call-of-duty/call-of-duty.jpg"
            alt=""
          />
          <p>Call Of Duty</p>
        </div>
      </div>
    </div>
  );
};

export default ESports;
