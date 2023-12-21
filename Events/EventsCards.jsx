import React from "react";
import style from "./events.module.css";


const EventsCards = () => {

  return (
    <div  className={style.eventsMainCard}>
      <div  className={style.eventsFirstCard}>
        <img id={style.image} src="https://tse4.mm.bing.net/th?id=OIP.7VAHksgOjjH0nZ5ryuiwGAHaHa&pid=Api&P=0&h=180" alt="" />
        <div className={style.cardName1}>
          <pre>Western dances</pre>
        </div>
      </div>
      <div className={style.eventsFirstCard}>
        <img id={style.image}
          src="https://www.speedoring.com/images/product/1591662108.jpg"
          alt=""
        />
        <div className={style.cardName1}>
          <pre>Classical Dances</pre>
        </div>
      </div>
      <div className={style.eventsFirstCard}>
        <img id={style.image} src="https://tse2.mm.bing.net/th?id=OIP.w2MEZFVcQXalb7cxFYFU7AHaEU&pid=Api&P=0&h=180" alt="" />
        <div className={style.cardName1}>
          <pre>Singing</pre>
        </div>
      </div>
      <div className={style.eventsFirstCard}>
        <img id={style.image} src="https://tse4.mm.bing.net/th?id=OIP.uAmYSJllwRbhhy7R-JCw4gHaEK&pid=Api&P=0&h=180" alt="" />
        <div className={style.cardName1}>
          <pre>Gaming</pre>
        </div>
      </div>
      <div className={style.eventsFirstCard}>
        <img id={style.image} src="https://tse1.mm.bing.net/th?id=OIP.fm9wW_jprROGnsBmANHmSgHaEo&pid=Api&P=0&h=180" alt="" />
        <div className={style.cardName1}>
          <pre>DJ</pre>
        </div>
      </div>
      <div className={style.eventsFirstCard}>
        <img id={style.image} src="https://tse4.mm.bing.net/th?id=OIP.T4RNNyPQdYJYUFELWgGqmAHaE7&pid=Api&P=0&h=180" alt="" />
        <div className={style.cardName1}>
          <pre>FAshion Show</pre>
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
