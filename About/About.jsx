import React from 'react'
import AboutFirst from './AboutFirst'
import style from "./about.module.css"
import AboutSecond from './AboutSecond'

const About = () => {
  return (
    <div className={style.about_main} >
      <AboutFirst/>
      <AboutSecond/>
    </div>
  )
}

export default About
