import React from 'react'
import style from "./events.module.css"

const EventTitle = () => {
  return (
    <div>
      <div className={style.eventsText} id='event'><p> EVENTS</p></div>
      <div className={style.eventsLine}></div>
    </div>
  )
}

export default EventTitle
