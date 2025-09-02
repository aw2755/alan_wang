import RESUME from './Alan_Resume.pdf';
import { projects } from "./Projects.js";
import "./index.css";

function App() {
    // specifies what the UI should look like for that component.
    // returns a set of HTML-like elements, which are actually JSX(JavaScript XML) syntax
    return (
        <div id='home' className='font-mono min-w-[360px] leading-relaxed'> {/* start home div */}
            <div className='flex items-center justify-between px-8 py-5 text-black sticky top-0 z-50 backdrop-blur-md border-b bg-white/70'>
                <div>
                    <a href="#home" className='text-sm lg:text-lg hover:text-gray-400 transition-colors'>Alan Wang</a>
                </div>
                <div className='flex items-center gap-4 lg:gap-8 text-sm lg:text-base'>
                    <a href="#home" className='hover:text-gray-400 transition-colors'> Home </a>
                    <span className=''>|</span>
                    <a href="#about" className='hover:text-gray-400 transition-colors'> About </a>
                    <span className=''>|</span>
                    <a href="#project" className='hover:text-gray-400 transition-colors'> Projects </a>
                </div>
            </div> {/* end header div*/}

            <div> {/* start div for intro */}
                <div className='min-h-screen flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col items-center justify-center font-semibold text-gray-900'>
                        <p className='text-5xl lg:text-7xl'>Alan Wang</p>
                        <p className='text-sm lg:text-xl'>full-stack developer</p>
                    </div>

                    {/* view resume button */}
                    <div>
                        <a href={RESUME} download="Alan_Wang_Resume.pdf">
                            <button className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-700 hover:shadow-lg'> 
                                Download Resume</button>
                        </a>
                    </div>

                </div>
            </div> {/* end div for intro */}

            <div id='about' className='scroll-mt-20 px-6'> {/* start about div */}
                <h2 className='flex items-center text-2xl font-semibold gap-3'>
                    About Me 
                    <span>—</span>
                </h2>

                <div> {/* start about paragraph div */}
                    <div>
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
                    </div> 

                </div> {/* end about paragraph div */} 
            </div> {/* end about me div */}

            <div id='project' className='scroll-mt-20 px-6 mt-8'> {/* start project div */}
                <h2 className='flex items-center text-2xl font-semibold gap-3'>
                    Projects
                    <span>—</span>
                </h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'> {/* start listing projects div */}
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className='p-6 border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div>
                                <h3 className='text-xl font-semibold mb-5'>
                                    {project.title}
                                </h3>
                                <p className='mb-5'>
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2 items-center justify-center'>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className='px-3 py-1 text-sm rounded bg-gray-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div> {/* end listing projects div */}
            </div> {/* end project div */}
            
            <div className='flex items-center justify-center mt-5 py-5 text-black border-t text-xs lg:text-base'> {/* start footer div */}
                <footer>
                    <p className='flex gap-2 lg:gap-6'> PORTFOLIO BY <span>—</span> Alan Wang <span>|</span>
                        <a href="https://www.linkedin.com/in/wang-alan/" target='_blank' rel="noreferrer" className='hover:text-gray-400 transition-colors'> LinkedIn </a> <span>|</span>
                        <a href='https://github.com/aw2755' target='_blank' rel="noreferrer" className='hover:text-gray-400 transition-colors'> Github </a> <span>|</span>
                        <a href="mailto:alanwang07012002@gmail.com?subject=Portfolio Inquiry" target='_blank' rel="noreferrer" className='hover:text-gray-400 transition-colors'> Email </a>
                    </p>
                </footer>
            </div> {/* end footer div */}

        </div> // end div for app 
  ); // end return
} // end function App()

export default App;
