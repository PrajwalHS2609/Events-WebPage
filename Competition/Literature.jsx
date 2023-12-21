import React from "react";
import style from "./competition.module.css";

const Literature = () => {
  return (
    <div className={style.showAll_main}>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.iIrB9Rh8CQY1unpZ-yw3rgHaE8&pid=Api&P=0&h=180"
            alt=""
          />
          <p>GK Quiz</p>
        </div>
      </div>
      <div className={style.showAll_item}>
        <div className={style.innerItem}>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVtTVhOoQJifTxu9xSh2y4WzVyn-9eyWkXNiVmdKSekbaFBENoK8hUNqMIT_YKtIQKWAhPrRtFFDNugKCSkMz6LRYuz_TgNaamE4UW5u4Pzdz6nPzNHMYjn9T4ey9xA16cKHk4abtuGDKeC2ZHWmixvvZ7Hb9pZuzIR6MWYflzI-9a9p7379B_nv7O/s590/images%20(12)%20(1).jpeg"
            alt=""
          />
          <p>Debate</p>
        </div>
      </div>
    </div>
  );
};

export default Literature;
