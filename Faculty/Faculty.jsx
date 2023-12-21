import React from 'react'
import FacultyFirst from './FacultyFirst'
import style from "./faculty.module.css"
import FacultyCards from './FacultyCards';

const Faculty = () => {
  return (
    <div className={style.Faculty_main} >
   <FacultyFirst/>
  < FacultyCards/>
  </div>
  )
}

export default Faculty
