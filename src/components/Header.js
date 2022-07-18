import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="banner" id="">
        <div className="text">
          Hi, I'm Rishabh Chand
          <p>Web Developer</p>
          <div className="buttons">
            <a href="#contact">Let's Talk</a>
            <a href="./images/Rishabh Chand CV.pdf" target="_blank">Download CV</a>
          </div>
        </div>
        <div className="image">
          {" "}
          <img src="./images/banner.png" alt="banner" />
        </div>
      </div>
    </>
  );
}

export default Header;
