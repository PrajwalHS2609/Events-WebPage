import React from "react";
import OrgFirst from "./OrgFirst";
import OrgCards from "./OrgCards";
import style from './org.module.css'

const Org = () => {
  return(
   <div className={style.Org_main}>
<OrgFirst/>
<OrgCards/>
  </div>
  )
};

export default Org;
