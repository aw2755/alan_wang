// import logo from './logo.svg';  <-- use this for any image that you want to put
import './App.css';
import React, {useState, useEffect} from 'react';
import RESUME from './resume.pdf';
import LEFT_ARROW from './images/left-triangle-icon.png';
import DOWN_ARROW from './images/down-triangle-icon.png';
import RIT_TIGER from './images/RIT-tiger.jpg';
import LINKEDIN_LOGO from './images/linkedin-logo.png';
import GITHUB_LOGO from './images/github-logo.png'
import INSTAGRAM_LOGO from './images/instagram-logo.png'
import EMAIL_LOGO from './images/email-logo.png'

function App() {
    // function to open resume and popup window
    function openResume() {
        document.getElementById("resumePopup").style.display = "flex";
        document.body.classList.add('modal-open'); // Disable scrolling
    }

    // function to close resume and popup window
    function closeResume() {
        document.getElementById("resumePopup").style.display = "none"; 
        document.body.classList.remove('modal-open'); // Re-enable scrolling
    }

    const [isOpen, setIsOpen] = useState(false);
    const [navIcon, setNavIcon] = useState(LEFT_ARROW);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form redirection

        const submitButton = document.getElementById('sub-button');
        const originalText = submitButton.textContent;

        // Change the button text to indicate submission success
        submitButton.textContent = "Message Sent!";

        // Send form data to Formspree via fetch API
        fetch('https://formspree.io/f/mqakzgpz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formState.name,
                replyto: formState.email,
                message: formState.message
            })
        })
        .then((response) => {
            if (response.ok) {
                setTimeout(() => {
                    submitButton.textContent = originalText; // Revert back to original text after 3 seconds
                }, 3000);
                setIsPopupVisible(true); // Show the popup
                setFormState({ name: '', email: '', message: '' }); // Clear form

                // Automatically close the popup after 3 seconds
                setTimeout(() => {
                    setIsPopupVisible(false);
                }, 3000);
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Form submission error:', error);
        });
    };


    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownElement = document.querySelector('.nav-container.dropdown');
            if (dropdownElement && !dropdownElement.contains(event.target)) {
                setIsOpen(false);
                setNavIcon(LEFT_ARROW); // Reset icon back to LEFT_ARROW
            }
        };
    
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openNavbar = () => {
        const navIconElement = document.getElementById('_nav-icon');
        navIconElement.style.opacity = '0';
        setTimeout(() => {
            // Change the image after fade-out
            setNavIcon(isOpen ? LEFT_ARROW : DOWN_ARROW); // Change the icon source
            
            // Fade in the new image
            navIconElement.style.opacity = '1';
        }, 300);


        setIsOpen(!isOpen);
        setNavIcon(isOpen ? LEFT_ARROW : DOWN_ARROW); // Change icon based on isOpen state
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Assuming you're scrolling to an element with the id 'home'
        const homeSection = document.getElementById('home');
    
        // Check if the element exists before trying to scroll to it
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Element with id "home" not found.');
        }
    });

    window.addEventListener('load', function() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    // Function to close the popup manually
    const closePopup = () => {
        setIsPopupVisible(false);
    };

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
                        <a href='#home' onClick={() => setIsOpen(false)}>Home</a>
                        <a href='#about' onClick={() => setIsOpen(false)}>About</a>
                        <a href='#project' onClick={() => setIsOpen(false)}>Project</a>
                        <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
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
                        <button className="resume-button mt-s" onClick={openResume}>View Resume</button>
                            <div id='overlay'></div>
                            <div id="resumePopup" className="popup">
                                <span className="close" onClick={closeResume}>&times;</span>
                                <iframe src={RESUME} className="resume-iframe" title='resume'></iframe>
                            </div>
                    </div>

                </div> {/* end div for home */}
            </div> {/* end div for intro */}

            {/* the background pic */}
            <div className='right'></div> 


            <div id='about' className='about-resize mt-ll mb-l mr-s ml-s'> {/* start about div */}
                <h5 className='heading-4 sec-color mb-s mt-s'>About Me —</h5>

                <div className='about-me'> {/* start about paragraph div */}
                    <div className='about-me-p'>
                        <p>
                            <br/> Hey there! 👋 I’m Alan Wang, a student at Rochester Institute of Technology. 
                                  I’m a passionate full-stack developer with a strong focus on backend development. 
                                  I thrive on building efficient, seamless web applications and enjoy crafting robust 
                                  backend functionalities that power smooth user experiences.
                        </p>
                        <p>
                            <br/> Based in Brooklyn, New York, I’m always looking for new challenges that push
                                  the boundaries of technology. My journey into software development started with a
                                  simple love for problem-solving, and it’s led me to explore the fascinating world of 
                                  full-stack development. <br/>
                        </p>
                        <p>
                            <br/> Outside of tech, I am a badminton enthusiast 🏸. Whenever I’m not coding, 
                                  you’ll likely find me on the court. I also value spending time with friends, 
                                  being surrounded by people I care about is something I’ll always cherish. <br/>
                        </p>

                        <p>
                            <br/> I’m always eager to learn and adapt to new technologies, continuously refining 
                                  my skills to stay at the forefront of web development.
                        </p>
                    </div> {/* end about paragraph div */}

                    {/* RIT logo */}
                    <div className='about-img'>
                        <img src={RIT_TIGER} alt='' height={'300px'}></img>
                    </div>

                </div> {/* end about me div */}

            </div>
            <div id='project' className='project-resize mt-s sec-color mr-s ml-s'> {/* start project div*/}
                <section>
                    <h5 className='heading-4 sec-color'>My Projects —</h5>
                </section>

                <div className='project-main mt-l main-font'>

                    <a href='https://github.com/aw2755/alan_wang' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>Portfolio</h5>
                            <p>This personal portfolio showcases the projects I’ve completed, highlighting my skills and 
                                creativity across various development areas. It offers an in-depth look into the work 
                                I’m passionate about and the tools I’ve used to create them.</p>
                            <section class='tech-used'>
                                <span className='tech-tag'>REACT.JS</span>
                                <span className='tech-tag'>CSS</span>
                            </section>
                        </div>
                    </a>

                    <a href='x' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>x</h5>
                            <p></p>
                            <section class='tech-used'>
                                <span className='tech-tag'></span>
                            </section>
                        </div>
                    </a>

                    <a href='x' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>x</h5>
                            <p></p>
                            <section class='tech-used'>
                                <span className='tech-tag'></span>
                            </section>
                        </div>
                    </a>

                    <a href='x' target='_blank' rel="noreferrer" className='project-link'>
                        <div className='project-container'>
                            <h5 className='upper-c'>x</h5>
                            <p></p>
                            <section class='tech-used'>
                                <span className='tech-tag'></span>
                            </section>
                        </div>
                    </a>

                </div>
            </div> {/* end project div*/}


            <div id='contact' className='contact-resize mt-s mb-l mr-s ml-s'> {/* start contact div*/}
                {/* contact section */}
                <section>
                    <h5 className='heading-4 sec-color'>Contact Me —</h5>
                </section>

                <div className='contact-main mt-s'> {/* start contact form div*/}
                    <form className='contact-form mr-s mt-l mb-s main-font' onSubmit={handleSubmit}>
                        {/* name contact */}
                        <div>
                            <label className='upper-c' htmlFor='name'>Name: </label>
                            <input type="text" id="name" name="name" placeholder="Enter your name..." 
                                value={formState.name} onChange={handleInputChange} required></input>
                        </div>
                        
                        {/* email contact */}
                        <div>
                            <label className='upper-c' htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" placeholder="Enter your email..."
                                value={formState.email} onChange={handleInputChange}required></input>
                        </div>
                        
                        {/* message contact */}
                        <div>
                            <label className='upper-c' htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Your message here..." 
                            value={formState.message} onChange={handleInputChange}required></textarea>
                        </div>

                        {/* send message button */}
                        <button id='sub-button' type="submit" className="submit-button">Send Message</button>
                    </form>

                    <div className='social-links'> {/* start socials div */}
                        {/* linkedin */}
                        <div>
                            <a href='https://www.linkedin.com/in/wang-alan/' target="_blank" rel="noopener noreferrer">
                                <img src={LINKEDIN_LOGO} alt='LinkedIn'></img>
                            </a>
                            <p>LinkedIn</p>
                        </div>
                        
                        {/* github */}
                        <div>
                            <a href='https://github.com/aw2755/' target="_blank" rel="noopener noreferrer">
                                <img src={GITHUB_LOGO} alt='Github'></img>
                            </a>
                            <p>Github</p>
                        </div>

                        {/* instagram */}
                        <div>
                            <a href='https://www.instagram.com/alano.o/' target="_blank" rel="noopener noreferrer">
                                <img src={INSTAGRAM_LOGO} alt='Instagram'></img>
                            </a>
                            <p>Instagram</p>
                        </div>

                        {/* spotify */}
                        <div>
                            <a href='mailto:alanwang07012002@gmail.com' target="_blank" rel="noopener noreferrer">
                                <img src={EMAIL_LOGO} alt='Spotify'></img>
                            </a>
                            <p>Email</p>
                        </div>

                    </div> {/* end socials div */}
                </div> {/* end contact form div */}
                
                {/* messages sent popup */}
                {isPopupVisible && (
                        <div className="popup-message">
                            <div className="popup-content">
                                <span className="popup-close" onClick={closePopup}>&times;</span>
                                <p>Your message has been sent successfully!</p>
                            </div>
                        </div>
                    )}

            </div> {/* end contact div */}

            <footer class="footer">
                <p> PORTFOLIO BY - Alan Wang</p>
            </footer>

        </div> // end div for app 
  ); // end return
} // end function App()

export default App;
