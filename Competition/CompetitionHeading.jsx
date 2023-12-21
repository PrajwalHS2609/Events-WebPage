import React from 'react'
import  style from "./competition.module.css"
const CompetitionHeading = () => {
  return (
    <div>
      <div className={style.competition_text} id='compete'><p>COMPETITION</p></div>
      <div className={style.competition_line}></div>
    </div>
  )
}

export default CompetitionHeading
