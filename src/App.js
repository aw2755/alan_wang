import './App.css';
import React, {useState, useEffect} from 'react';
import RESUME from './Alan_Wang_Resume.pdf';
import LEFT_ARROW from './images/left-triangle-icon.png';
import DOWN_ARROW from './images/down-triangle-icon.png';
// import LINKEDIN_LOGO from './images/linkedin-logo.png';
// import GITHUB_LOGO from './images/github-logo.png'
// import INSTAGRAM_LOGO from './images/instagram-logo.png'
// import EMAIL_LOGO from './images/email-logo.png'

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [navIcon, setNavIcon] = useState(LEFT_ARROW);

    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownElement = document.querySelector('.nav-container.dropdown');
            if (dropdownElement && !dropdownElement.contains(event.target)) {
                setIsOpen(false);
                setNavIcon(LEFT_ARROW);
            }
        };
    
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openNavbar = () => {
        const navIconElement = document.getElementById('_nav-icon');
        navIconElement.style.opacity = 1;

        setIsOpen(!isOpen);
        setNavIcon(isOpen ? LEFT_ARROW : DOWN_ARROW);
    };

    const closeNavbar = () => {
        setIsOpen(false);
        setNavIcon(LEFT_ARROW); // Reset icon to left arrow when a link is clicked
    };

    window.addEventListener('load', function() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    // specifies what the UI should look like for that component.
    // returns a set of HTML-like elements, which are actually JSX(JavaScript XML) syntax
    return (
        <div id='home' className='page'> {/* start home div */}
            <div className='nav-container dropdown'>
                {/* dropdown button */}
                <button className='dropdown-trigger' onClick={openNavbar} aria-label="dropdown-menu">
                    <img id='_nav-icon' src={navIcon} height='51rem' width='51rem' alt='' style={{transform: isOpen ? 'translateY(4px)' : 'translateY(0)'}}></img>
                </button>

                {/* dropdown content */}
                {/* will add the show class if dropdown is open */}
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                    <div className='speech-bubble'>
                        {/* closes the dropdown whenever a section is clicked */}
                        <a href='#home' onClick={closeNavbar}>Home</a>
                        <a href='#about' onClick={closeNavbar}>About</a>
                        <a href='#project' onClick={closeNavbar}>Project</a>
                    </div>
                </div>
                
            </div> {/* end nav-container */}

            <div className='home-resize left mr-s'>
                <div>
                    <div className='intro'>
                        <h5 className='heading-5'>hello there👋, i’m</h5>
                        <h1 className='main-name'>Alan Wang</h1>
                        <h4 className='heading-4 font-s primary-c mt-s mb-s'>full-stack developer</h4>
                    </div> 

                    {/* view resume button */}
                    <div>
                        <a href={RESUME} download="Alan_Wang_Resume.pdf">
                            <button className="resume-button mt-s">Download Resume</button>
                        </a>
                    </div>

                </div> {/* end div for home */}
            </div> {/* end div for intro */}

            {/* the background pic */}
            <div className='right'></div> 

            <div id='about' className='about-section mt-ll mb-l ml-ss'> {/* start about div */}
                <h5 className='heading-4 sec-color'>About Me —</h5>

                <div className='about-me mt-s'> {/* start about paragraph div */}
                    <div className='about-me-p'>
                        <p>
                            <br/> Hey there! 👋 I’m Alan Wang, a student at Rochester Institute of Technology. 
                                  I’m a passionate full-stack developer with a strong focus on backend development. 
                                  I thrive on building efficient, seamless web applications and enjoy crafting robust 
                                  backend functionalities that power smooth user experiences.
                        </p>
                        <p>
                            <br/> Outside of tech, I am a badminton enthusiast 🏸. Whenever I’m not coding, 
                                  you’ll likely find me on the court. I also value spending time with friends, 
                                  being surrounded by people I care about is something I’ll always cherish. <br/>
                        </p>
                    </div> {/* end about paragraph div */}

                </div> {/* end about me div */}

            </div>
            <div id='project' className='sec-color mt-s mr-s ml-ss'> {/* start project div*/}
                <section>
                    <h5 className='heading-4'>My Projects —</h5>
                </section>

                <div className='project-main mt-l main-font'>
                    <a href='https://github.com/aw2755/alan_wang' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>Portfolio</h5>
                            <p>This personal portfolio showcases the projects I’ve completed, highlighting my skills and 
                                creativity across various development areas. It offers an in-depth look into the work 
                                I’m passionate about and the tools I’ve used to create them.</p>
                            <section class='tech-used'>
                                <span className='tech-tag'>React.js</span>
                                <span className='tech-tag'>Css</span>
                            </section>
                        </div>
                    </a>

                    <a href='https://github.com/aw2755/BrckBook' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>Bookstagram</h5>
                            <p>This web application offers a dynamic platform for book lovers to connect, discuss, and 
                                share their passion for reading. With fully functional login and signup features, users 
                                can engage in conversations about their favorite books, explore their friends' latest 
                                activities, and recommend must-read titles. It's the perfect space to build a community 
                                around a shared love for literature.</p>
                            <section class='tech-used'>
                                <span className='tech-tag'>MongoDB</span>
                                <span className='tech-tag'>Express.js</span>
                                <span className='tech-tag'>React</span>
                                <span className='tech-tag'>Node.js</span>
                                <span className='tech-tag'>GoogleAPI</span>
                            </section>
                        </div>
                    </a>

                    <a href='https://github.com/aw2755/BadmintonClubManager' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>ClubMate</h5>
                            <p>This Discord bot enables server members to join waitlist queues and automatically sends 
                                a customized embedded ping when it's their turn to play. The goal of this project was 
                                to ensure all club members could participate, fostering inclusion and helping those who 
                                may feel nervous or isolated join in the fun.</p>
                            <section class='tech-used'>
                                <span className='tech-tag'>Python</span>
                                <span className='tech-tag'>Discord.py</span>
                            </section>
                        </div>
                    </a>

                    <a href='https://github.com/aw2755/estore' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>Fruit E-store</h5>
                            <p>A fruit e-store developed collaboratively with a team of four classmates as an 
                                introductory project, designed to explore and learn new software tools and 
                                development practices.</p>
                            <section class='tech-used'>
                                <span className='tech-tag'>Angular</span>
                                <span className='tech-tag'>Java</span>
                                <span className='tech-tag'>Typescript</span>
                                <span className='tech-tag'>Spring Boot</span>
                                <span className='tech-tag'>JUnit</span>
                            </section>
                        </div>
                    </a>

                </div>
            </div> {/* end project div*/}
            
            <div> {/* start footer div*/}
                <footer class="footer mt-l">
                    <p> PORTFOLIO BY - Alan Wang |
                        <a href="https://www.linkedin.com/in/wang-alan/" target='_blank' rel="noreferrer"> LinkedIn </a> |
                        <a href='https://github.com/aw2755' target='_blank' rel="noreferrer"> Github </a> |
                        <a href="mailto:alanwang07012002@gmail.com?subject=Portfolio Inquiry" target='_blank' rel="noreferrer"> Email </a> |
                    </p>
                </footer>
            </div> {/* end footer div*/}

        </div> // end div for app 
  ); // end return
} // end function App()

export default App;
