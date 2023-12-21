import React from 'react'
import Logo from './Logo'
import Welcome from './Welcome'
import style from "./first.module.css"
const First = () => {
  return (
    <div className={style.first_main}>
      <Welcome/>
      <Logo/>

    </div>
  )
}

export default First
