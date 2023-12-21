import React from "react";
import style from "./competition.module.css";

const Misc = () => {
  return (
    <div className={style.showAll_main}>
      {" "}
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://media.gq.com/photos/5703c96b99ca77a949c75f2e/16:9/pass/gucci-unisex-runway.jpg"
            alt=""
          />
          <p>Fashion Show</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://escapetrails.co/wp-content/uploads/2020/03/Treasure-hunt.jpg"
            alt=""
          />
          <p>Treasure Hunt</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="http://www.factorytwofour.com/wp-content/uploads/2015/11/standupcomedy.jpg"
            alt=""
          />
          <p>StandUp Comedy</p>
        </div>
      </div>
    </div>
  );
};

export default Misc;
