import React from "react";
import Nav from "./Nav/Nav";
import "./Global.css";
import First from "./First/First";
import Day from "./First/Day/Day";
import About from "./About/About";
import Events from "./Events/Events";
import Competition from "./Competition/Competition";
import Faculty from "./Faculty/Faculty";
import Org from "./Org/Org";
import Reg from "./Register/Reg";
const Main = () => {
  return (
    <div>
      <Nav />
      <First />
      <Day />
      <Events />
      <Competition />
      <About />
      <Faculty />
      <Org />
      <Reg />
    </div>
  );
};

export default Main;
