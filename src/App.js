// import logo from './logo.svg';  <-- use this for any image that you want to put
import './App.css';
import React from 'react';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
        <ul class="navbar">
            <li><a href="#top">Top</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        {/* NAME */}
        <header>
            <h1 id="top" class="name">Alan Wang</h1>
        </header>

        {/* EXPERIENCE */}
        <div class="block">
            <h2 id="experience" class="section">EXPERIENCE</h2>

              {/* this section is for GTRI */}
              <div class="blocks">
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
          </div>

        {/* PROJECTS */}
        <div class="block">
        <h2 id="projects" class="section">PROJECTS</h2>

          {/* this section is for brckbook */}
          <div>
                  <p class="split-title-date">
                      <span>BrckBook</span>
                      <span>{/* TOOLS USED HERE */}</span>
                  </p>
                  <ul class = "description-list">
                      <li>Conceptualized and implemented a MERN application to build a social platform for book readers. This platform
    allows users to keep track of 100+ books they have read, comment, and obtain recommendations from contacts.</li>
                      <li>Formulated Google Books API to generate relevant information for 40 books based on a user inputted string.</li>
                      <li> Imported the Mongoose library to store books/user schema into MongoDB using SHA-512 encrypted passwords.</li>
                  </ul>
              </div>

              {/* this section is for badminton club manager */}
              <div>
                  <p class="split-title-date">
                      <span>Badminton Club Manager</span>
                      <span>{/* TOOLS USED HERE */}</span>
                  </p>
                  <ul class = "description-list">
                      <li>Communicated with executive members to develop and maintain an organized system of player rotations for over
    100 members distributed over 4 courts within a 2 hour long activity session.</li>
                      <li>Introduced queue, join, leave, create, and show commands capabilities to enable smoother member experience
    which helps 30+ club members by allowing those who are introverted to be included.</li>
                      <li>Utilized the Discord.py API to send embedded messages directly to users to prevent spamming and alerts members
    on where they are on the queue with an estimated time.</li>
                  </ul>
              </div>

              {/* this section is for the brick */}
              <div>
                  <p class="split-title-date">
                      <span>The Brick</span>
                      <span>{/* TOOLS USED HERE */}</span>
                  </p>
                  <ul class = "description-list">
                      <li>Programmed a fullstack CLI application using Python to forward 20 different queries through PostgreSQL.</li>
                      <li>Conducted regular meetings with database and application development team every week to write code test to
    resolve recurring issues which helps maintain a 95% code coverage.</li>
                      <li>Integrated functionalities to make recommendations based on various analytic such as most view, most liked, times
    watched, and overall rating for recommending movies by name, genre, rating, and directors.</li>
                  </ul>
              </div>

              {/* this section is for fruit store */}
              <div>
                  <p class="split-title-date">
                      <span>Fruits Store</span>
                      <span>{/* TOOLS USED HERE */}</span>
                  </p>
                  <ul class = "description-list">
                      <li>Designed a fruit E-store application using REST API with the Model-View-View-Model architecture.</li>
                      <li>Applied Agile Scrum methodology, utilized tools like Trello and Slack, and conducted regular stand-up meetings to
    facilitate efficient software engineering processes.</li>
                      <li>Implemented a JavaScript local storage solution for CRUD functionality and persistent data using JSON.</li>
                  </ul>
              </div>
          </div>

    </div>

  );
}

export default App;
