import React from "react";
import style from "./competition.module.css";

const Cultural = () => {
  return (
    <div className={style.showAll_main}>
      {" "}
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img src="https://wallpaperaccess.com/full/1315407.jpg" alt="" />
          <p>Classical</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5ea9e312990e08746d80d094_5e28eadaff920783b494509b_hIP-HOP-DANCE-BLOG-p-2600.jpeg"
            alt=""
          />
          <p>Western</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img src="http://wallpapercave.com/wp/bJ8eM0e.jpg" alt="" />
          <p>Classical Singing</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://res.cloudinary.com/magicaltrip/image/upload/q_auto,f_auto/v1522746339/42_3_wqf9x5.jpg"
            alt=""
          />
          <p>Western Singing</p>
        </div>
      </div>
    </div>
  );
};

export default Cultural;
