// import logo from './logo.svg';  <-- use this for any image that you want to put
import './App.css';
import React, {useState, useEffect} from 'react';
import leftArrow from './left-triangle.png';
import downArrow from './down-triangle.png';
import resume from './resume.pdf';
import working from './working.png'

function App() {
    // function to open resume and popup window
    function openResume() {
        document.getElementById("resumePopup").style.display = "flex";
    }

    // function to close resume and popup window
    function closeResume() {
        document.getElementById("resumePopup").style.display = "none"; 
    }

    const [isOpen, setIsOpen] = useState(false);
    const [navIcon, setNavIcon] = useState(leftArrow);

    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownElement = document.querySelector('.nav-container.dropdown');
            if (dropdownElement && !dropdownElement.contains(event.target)) {
                setIsOpen(false);
                setNavIcon(leftArrow); // Reset icon back to leftArrow
            }
        };
    
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openNavbar = () => {
        setIsOpen(!isOpen);
        setNavIcon(isOpen ? leftArrow : downArrow); // Change icon based on isOpen state
    };

    // specifies what the UI should look like for that component.
    // returns a set of HTML-like elements, which are actually JSX(JavaScript XML) syntax
    return (
        <div className='page'>
            <div className='nav-container dropdown'>
                <button className='dropdown-trigger' onClick={openNavbar} aria-label="dropdown-menu">
                    <img id='_nav-icon' src={navIcon} height='51rem' width='51rem' alt='' style={{transform: isOpen ? 'translateY(4px)' : 'translateY(0)'}}></img>
                </button>
                {isOpen && (
                    <div className='dropdown-content'>
                        <div className='speech-bubble'>
                            <a href='#home' onClick={() => setIsOpen(false)}>Home</a>
                            <a href='#about' onClick={() => setIsOpen(false)}>About</a>
                            <a href='#project' onClick={() => setIsOpen(false)}>Project</a>
                            <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </div> {/* end nav-container */}
            <div className='left'>
                <div id='home'>
                    <div className='intro ml-s'>
                        <h5 className='heading-5'>hello there👋, i’m</h5>
                        <div className='name-container'>
                            <span>Alan Wang</span>
                        </div>
                        <h4 className='heading-4 font-s primary-c mt-s mb-s'>full-stack developer</h4>
                        <p className='paragraph font-s mt-s mb-ss'>Python • Java • C++</p>
                        <p className='paragraph font-s mb-ss'>Brooklyn, New York 🌍🗽 <i> Open to Relocation</i></p>
                    </div> 
                    <div>
                        <button className="resume-button ml-s mt-l" onClick={openResume}>view resume</button>
                            <div id="resumePopup" className="popup">
                                <span className="close" onClick={closeResume}>&times;</span>
                                <iframe src={resume} className="resume-iframe" title='resume'></iframe>
                            </div>
                    </div>
                </div> {/* end div for home */}
            </div> {/* end div for intro */}
            <div className='right'></div> {/* the background pic */}
            <div id='about' className='mt-ll ml-s mb-l'> {/* start div for about */}
                <h5 className='heading-4 sec-color mb-s mt-l'>About Me —</h5>
                <div className='about-me'>
                    <div className='about-me-p mr-ss'>
                        <p>
                            <br/> Hey there! 👋 I’m Alan Wang, a passionate full-stack developer with a love for creating 
                            seamless digital experiences. Whether it's coding the backend logic in Python, C++, 
                            or crafting smooth front-end designs with JavaScript and CSS, I thrive on building things that make people's 
                            lives easier. 🌐 
                        </p>
                        <p>
                            <br/> Based in Brooklyn, New York, I’m always looking for new challenges that push
                            the boundaries of technology. My journey into software development started with a
                            simple love for problem-solving, and it’s led me to explore the fascinating world of 
                            full-stack development. From designing responsive interfaces to building robust 
                            systems that handle complex data, I’m all about creating solutions that work flawlessly. <br/>
                        </p>
                        <p>
                            <br/> Outside of tech, I’m a fierce badminton enthusiast 🏸. Whenever I’m not coding, 
                            you’ll likely find me on the court.
                        </p>
                    </div>

                    <div className='about-img mr-s'>
                        <img src={working} alt=''></img>
                    </div>

                </div>
                
            </div>
            <div id='project' className='mt-l ml-s'> {/* the start to project div*/}
                <section>
                    <h5 className='heading-4 sec-color'>My Projects —</h5>
                </section>
            </div>
        </div> // end div for app 
  ); // end return
} // end function App()

export default App;
