import React from "react";

export function About() {
  return (
    <div className="about">
      <h1 className="about__title">About Dogs List! 🐾</h1>
      <h2 className="about__subtitle">
        A portfolio project by <a href="daveydevs.com">DaveyDevs</a>, using data
        from <a href="https://thedogapi.com/">TheDogAPI</a>
      </h2>
      <div className="about__tools">
        <h2>What else was used to make this site?</h2>
        <div className="about__list-container">
          <ul>
            <li>
              I think I should make this icons instead with React as the biggest
              up top and then JS, HTML, and CSS below
            </li>

            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="test-svg"></div>
      </div>
      <div className="about__techniques">
        <h2>Techniques used and learned</h2>
        <div className="about__list-container">
          <ul>
            <li>React</li>
            <ul>
              <li>React Router</li>
              <li>Hooks (useState, useEffect)</li>
              <li>Global state (useContext)</li>
              <li>PropTypes</li>
            </ul>
            <li>CSS</li>
            <ul>
              <li>Flexbox</li>
              <li>Grid</li>
              <li>BEM</li>
              <li>Media queries</li>
              <li>Normalize.css</li>
            </ul>
            <li>JavaScript</li>
            <ul>
              <li>Connecting to an API</li>
              <li>Something about async?</li>
            </ul>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="about__future">
        <h2>Future enhancements and/or lessons learned?:</h2>
        <ul>
          <li>
            Make list searchable by characteristics (temperament, color, size,
            etc.)
          </li>
          <li>Performance?</li>
        </ul>
      </div>
    </div>
  );
}
