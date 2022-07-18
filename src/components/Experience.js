import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div id="experience">
      <h2>My Skills</h2>
      <div className="skills">
        <div className="skill">
          <h3>HTML</h3>
          <h4>Experienced</h4>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <h4>Experienced</h4>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <h4>Intermediate</h4>
        </div>
        <div className="skill">
          <h3>React.js</h3>
          <h4>Intermediate</h4>
        </div>

        <div className="skill">
          <h3>Bootstrap</h3>
          <h4>Experienced</h4>
        </div>
      </div>
    </div>
  );
}

export default Experience;
