// import logo from './logo.svg';  <-- use this for any image that you want to put
import './App.css';
import React from 'react';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
        <div>
            <div><a href="#experience">Experience</a></div>
            <div><a href="#projects">Projects</a></div>
        </div>

        {/* NAME */}
        <header>
            <h1 class="name">Alan Wang</h1>
        </header>

        {/* EXPERIENCE */}
        <h2 id="experience" class="section">EXPERIENCE</h2>

          {/* this section is for GTRI */}
          <div>
              <p class="split-title-date">
                  <span>Research and Development Intern</span>
                  <span>August 2023 &mdash; Present</span>
              </p>
              <p class="location">Georgia Tech Research Institute</p>
              <ul class = "description-list">
                  <li>Effectively developed and maintained automated test scripts to validate functionalities.</li>
                  <li>Reviewed and updated test cases as needed for nightly builds and optimized as needed for code release.</li>
                  <li>Analyzed test results to locate and resolve technical issues in a timely manner to ensure product quality.</li>
              </ul>
          </div>

          {/* this section is for RIT */}
          <div>
              <p class="split-title-date">
                  <span>Software Course Assistant</span>
                  <span>January 2023 &mdash; May 2023</span>
              </p>
              <p class="location">Rochester Institute of Technology</p>
              <ul class = "description-list">
                  <li>Provided comprehensive feedback to 20 students on assignments about several aspects of the Software Engineering
process including Junit, Maven, Object Oriented Design, and Design Documentation.</li>
                  <li>Assisted students with problems related to instruction, technologies, understanding and project management.</li>
                  <li>Acquired proficiency in troubleshooting and debugging code written by first year students.</li>
              </ul>
          </div>
          
        {/* PROJECTS */}
        <h2 id="projects" class="section">PROJECTS</h2>

          {/* */}
          <div>
              <ul class = "description-list">
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
    </div>

  );
}

export default App;
