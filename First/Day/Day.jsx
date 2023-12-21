import React from "react";
import style from "./day.module.css";
const Day = () => {
  return (
    <div className={style.day_main}>
      <div className={style.day_container}>
        <div className={style.day_content1}>
          <pre>Date - </pre><span> 6th Sept</span>
        </div>
        <div className={style.day_content2}>
          <pre>Booking - </pre><span> Now</span>
        </div>
      </div>
    </div>
  );
};

export default Day;
