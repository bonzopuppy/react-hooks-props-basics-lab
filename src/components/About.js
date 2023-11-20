import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* If a prop of bio is passed to this component, display in p, if not don't display the p */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links links={props.links} />

    </div>
  );
}

export default About;
