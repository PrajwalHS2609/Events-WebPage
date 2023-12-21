import React from "react";
import style from "./competition.module.css";

const Art = () => {
  return (
    <div className={style.showAll_main}>
      {" "}
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://i.ytimg.com/vi/0eYOR35XfyY/maxresdefault.jpg"
            alt=""
          />
          <p>Mad Ads</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://www.10guider.com/wp-content/uploads/2021/01/Best-Face-Painting-Kits-in-2021.jpg"
            alt=""
          />
          <p>Face Painting</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="http://cdn.mos.cms.futurecdn.net/5a44c68bdaf398a7d43e1e1b9741ed74-1200-80.jpg"
            alt=""
          />
          <p>Pencil Sketching</p>
        </div>
      </div>
    </div>
  );
};

export default Art;
