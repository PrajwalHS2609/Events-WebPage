import React from "react";
import style from "./competition.module.css";

const Tech = () => {
  return (
    <div className={style.showAll_main}>
      {" "}
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/07/Black-Blue-background-with-CSS-logos.jpg"
            alt=""
          />
          <p>CSS Battle</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://1.bp.blogspot.com/-DYmW8uymcRs/V1-SwB_Kq5I/AAAAAAAAAIA/_Qeh-4oEN8oM0r__CDutH7W4kwsbzumBQCLcB/s1600/20.jpg"
            alt=""
          />
          <p>Technical Quiz</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://www.dashtech.org/wp-content/uploads/2020/06/coding-1920x1282.jpg"
            alt=""
          />
          <p>Debugging-Coding</p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
