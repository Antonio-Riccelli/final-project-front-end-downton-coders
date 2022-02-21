import React from "react";
import "./styles.css";

function Hero() {
  return (
    <div className="heroWrapper">
    {/* <header>
    <p id="logo">LOGO HERE</p>
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header> */}
      <h1>Hero</h1>
      <div class="container">

        <div class="centered">
          <p>
            <span class="line">Creating travel solutions</span>
            <span class="line"> to make</span>
            <span class="line"> new connections</span>
            <span class="line-2"> with New People</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
