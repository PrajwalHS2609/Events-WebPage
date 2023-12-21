import React from 'react'
import style from './reg.module.css'

const RegBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.content} id={style.content1}>
<div className={style.item}>Event Name</div>
<div className={style.item}>Contact:<span>+91 9999999999,+91 9999999999</span></div>
<div className={style.item}>Mail: event@gmail.com</div>
<div className={style.item}>Instagram:event_2k23</div>
<button>Register Now</button>

      </div>
      <div className={style.content} id={style.content2}>
        logo
      </div>
    </div>
  )
}

export default RegBlock

