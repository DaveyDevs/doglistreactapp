import React from "react";
import { FaReact, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa'

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
          <ul className="about__tools-ul">
            <li>
              <div>
                <FaReact className="about__logo react" />
                <p>ReactJS</p>
              </div>            
            </li>
            <li className="tech">
              <div>
                <FaJsSquare className="about__logo" />
                <p>JavaScript</p>
              </div>
            </li>
            
            <li className="tech">
              <div>
                <FaHtml5 className="about__logo" />
                <p>HTML</p>
              </div>
            </li>
            <li className="tech">
              <div>
                <FaCss3 className="about__logo" />
                <p>CSS</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="test-svg"></div>
      </div>
      <div className="about__techniques about__list-container">
        <h2>A few programming techniques used and learned:</h2>
        <div>
          <ul className="about__list-main-ul">
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
              <li>Asynchronous data fetching</li>
              <li>Working with a component structure</li>
            </ul>
            <li>Accessibility</li>
            <ul>
              <li>Using semantic HTML</li>
              <li>Tab order</li>
              <li>Testing with a screen reader</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="about__future about__list-container">
        <h2>Future enhancements:</h2>
        <ul className="about__list-main-ul">
          <li>
            Make list searchable by characteristics (temperament, color, size,
            etc.)
          </li>
          <li>Update performance: Ensure that users with various network speeds can have a decent experience.</li>
          <li>Continue to research and develop further accessibility functionality.</li>
        </ul>
      </div>
      <h2 className="about__contact">Feel free to <a href="mailto:daveydevs@gmail.com"> ask me more</a> about this project <a href="https://github.com/DaveyDevs/doglistreactapp">or check it out on GitHub</a>!</h2>
    </div>
  );
}
