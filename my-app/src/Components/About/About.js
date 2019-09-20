import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <img src={logo} className="App-logo" alt="logo" />
        About Us!
      </header>
      <h1>
          Welcome Home Brewers!
          We support Home Brewers to store information about the brews.
      </h1>
    </div>
    
  );
}

export default About;
