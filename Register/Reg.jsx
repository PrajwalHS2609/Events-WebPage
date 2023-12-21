import React from 'react'
import style from './reg.module.css'
import RegFirst from './RegFirst'
import RegBlock from './RegBlock'
const Reg = () => {
  return (
    <div className={style.Reg_main}>
      <RegFirst/>
      <RegBlock/>
    </div>
  )
}

export default Reg
