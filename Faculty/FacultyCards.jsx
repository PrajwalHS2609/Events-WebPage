import React from "react";
import style from "./faculty.module.css";

const FacultyCards = () => {
  return (
    <div className={style.FacultyMainCard}>
      <div className={style.FacultyFirstCard}>
        <img
          id={style.FacultyImage}
          src="https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d" // add Desired Image for faculty
          alt=""
        />
        <div className={style.FacultyCardName1}>
          <pre>Raju</pre>
        </div>
        <div className={style.FacultyCardName2}>
          <pre> President </pre>
        </div>
      </div>
      <div className={style.FacultyFirstCard}>
        <img
          id={style.FacultyImage}
          src="https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d" // add Desired Image for faculty
          alt=""
        />
        <div className={style.FacultyCardName1}>
          <pre>Raju</pre>
        </div>
        <div className={style.FacultyCardName2}>
          <pre> President </pre>
        </div>
      </div>{" "}
      <div className={style.FacultyFirstCard}>
        <img
          id={style.FacultyImage}
          src="https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d" // add Desired Image for faculty
          alt=""
        />
        <div className={style.FacultyCardName1}>
          <pre>Raju</pre>
        </div>
        <div className={style.FacultyCardName2}>
          <pre> President </pre>
        </div>
      </div>
      <div className={style.FacultyFirstCard}>
        <img
          id={style.FacultyImage}
          src="https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d" // add Desired Image for faculty
          alt=""
        />
        <div className={style.FacultyCardName1}>
          <pre>Raju</pre>
        </div>
        <div className={style.FacultyCardName2}>
          <pre> President </pre>
        </div>
      </div>
    </div>
  );
};

export default FacultyCards;
