
import React from "react";
import Links from "../components/Links.js";
import user from "../data/user";

function About({bio, links }) {
  // console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      { bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin}/>
      
    </div>
  );
}

export default About;
