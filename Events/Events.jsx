import React from 'react'
import style from "./events.module.css"
import EventTitle from './EventTitle'
import EventsCards from './EventsCards'
const Events = () => {
  return (
    <div className={style.eventsMain} >
      <EventTitle/>
      <EventsCards/>
    </div>
  )
}

export default Events
