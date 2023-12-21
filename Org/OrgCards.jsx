import React from "react";
import style from "./org.module.css";

const OrgCards = () => {
  return (
    <div className={style.OrgMainCard}>
      <div className={style.OrgFirstCard}>
        <img
          id={style.OrgImage}
          src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais" // add Desired Image for faculty
          alt=""
        />
        <div className={style.OrgCardName1}>
          <pre>Raj</pre>
        </div>
        <div className={style.OrgCardName2}>
          <pre> Student Head </pre>
        </div>
      </div>
      <div className={style.OrgFirstCard}>
        <img
          id={style.OrgImage}
          src="https://www.shutterstock.com/image-photo/distance-education-portrait-smiling-woman-600nw-2094767464.jpg" // add Desired Image for faculty
          alt=""
        />
        <div className={style.OrgCardName1}>
          <pre>Rani</pre>
        </div>
        <div className={style.OrgCardName2}>
          <pre> Finance Head </pre>
        </div>
      </div>
      <div className={style.OrgFirstCard}>
        <img
          id={style.OrgImage}
          src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais" // add Desired Image for faculty
          alt=""
        />
        <div className={style.OrgCardName1}>
          <pre>Raj</pre>
        </div>
        <div className={style.OrgCardName2}>
          <pre> Student Head </pre>
        </div>
      </div>
      <div className={style.OrgFirstCard}>
        <img
          id={style.OrgImage}
          src="https://www.shutterstock.com/image-photo/distance-education-portrait-smiling-woman-600nw-2094767464.jpg" // add Desired Image for faculty
          alt=""
        />
        <div className={style.OrgCardName1}>
          <pre>Rani</pre>
        </div>
        <div className={style.OrgCardName2}>
          <pre> Finance Head </pre>
        </div>
      </div>
    </div>
  );
};

export default OrgCards;
